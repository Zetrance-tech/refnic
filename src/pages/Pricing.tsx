import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status

  useEffect(() => {
    // Simulate login status check
    // In a real application, you would check a token or user session
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
  }, []);

  const conversionRates = {
    USD: 1,
    INR: 83.5,
    RMB: 7.25,
  };

  const minerals = [
  {
    name: 'Lithium carbonate',
    price: 10440,
    trend: 'down',
    data: [
      { name: 'Jan', uv: 10484 },
      { name: 'Feb', uv: 10484 },
      { name: 'Mar', uv: 11026 },
      { name: 'Apr', uv: 11026 },
      { name: 'May', uv: 11026 },
      { name: 'Jun', uv: 10440 },
    ],
  },
  {
    name: 'Lithium hydro-oxide',
    price: 10340,
    trend: 'down',
    data: [
      { name: 'Jan', uv: null },
      { name: 'Feb', uv: null },
      { name: 'Mar', uv: 10705 },
      { name: 'Apr', uv: 10705 },
      { name: 'May', uv: 10705 },
      { name: 'Jun', uv: 10340 },
    ],
  },
  {
    name: 'Cobalt cathode metal',
    price: 32965,
    trend: 'up',
    data: [
      { name: 'Jan', uv: 23780 },
      { name: 'Feb', uv: 21721 },
      { name: 'Mar', uv: 31535 },
      { name: 'Apr', uv: 33314 },
      { name: 'May', uv: 33260 },
      { name: 'Jun', uv: 32965 },
    ],
  },
  {
    name: 'Cobalt Sulphate',
    price: 0,
    trend: 'down',
    data: [
      { name: 'Jan', uv: null },
      { name: 'Feb', uv: null },
      { name: 'Mar', uv: null },
      { name: 'Apr', uv: null },
      { name: 'May', uv: null },
      { name: 'Jun', uv: null },
    ],
  },
  {
    name: 'Nickel Cathode Metal',
    price: 14840,
    trend: 'down',
    data: [
      { name: 'Jan', uv: 15394 },
      { name: 'Feb', uv: 15394 },
      { name: 'Mar', uv: 15573 },
      { name: 'Apr', uv: 15310 },
      { name: 'May', uv: 15850 },
      { name: 'Jun', uv: 14840 },
    ],
  },
  {
    name: 'Nickel sulphate',
    price: 0,
    trend: 'stable',
    data: [
      { name: 'Jan', uv: null },
      { name: 'Feb', uv: null },
      { name: 'Mar', uv: null },
      { name: 'Apr', uv: null },
      { name: 'May', uv: null },
      { name: 'Jun', uv: null },
    ],
  },
  {
    name: 'Manganese sulphate powder',
    price: 1180,
    trend: 'down',
    data: [
      { name: 'Jan', uv: null },
      { name: 'Feb', uv: null },
      { name: 'Mar', uv: 1245 },
      { name: 'Apr', uv: 1245 },
      { name: 'May', uv: 1245 },
      { name: 'Jun', uv: 1180 },
    ],
  },
  {
    name: 'Manganese sulphate Solution',
    price: 1180,
    trend: 'down',
    data: [
      { name: 'Jan', uv: null },
      { name: 'Feb', uv: null },
      { name: 'Mar', uv: 1245 },
      { name: 'Apr', uv: 1245 },
      { name: 'May', uv: 1245 },
      { name: 'Jun', uv: 1180 },
    ],
  },
  {
    name: 'Black mass',
    price: 4896,
    trend: 'down',
    data: [
      { name: 'Jan', uv: 4896 },
      { name: 'Feb', uv: 4896 },
      { name: 'Mar', uv: 4896 },
      { name: 'Apr', uv: 4896 },
      { name: 'May', uv: 4896 },
      { name: 'Jun', uv: 4896 },
    ],
  },
  {
    name: 'Copper',
    price: 9835,
    trend: 'up',
    data: [
      { name: 'Jan', uv: 8991 },
      { name: 'Feb', uv: 9331 },
      { name: 'Mar', uv: 9740 },
      { name: 'Apr', uv: 9177 },
      { name: 'May', uv: 9533 },
      { name: 'Jun', uv: 9835 },
    ],
  },
  {
    name: 'Aluminum',
    price: 2526,
    trend: 'down',
    data: [
      { name: 'Jan', uv: 2573 },
      { name: 'Feb', uv: 2658 },
      { name: 'Mar', uv: 2658 },
      { name: 'Apr', uv: 2372 },
      { name: 'May', uv: 2449 },
      { name: 'Jun', uv: 2526 },
    ],
  },
  {
    name: 'Iron',
    price: 94470,
    trend: 'down',
    data: [
      { name: 'Jan', uv: 101590 },
      { name: 'Feb', uv: 106900 },
      { name: 'Mar', uv: 102510 },
      { name: 'Apr', uv: 99760 },
      { name: 'May', uv: 99120 },
      { name: 'Jun', uv: 94470 },
    ],
  },
  {
    name: 'Scrap NMC Battery',
    price: 1035,
    trend: 'stable',
    data: [
      { name: 'Jan', uv: 1030 },
      { name: 'Feb', uv: 1070 },
      { name: 'Mar', uv: 1010 },
      { name: 'Apr', uv: 1050 },
      { name: 'May', uv: 1090 },
      { name: 'Jun', uv: 1030 },
    ],
  },

  {
    name: 'Scrap LCO Battery',
    price: 3790,
    trend: 'stable',
    data: [
      { name: 'Jan', uv: 3794 },
      { name: 'Feb', uv: 3780 },
      { name: 'Mar', uv: 3670 },
      { name: 'Apr', uv: 3760 },
      { name: 'May', uv: 3670 },
      { name: 'Jun', uv: 3790 },
    ],
  },
  {
    name: 'Scrap LFP Battery',
    price: 575,
    trend: 'stable',
    data: [
      { name: 'Jan', uv: 575 },
      { name: 'Feb', uv: 500 },
      { name: 'Mar', uv: 470 },
      { name: 'Apr', uv: 520 },
      { name: 'May', uv: 550 },
      { name: 'Jun', uv: 575 },
    ],
  },
];

  const filteredMinerals = minerals.filter((mineral) =>
    mineral.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCurrencySymbol = (currency: string) => {
    switch (currency) {
      case 'USD':
        return '$';
      case 'INR':
        return '₹';
      case 'RMB':
        return '¥';
      default:
        return '$';
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Real-Time Mineral
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Pricing & Trends
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Stay updated with the latest market prices and trends for key minerals.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-4">
        <div className="flex justify-center my-8">
            <input
            type="text"
            placeholder="Search for minerals..."
            className="w-full max-w-lg p-2 border border-gray-300 rounded-lg"
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="ml-4 p-2 border border-gray-300 rounded-lg"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="RMB">RMB</option>
            </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMinerals.map((mineral, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                <h2 className="text-xl font-bold mb-2">{mineral.name}</h2>
                {!isLoggedIn ? (
                  <div className="relative">
                    <p className="text-2xl font-semibold text-gray-800 mb-4">
                      {getCurrencySymbol(currency)}
                      <span className="blur-sm">
                        {(mineral.price * conversionRates[currency as keyof typeof conversionRates]).toLocaleString()}
                      </span>
                    </p>
                    <ResponsiveContainer width="100%" height={200} className="blur-sm">
                      <LineChart data={mineral.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 rounded-lg">
                      <p className="text-lg font-semibold text-gray-700 mb-4 text-center">
                        Sign in to view pricing and trend
                      </p>
                      <button
                        onClick={() => navigate('/login')}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-2xl font-semibold text-gray-800 mb-4">
                      {getCurrencySymbol(currency)}
                      {(mineral.price * conversionRates[currency as keyof typeof conversionRates]).toLocaleString()}
                    </p>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={mineral.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </>
                )}
                <div className="flex justify-center mt-4">
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
