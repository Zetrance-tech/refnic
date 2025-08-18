import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Trade: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'buy' | 'sell' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    company: '',
    location: '',
    mineral: '',
    quantity: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // IMPORTANT: Replace this with your deployed Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzAxEmyEm_3IU9nNmFFnggmv_7wSQMSPWJ4cSgB88JxlhTlpHmJrfaT3krx-XxWaTa3/exec';
    
    const data = {
      timestamp: new Date().toLocaleString(),
      type: modalType || '',
      ...formData,
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
      
      alert('Form submitted successfully!');
      closeModal();
    } catch (error) {
      console.error('Error!', error);
      alert('There was an error submitting the form.');
    }
  };

  const openModal = (type: 'buy' | 'sell', mineral: string) => {
    setModalType(type);
    setShowModal(true);
    setFormData({
      name: '',
      contact: '',
      email: '',
      company: '',
      location: '',
      quantity: '',
      mineral: mineral,
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
  };

  const commodities = [
    { name: 'Lithium carbonate', location: 'North India', price: '₹5,00,000/ton' },
    { name: 'Lithium hydro-oxide', location: 'South India', price: '₹5,50,000/ton' },
    { name: 'Cobalt cathode metal', location: 'North India', price: '₹2,00,000/ton' },
    { name: 'Cobalt Sulphate', location: 'South India', price: '₹2,20,000/ton' },
    { name: 'Nickel Cathode Metal', location: 'North India', price: '₹1,50,000/ton' },
    { name: 'Nickel sulphate', location: 'South India', price: '₹1,60,000/ton' },
    { name: 'Nickel Carbonate', location: 'North India', price: '₹1,70,000/ton' },
    { name: 'Manganese sulphate powder', location: 'South India', price: '₹80,000/ton' },
    { name: 'Manganese sulphate Solution', location: 'South India', price: '₹85,000/ton' },
    { name: 'Black mass', location: 'North India', price: '₹1,20,000/ton' },
    { name: 'Copper', location: 'South India', price: '₹7,00,000/ton' },
    { name: 'Aluminum', location: 'West India', price: '₹2,00,000/ton' },
    { name: 'Iron', location: 'East India', price: '₹40,000/ton' },
    { name: 'Plastic (PPE, PE)', location: 'West India', price: '₹50,000/ton' },
    { name: 'Second life cells', location: 'North India', price: '₹3,00,000/ton' },
  ];

  const filteredCommodities = commodities.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              Trade Minerals with 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Confidence
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              A transparent and efficient marketplace for buying and selling minerals.
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
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Commodities We Trade</h2>
          <div className="space-y-4">
            {filteredCommodities.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col sm:flex-row justify-between items-center">
                <div className="flex-1 mb-4 sm:mb-0">
                  <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.location}</p>
                  {isLoggedIn ? (
                    <p className="text-md font-bold text-gray-800">{item.price}</p>
                  ) : (
                    <p className="text-md font-bold text-gray-800">
                      ₹<span className="blur-sm">X,XX,XXX</span>/ton
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {!isLoggedIn && (
                    <button
                      onClick={() => navigate('/login')}
                      className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Login to View Prices
                    </button>
                  )}
                  <button
                    onClick={() => openModal('buy', item.name)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => openModal('sell', item.name)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Sell
                  </button>
                  <button onClick={() => navigate('/pricing')} className="text-gray-500 hover:text-gray-700 p-2">
                    <i className="fas fa-chart-line fa-lg"></i>
                  </button>
                  <a href={`https://wa.me/+91-7417333936?text=Hi,%20I%20am%20interested%20in%20${item.name}`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 p-2">
                    <i className="fab fa-whatsapp fa-lg"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showModal && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-[600]">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">{modalType === 'buy' ? 'Buy Mineral' : 'Sell Mineral'}</h2>
                <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                        Contact Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="contact"
                        name="contact"
                        type="text"
                        placeholder="Contact Number"
                        value={formData.contact}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                        Company Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mineral">
                        Mineral
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="mineral"
                        name="mineral"
                        value={formData.mineral}
                        onChange={handleInputChange}
                    >
                        {commodities.map((mineral) => (
                        <option key={mineral.name} value={mineral.name}>
                            {mineral.name}
                        </option>
                        ))}
                    </select>
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                        Quantity (in ton)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="quantity"
                        name="quantity"
                        type="number"
                        placeholder="Quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                    />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    >
                    Submit
                    </button>
                    <button
                    onClick={closeModal}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    >
                    Close
                    </button>
                </div>
                </form>
            </div>
            </div>
        )}
        </div>
    </div>
  );
};

export default Trade;
