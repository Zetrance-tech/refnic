import React from 'react';

interface Commodity {
  name: string;
  image: string;
}

const commodities: Commodity[] = [
  { name: 'Lithium carbonate', image: '/assets/img/1.png' },
  { name: 'Lithium hydro-oxide', image: '/assets/img/2.png' },
  { name: 'Cobalt cathode metal', image: '/assets/img/3.png' },
  { name: 'Cobalt Sulphate', image: '/assets/img/4.png' },
];

interface CommoditiesProps {
  openModal: (type: 'buy' | 'sell', mineral: string) => void;
}

const Commodities: React.FC<CommoditiesProps> = ({ openModal }) => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Commodities We Trade
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {commodities.map((commodity) => (
            <div 
              key={commodity.name} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col overflow-hidden"
            >
              <img src={commodity.image} alt={commodity.name} className="w-full h-48 object-cover rounded-t-xl"/>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{commodity.name}</h3>
                <div className="mt-auto flex space-x-4">
                  <button
                    onClick={() => openModal('buy', commodity.name)}
                    className="flex-1 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => openModal('sell', commodity.name)}
                    className="flex-1 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
                  >
                    Sell
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commodities;
