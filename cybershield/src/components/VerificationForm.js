import React, { useState, useEffect, useRef } from 'react';
import CryptoJS from 'crypto-js';

const VerificationForm = () => {
  const [selectedField, setSelectedField] = useState('mobile');
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  
  const validationPatterns = {
    mobile: {
      pattern: /^[6-9]\d{9}$/,
      message: 'Enter a valid 10-digit mobile number starting with 6-9'
    },
    pan: {
      pattern: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
      message: 'Enter a valid PAN number (e.g., ABCDE1234F)'
    },
    aadhar: {
      pattern: /^[2-9]\d{11}$/,
      message: 'Enter a valid 12-digit Aadhar number'
    },
    passport: {
      pattern: /^[A-Z][0-9]{7}$/,
      message: 'Enter a valid passport number (e.g., A1234567)'
    },
    email: {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Enter a valid email address'
    }
  };
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

  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
    setInputValue('');
    setIsValid(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    const pattern = validationPatterns[selectedField].pattern;
    setIsValid(pattern.test(value));
  };

  const generateHash = (value) => {
    return CryptoJS.SHA256(value).toString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isValid) {
      alert('Please enter a valid value for the selected field');
      setLoading(false);
      return;
    }

    const hashes = {
      [selectedField]: generateHash(inputValue)
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
          <label className="block text-sm font-medium text-gray-700">Select Field to Verify</label>
          <select
            value={selectedField}
            onChange={handleFieldChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="mobile">Mobile Number</option>
            <option value="pan">PAN Card</option>
            <option value="aadhar">Aadhar Card</option>
            <option value="passport">Passport</option>
            <option value="email">Email</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            {selectedField.charAt(0).toUpperCase() + selectedField.slice(1)}
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 ${isValid ? 'border-gray-300 focus:border-indigo-500' : 'border-red-500 focus:border-red-500'}`}
            placeholder={`Enter ${selectedField}`}
            required
          />
          {!isValid && (
            <p className="mt-1 text-sm text-red-600">
              {validationPatterns[selectedField].message}
            </p>
          )}
        </div>


        <div className="mt-4 flex flex-col space-y-4">
          <div ref={turnstileRef} className="self-center"></div>
          
          <button
            type="submit"
            disabled={loading || !isValid || !turnstileToken}
            className={`px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${loading || !turnstileToken ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>

          {result !== null && (
            <div className={`p-4 rounded-md ${result ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {result ? 'Verification successful!' : 'Verification failed'}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default VerificationForm;
