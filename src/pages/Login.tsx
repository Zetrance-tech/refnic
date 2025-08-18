import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signupFormData, setSignupFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    company: '',
    password: '',
  });

  const handleSignupInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupFormData({
      ...signupFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // IMPORTANT: Replace this with your deployed Google Apps Script Web App URL for signup data
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxyu4TWHgsCsOSAzaGLrDnURv3V4Bvu8m-K3WSd8a2-Dhfqzhyiv_5hmgLIR_88yjXw/exec';

    const data = {
      timestamp: new Date().toLocaleString(),
      ...signupFormData,
    };

    try {
      await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'no-cors',
      });
      
      alert('Signup successful!');
      setSignupFormData({
        fullname: '',
        email: '',
        phone: '',
        company: '',
        password: '',
      });
      setIsSignUp(false); // Optionally switch to login form after successful signup
    } catch (error) {
      console.error('Error!', error);
      alert('There was an error during signup.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-32 pb-12">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full" style={{ maxHeight: '80vh' }}>
        {/* Left side with image */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img src="/assets/img/11.png" alt="Renewable Energy" className="object-cover h-full w-full" />
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          {isSignUp ? (
            <div className="overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Create an Account</h2>
              <p className="text-gray-600 mb-8">Get started with a free account.</p>
              <form onSubmit={handleSignupSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                    Full Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fullname"
                    type="text"
                    placeholder="John Doe"
                    value={signupFormData.fullname}
                    onChange={handleSignupInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={signupFormData.email}
                    onChange={handleSignupInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Contact Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="123-456-7890"
                    value={signupFormData.phone}
                    onChange={handleSignupInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                    Company Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="company"
                    type="text"
                    placeholder="Your Company"
                    value={signupFormData.company}
                    onChange={handleSignupInputChange}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    value={signupFormData.password}
                    onChange={handleSignupInputChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSignUp(false)}
                    className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back</h2>
              <p className="text-gray-600 mb-8">Please sign in to your account.</p>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSignUp(true)}
                    className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
