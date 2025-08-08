import React, { useState } from 'react';

const Trade: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'buy' | 'sell' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const openModal = (type: 'buy' | 'sell') => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
  };

  const commodities = [
    'Lithium carbonate',
    'Lithium hydro-oxide',
    'Cobalt cathode metal',
    'Cobalt Sulphate',
    'Nickel Cathode Metal',
    'Nickel sulphate',
    'Nickel Carbonate',
    'Manganese sulphate powder',
    'Manganese sulphate Solution',
    'Black mass',
    'Copper',
    'Aluminum',
    'Iron',
    'Plastic (PPE, PE)',
    'Second life cells',
  ];

  const filteredCommodities = commodities.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCommodities.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <img src="/assets/img/10.png" alt={item} className="w-full h-32 object-cover"/>
                <div className="p-4">
                    <p className="text-base font-semibold text-gray-800 mb-3">{item}</p>
                    <div className="flex justify-between">
                    <button
                        onClick={() => openModal('buy')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Buy
                    </button>
                    <button
                        onClick={() => openModal('sell')}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sell
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        {showModal && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-[600]">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">{modalType === 'buy' ? 'Buy Mineral' : 'Sell Mineral'}</h2>
                <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                        Contact Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="contact"
                        type="text"
                        placeholder="Contact Number"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your Email"
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
                        placeholder="Company Name"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        type="text"
                        placeholder="Location"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mineral">
                        Mineral
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="mineral"
                    >
                        {commodities.map((mineral) => (
                        <option key={mineral} value={mineral}>
                            {mineral}
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
                        type="number"
                        placeholder="Quantity"
                    />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
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
