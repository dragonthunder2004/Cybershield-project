# Cybershield Project

## Overview
Cybershield is a web application built with React (frontend) and Node.js (backend).

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git
- MySQL (v8.0 or higher)

## Dependencies

### Frontend Dependencies
```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.5.2",
  "crypto-js": "^4.2.0",
  "@fontsource/noto-sans": "^5.2.6",
  "@fontsource/public-sans": "^5.2.5",
  "@phosphor-icons/react": "^2.1.7"
}
```

Development dependencies:
- TailwindCSS
- PostCSS
- Autoprefixer

### Backend Dependencies
```json
{
  "express": "^5.1.0",
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "mysql2": "^3.14.1",
  "node-fetch": "^2.7.0"
}
```

## Installation and Setup

### Clone the Repository
```bash
git clone <repository-url>
cd Cybershield-project
```

### Frontend Setup (React)
Navigate to the frontend directory:
```bash
cd cybershield
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

### Backend Setup
Open a new terminal and navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the backend directory with the following variables:
```env
PORT=5000
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=cybershield
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
```

Set up the MySQL database:
1. Install MySQL if not already installed
2. Create a new database named 'cybershield'
3. Configure the .env file with your MySQL credentials

Start the backend server:
```bash
npm start
```

The backend API will be available at `http://localhost:5000`

## Operating System Specific Instructions

### Windows
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Install MySQL from [mysql.com](https://dev.mysql.com/downloads/installer/)
- Use Command Prompt or PowerShell for running commands
- Use backslashes (`\`) in file paths
- Run commands without `sudo`

### macOS
- Install Node.js using Homebrew: `brew install node`
- Install MySQL: `brew install mysql`
- Start MySQL: `brew services start mysql`
- Use Terminal.app or iTerm
- Use forward slashes (`/`) in file paths
- Run commands with `sudo` if needed: `sudo npm install -g <package>`

### Linux
- Install Node.js using package manager:
  ```bash
  # Using Ubuntu/Debian
  curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
  sudo apt-get install -y nodejs

  # Using Fedora
  sudo dnf install nodejs
  ```
- Install MySQL:
  ```bash
  # Ubuntu/Debian
  sudo apt install mysql-server
  sudo systemctl start mysql

  # Fedora
  sudo dnf install mysql-server
  sudo systemctl start mysqld
  ```
- Use terminal emulator
- Use forward slashes (`/`) in file paths
- Run commands with `sudo` if needed: `sudo npm install -g <package>`

## Development
- Frontend code is in the `cybershield` directory
- Backend code is in the `backend` directory
- Make sure both frontend and backend servers are running simultaneously
- Ensure MySQL service is running before starting the backend

## Troubleshooting
- If port 3000 is in use, React will automatically suggest using another port
- If modules are missing, run `npm install` in the respective directories
- For permission errors on Linux/macOS, use `sudo` before commands
- Clear npm cache if facing installation issues: `npm cache clean -f`
- If MySQL connection fails:
  1. Check if MySQL service is running
  2. Verify credentials in .env file
  3. Ensure database 'cybershield' exists
  4. Check MySQL user permissions