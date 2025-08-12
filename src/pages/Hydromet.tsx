import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Zap, Cpu, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HydrometPage: React.FC = () => {
  const recoveredMaterials = [
    { name: 'Lithium Carbonate', purity: '99.5%+', color: 'from-blue-400 to-blue-600', description: 'High-purity lithium for new battery cathodes.', usage: 'Battery Manufacturing' },
    { name: 'Cobalt Sulphate', purity: '99.9%+', color: 'from-indigo-400 to-indigo-600', description: 'Essential for high-performance battery cathodes.', usage: 'Battery Manufacturing' },
    { name: 'Nickel Sulphate', purity: '99.9%+', color: 'from-green-400 to-green-600', description: 'Key component for NMC and NCA batteries.', usage: 'Battery Manufacturing' },
    { name: 'Manganese Sulphate', purity: '99.7%+', color: 'from-pink-400 to-pink-600', description: 'Used in various battery chemistries.', usage: 'Battery Manufacturing' },
    { name: 'Graphite', purity: '98%+', color: 'from-gray-400 to-gray-600', description: 'Recovered anode material for various uses.', usage: 'Industrial Applications' },
  ];

  const processSteps = [
    {
      id: "01",
      title: "Leaching",
      description: "Black mass is dissolved in a specialized acidic solution, transferring the metal ions into a liquid 'leachate'. This is the first and most critical step to ensure high recovery rates.",
      icon: <Droplets className="h-8 w-8" />,
      image: "/public/assets/img/13.png",
      details: [
        "Precise pH and temperature control",
        "High-efficiency reactors",
        "Continuous process monitoring",
        "Optimized reagent dosage"
      ]
    },
    {
      id: "02",
      title: "Solvent Extraction & Purification",
      description: "The leachate undergoes a multi-stage purification process. We use solvent extraction to selectively separate each metal from the solution, removing impurities to achieve battery-grade purity.",
      icon: <Zap className="h-8 w-8" />,
      image: "/public/assets/img/12.png",
      details: [
        "Multi-stage solvent extraction",
        "Selective metal separation",
        "Impurity removal to <1 ppm",
        "Closed-loop solvent recycling"
      ]
    },
    {
      id: "03",
      title: "Metal Precipitation",
      description: "The separated, high-purity metal streams are precipitated into stable, valuable forms like metal salts or hydroxides, ready for the market and re-entry into the battery supply chain.",
      icon: <Cpu className="h-8 w-8" />,
      image: "/public/assets/img/10.png",
      details: [
        "Crystallization for high purity",
        "Controlled precipitation conditions",
        "Production of battery-grade salts",
        "Wastewater treatment and recycling"
      ]
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      
       {/* Hero Section */}
       <section className="relative py-24 bg-gradient-to-r from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hydrometallurgy for Black Mass
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Transforming battery waste into high-purity, valuable materials through advanced chemical processing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">

            {/* What is Black Mass Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Heart of Battery Recycling</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Black mass is the powder-like substance obtained from shredding and dismantling lithium-ion batteries. It's a rich, concentrated mixture of valuable metals like lithium, cobalt, nickel, and manganese, which are the critical active materials of a battery's cathode.
                </p>
                <p className="text-lg text-gray-700">
                  Our hydrometallurgical process is specifically designed to treat this black mass, efficiently separating and purifying these metals to be reused in new battery production, closing the loop on the battery supply chain.
                </p>
              </div>
              <div>
                <img 
                  src="https://techcrunch.com/wp-content/uploads/2022/05/Li-Cycle-Spoke-Black-Mass-Hero-Edited.png" 
                  alt="Black Mass"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Process Steps */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Step-by-Step Process
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our systematic approach ensures maximum recovery and environmental safety
                  </p>
                </motion.div>

                <div className="space-y-20">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                        index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                      }`}
                    >
                      <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-3 rounded-xl">
                            {step.icon}
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-green-600">STEP {step.id}</span>
                            <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                        <img
                          src={step.image}
                          alt={step.title}
                          className="rounded-2xl shadow-2xl"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Recovered Materials */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Recovered Materials
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    High-purity materials extracted through our advanced recycling process
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {recoveredMaterials.map((material, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`h-2 bg-gradient-to-r ${material.color}`}></div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{material.name}</h3>
                        <p className="text-gray-600 mb-4">{material.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Purity:</span>
                            <span className="font-semibold text-green-600">{material.purity}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Usage:</span>
                            <span className="font-semibold text-gray-900">{material.usage}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Partner with a Leader in Hydrometallurgy
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Leverage our expertise to turn your battery waste into valuable resources.
            </p>
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
        </div>
      </section>
    </div>
  );
};

export default HydrometPage;
