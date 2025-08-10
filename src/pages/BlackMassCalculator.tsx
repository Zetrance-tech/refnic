import React, { useState } from 'react';

const BlackMassCalculator: React.FC = () => {
  const [commodities] = useState([
    { name: 'Cobalt', value: 32965, percent: 0, payable: 0 },
    { name: 'Nickel', value: 14840, percent: 0, payable: 0 },
    { name: 'Lithium', value: 10440, percent: 0, payable: 0 },
    { name: 'Manganese', value: 1200, percent: 0, payable: 0 },
    { name: 'Copper', value: 8500, percent: 0, payable: 0 },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCommodity, setSelectedCommodity] = useState(commodities[0]);
  const [currency, setCurrency] = useState<keyof typeof exchangeRates>('USD');
  const exchangeRates = {
    USD: 1,
    INR: 87.5,
    RNB: 7.25,
  };

  const handleSelectChange = (commodityName: string) => {
    const commodity = commodities.find(c => c.name === commodityName);
    if (commodity) {
      setSelectedCommodity(commodity);
    }
  };

  const handleSelectedCommodityChange = (field: string, value: number) => {
    setSelectedCommodity({ ...selectedCommodity, [field]: value });
  };

  const calculatePrice = () => {
    const { value, percent, payable } = selectedCommodity;
    const total = value * (percent / 100) * (payable / 100);
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
          <div className="mb-6">
            <label htmlFor="commodity-select" className="block text-lg font-medium text-gray-700 mb-2">
              Select a Base Mineral
            </label>
            <select
              id="commodity-select"
              value={selectedCommodity.name}
              onChange={(e) => handleSelectChange(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              {commodities.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-4">
            <div>
              <label className="font-bold text-lg text-gray-800">Value (USD)</label>
              <input
                type="number"
                value={selectedCommodity.value}
                onChange={(e) => handleSelectedCommodityChange('value', parseFloat(e.target.value) || 0)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <label className="font-bold text-lg text-gray-800">Percent (%)</label>
              <input
                type="number"
                placeholder="e.g., 15"
                value={selectedCommodity.percent || ''}
                onChange={(e) => handleSelectedCommodityChange('percent', parseFloat(e.target.value) || 0)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <label className="font-bold text-lg text-gray-800">Payable (%)</label>
              <input
                type="number"
                placeholder="e.g., 80"
                value={selectedCommodity.payable || ''}
                onChange={(e) => handleSelectedCommodityChange('payable', parseFloat(e.target.value) || 0)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
          </div>

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
              <h3 className="text-2xl font-semibold text-gray-800">Total Calculated Value (Per Ton)</h3>
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
