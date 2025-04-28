import React, { useState, useEffect, useRef } from 'react';
import CryptoJS from 'crypto-js';

const VerificationForm = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    pan: '',
    aadhar: '',
    passport: '',
    email: ''
  });
  const [turnstileToken, setTurnstileToken] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const turnstileRef = useRef();

  useEffect(() => {
    // Load the Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    const loadTurnstile = () => {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: '0x4AAAAAABVMr2hhkzs-DKjG',
          callback: function(token) {
            setTurnstileToken(token);
          },
        });
      } else {
        // If Turnstile is not loaded yet, try again in 1 second
        setTimeout(loadTurnstile, 1000);
      }
    };
    
    loadTurnstile();
    
    return () => {
      // Cleanup if component unmounts
      if (window.turnstile) {
        window.turnstile.remove('#turnstile-widget');
      }
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateHash = (value) => {
    return CryptoJS.SHA256(value).toString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const hashes = {
      mobile: generateHash(formData.mobile),
      pan: generateHash(formData.pan),
      aadhar: generateHash(formData.aadhar),
      passport: generateHash(formData.passport),
      email: generateHash(formData.email)
    };

    try {
      const response = await fetch('http://localhost:5000/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hashes,
          turnstileToken
        }),
      });

      const data = await response.json();
      setResult(data.match);
    } catch (error) {
      console.error('Error:', error);
      setResult(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Verification</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">PAN Number</label>
          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Aadhar Number</label>
          <input
            type="text"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Passport Number</label>
          <input
            type="text"
            name="passport"
            value={formData.passport}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="my-4 flex justify-center">
          <div
            id="turnstile-widget"
            ref={turnstileRef}
            className="overflow-hidden"
          ></div>
        </div>
        <button
          type="submit"
          disabled={loading || !turnstileToken}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Verifying...' : 'Verify'}
        </button>
      </form>
      {result !== null && (
        <div className={`mt-4 p-4 rounded-md ${result ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {result ? 'Verification successful!' : 'Verification failed'}
        </div>
      )}
    </div>
  );
};

export default VerificationForm;
