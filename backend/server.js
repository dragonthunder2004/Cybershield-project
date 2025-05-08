const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create rate limiter for verify endpoint
const verifyLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many verification attempts from this IP. Please try again after 24 hours.'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Initialize database and table
async function initializeDatabase() {
  try {
    // Create database if not exists
    await pool.promise().query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'cybershield'}`);
    
    // Use the database
    await pool.promise().query(`USE ${process.env.DB_NAME || 'cybershield'}`);
    
    // Create table if not exists
    await pool.promise().query(`
      CREATE TABLE IF NOT EXISTS user_data (
        id INT AUTO_INCREMENT PRIMARY KEY,
        mobile_hash VARCHAR(64) NOT NULL,
        pan_hash VARCHAR(64) NOT NULL,
        aadhar_hash VARCHAR(64) NOT NULL,
        passport_hash VARCHAR(64) NOT NULL,
        email_hash VARCHAR(64) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database and table initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

// Initialize database on startup
initializeDatabase();

// Verify Turnstile token
async function verifyTurnstileToken(token) {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });
  
  return await response.json();
}

// Store user data
app.post('/api/signup', async (req, res) => {
  const { hashes, turnstileToken } = req.body;

  // Verify Turnstile token
  const turnstileVerification = await verifyTurnstileToken(turnstileToken);
  if (!turnstileVerification.success) {
    return res.status(400).json({ error: 'Invalid CAPTCHA' });
  }

  try {
    // Insert the hashes into the database
    await pool.promise().execute(
      'INSERT INTO user_data (mobile_hash, pan_hash, aadhar_hash, passport_hash, email_hash) VALUES (?, ?, ?, ?, ?)',
      [hashes.mobile, hashes.pan, hashes.aadhar, hashes.passport, hashes.email]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Verify user data
app.post('/api/verify', verifyLimiter, async (req, res) => {
  const { hashes, turnstileToken } = req.body;

  // Verify Turnstile token
  const turnstileVerification = await verifyTurnstileToken(turnstileToken);
  if (!turnstileVerification.success) {
    return res.status(400).json({ error: 'Invalid CAPTCHA' });
  }

  try {
    // Get the field type and hash
    const fieldType = Object.keys(hashes)[0];
    const hash = hashes[fieldType];
    
    // Build the query dynamically based on the field type
    const query = `SELECT * FROM user_data WHERE ${fieldType}_hash = ?`;
    const [rows] = await pool.promise().execute(query, [hash]);

    if (rows.length > 0) {
      res.json({ match: true });
    } else {
      res.json({ match: false });
    }
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
