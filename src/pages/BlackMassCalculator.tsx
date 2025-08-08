import React, { useState } from 'react';

const BlackMassCalculator: React.FC = () => {
  const [commodities, setCommodities] = useState([
    { name: 'Cobalt', value: 32965, percent: 0, payable: 0 },
    { name: 'Nickel', value: 14840, percent: 0, payable: 0 },
    { name: 'Lithium', value: 10440, percent: 0, payable: 0 },
    { name: 'Manganese', value: 1200, percent: 0, payable: 0 },
    { name: 'Copper', value: 8500, percent: 0, payable: 0 },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currency, setCurrency] = useState<keyof typeof exchangeRates>('USD');
  const exchangeRates = {
    USD: 1,
    INR: 83.5,
    RNB: 7.25,
  };

  const handleInputChange = (index: number, field: string, value: number) => {
    const newCommodities = [...commodities];
    newCommodities[index] = { ...newCommodities[index], [field]: value };
    setCommodities(newCommodities);
  };

  const calculatePrice = () => {
    const total = commodities.reduce((acc, commodity) => {
      const commodityPrice = commodity.value * (commodity.percent / 100) * (commodity.payable / 100);
      return acc + commodityPrice;
    }, 0);
    setTotalPrice(total);
  };

  const convertedPrice = totalPrice * exchangeRates[currency];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="relative py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Black Mass Price Calculator
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
            Calculate the value of black mass based on commodity prices and content.
          </p>
        </div>
      </section>

      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 font-semibold text-gray-700">
            <div className="md:col-span-1">Commodity</div>
            <div>Value (USD)</div>
            <div>Percent (%)</div>
            <div>Payable (%)</div>
          </div>

          {commodities.map((commodity, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center mb-4">
              <div className="font-bold text-lg text-gray-800">{commodity.name}</div>
              <div>
                <input
                  type="number"
                  value={commodity.value}
                  onChange={(e) => handleInputChange(index, 'value', parseFloat(e.target.value) || 0)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="e.g., 15"
                  value={commodity.percent || ''}
                  onChange={(e) => handleInputChange(index, 'percent', parseFloat(e.target.value) || 0)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="e.g., 80"
                  value={commodity.payable || ''}
                  onChange={(e) => handleInputChange(index, 'payable', parseFloat(e.target.value) || 0)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          ))}

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={calculatePrice}
              className="bg-green-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-green-700 transition duration-300 text-lg"
            >
              Calculate Total Value
            </button>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as keyof typeof exchangeRates)}
              className="p-3 border border-gray-300 rounded-lg"
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="RNB">RNB</option>
            </select>
          </div>

          {totalPrice > 0 && (
            <div className="mt-10 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">Total Calculated Value</h3>
              <p className="text-5xl font-bold text-green-600 mt-2">
                {currency === 'USD' && '$'}
                {currency === 'INR' && '₹'}
                {currency === 'RNB' && '¥'}
                {convertedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlackMassCalculator;
