import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Battery, 
  ArrowRight, 
  CheckCircle, 
  Play,
  Zap,
  Cog,
  Droplets,
  Cpu
} from 'lucide-react';

const RecyclingProcess: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const processSteps = [
    {
      id: "01",
      title: "Collection & Transportation",
      description: "End-of-life lithium-ion batteries are collected from various sources including automotive, electronics, and energy storage systems across India.",
      details: [
        "Nationwide collection network",
        "Safe transportation protocols",
        "Proper handling procedures",
        "Documentation and tracking"
      ],
      icon: <Battery className="h-8 w-8" />,
      image: "https://image.made-in-china.com/2f0j00hMJluCvcfEpK/Scrap-Lithium-Battery-Recycling-Line-Waste-Power-Bank-Battery-Recycling-Equipment-Waste-Power-Bank-Shredding-and-Separating-Equipment.webp"
    },
    {
      id: "02",
      title: "Battery Disassembly",
      description: "Batteries are safely dismantled using specialized equipment to separate different components while maintaining safety protocols.",
      details: [
        "Automated disassembly systems",
        "Safety containment measures",
        "Component segregation",
        "Electrolyte drainage"
      ],
      icon: <Cog className="h-8 w-8" />,
      image: "https://images.squarespace-cdn.com/content/v1/60b9e2e5f81cb50d6a867e91/1584b87a-60e0-4c6b-a1b2-d3b967dfddc5/CAM19373.jpg"
    },
    {
      id: "03",
      title: "Crushing & Shredding",
      description: "Battery components undergo controlled crushing and shredding processes to prepare materials for separation and recovery.",
      details: [
        "Precision crushing equipment",
        "Size reduction optimization",
        "Dust collection systems",
        "Material flow control"
      ],
      icon: <Zap className="h-8 w-8" />,
      image: "https://www.wiscon-tech.com/wp-content/uploads/2021/06/Shredding-machine.jpg"
    },
    {
      id: "04",
      title: "Material Separation",
      description: "Advanced separation techniques isolate different materials including metals, plastics, and active materials using various technologies.",
      details: [
        "Magnetic separation",
        "Density separation",
        "Air classification",
        "Electrostatic separation"
      ],
      icon: <Droplets className="h-8 w-8" />,
      image: "https://i0.wp.com/www.williamboulton.co.uk/wp-content/uploads/2024/08/mid-size-seperator.jpg?resize=640%2C525&ssl=1"
    },
    {
      id: "05",
      title: "Blackmass Extraction",
      description: "The final step involves extracting high-purity blackmass containing valuable materials like lithium, cobalt, nickel, and manganese.",
      details: [
        "High-purity extraction",
        "Quality control testing",
        "Chemical analysis",
        "Packaging for distribution"
      ],
      icon: <Cpu className="h-8 w-8" />,
      image: "https://techcrunch.com/wp-content/uploads/2022/05/Li-Cycle-Spoke-Black-Mass-Hero-Edited.png"
    }
  ];

  const recoveredMaterials = [
    {
      name: "Blackmass",
      description: "Contains lithium, cobalt, nickel, manganese",
      purity: "99.5%",
      usage: "Mineral Extraction",
      color: "from-gray-700 to-gray-900"
    },
    {
      name: "Copper",
      description: "High-grade copper from conductors",
      purity: "99.9%",
      usage: "Electronics & wiring",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Aluminum",
      description: "Lightweight structural materials and making alloys",
      purity: "99.7%",
      usage: "Automotive & aerospace",
      color: "from-gray-300 to-gray-500"
    },
    {
      name: "Plastic",
      description: "Various polymer materials for making plastic composites",
      purity: "98%",
      usage: "Manufacturing, packaging",
      color: "from-blue-500 to-purple-600"
    }
  ];

  const benefits = [
    {
      title: "Environmental Impact",
      description: "Reduces landfill waste and prevents toxic materials from entering the environment.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Resource Conservation",
      description: "Recovers valuable materials, reducing the need for virgin material extraction.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Economic Value",
      description: "Creates economic value from waste while supporting circular economy principles.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Regulatory Compliance",
      description: "Helps businesses meet EPR requirements and environmental regulations.",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Advanced Battery
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Recycling Process
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              State-of-the-art technology and processes that maximize material recovery while minimizing environmental impact.
            </p>
            <button onClick={() => setShowModal(true)} className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Process Video</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal Popup for YouTube */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-3xl w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold"
            >
              ×
            </button>
            <div className="w-full aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dyDoOcBMAHw?si=jSSgOEk7QP446YpA"
                title="YouTube demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
         )}

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

      {/* What is Blackmass */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Understanding Blackmass
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Blackmass is the most valuable output of our recycling process - a dark powder containing concentrated critical materials essential for new battery production.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Key Components</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['Lithium (Li)', 'Cobalt (Co)', 'Nickel (Ni)', 'Manganese (Mn)'].map((component, index) => (
                      <div key={component} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{component}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Market Value</h3>
                  <p className="text-gray-300">
                    Blackmass commands premium prices in the global market due to its high concentration of critical materials needed for battery manufacturing.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://optimachem.com/wp-content/uploads/2023/04/iStock-1436015766-lithium-extraction-from-batteries.jpg"
                alt="Blackmass material"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Battery Recycling Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The environmental and economic benefits of our recycling process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <div className="text-green-600">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Start Your Recycling Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Partner with us to implement sustainable battery recycling solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/supply-chain"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
              >
                Explore Supply Chain
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RecyclingProcess;