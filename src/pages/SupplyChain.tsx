import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Truck, 
  Factory, 
  Users, 
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Building,
  Target
} from 'lucide-react';

const SupplyChain: React.FC = () => {
  const sourcingSections = [
    {
      title: "Automotive Sector",
      description: "Electric vehicle manufacturers and service centers",
      locations: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Pune"],
      volume: "High Volume",
      icon: <Factory className="h-8 w-8" />
    },
    {
      title: "Electronics Industry",
      description: "Consumer electronics and device manufacturers",
      locations: ["Noida", "Hyderabad", "Gurgaon", "Coimbatore"],
      volume: "Medium Volume",
      icon: <Building className="h-8 w-8" />
    },
    {
      title: "Energy Storage",
      description: "Grid storage and renewable energy systems",
      locations: ["Rajasthan", "Gujarat", "Tamil Nadu", "Karnataka"],
      volume: "Growing",
      icon: <Target className="h-8 w-8" />
    }
  ];

  const distributionChannels = [
    {
      material: "Blackmass",
      buyers: ["Battery Manufacturers", "Chemical Companies", "Metal Refineries"],
      regions: ["Pan India", "Export Markets"],
      pricing: "Premium",
      demand: "Very High"
    },
    {
      material: "Copper",
      buyers: ["Wire Manufacturers", "Electronics Industry", "Construction"],
      regions: ["North & West India"],
      pricing: "Market Rate",
      demand: "High"
    },
    {
      material: "Aluminum",
      buyers: ["Automotive Industry", "Aerospace", "Packaging"],
      regions: ["South & West India"],
      pricing: "Market Rate",
      demand: "High"
    },
    {
      material: "Plastic",
      buyers: ["Packaging Industry", "Automotive Parts", "Consumer Goods"],
      regions: ["Major Metro Cities"],
      pricing: "Competitive",
      demand: "Medium"
    }
  ];

  const industryContacts = [
    {
      category: "Battery Manufacturers",
      companies: [
        { name: "Exide Industries Ltd", location: "Hyderabad", contact: "+91-40-2300-1000" },
        { name: "Amara Raja Batteries", location: "Tirupati", contact: "+91-877-282-5001" },
        { name: "Luminous Power Technologies", location: "Gurgaon", contact: "+91-124-481-6666" }
      ]
    },
    {
      category: "EV Manufacturers",
      companies: [
        { name: "Tata Motors EV Division", location: "Mumbai", contact: "+91-22-6665-8282" },
        { name: "Mahindra Electric", location: "Bangalore", contact: "+91-80-4137-2000" },
        { name: "Ola Electric", location: "Bangalore", contact: "+91-80-4715-1000" }
      ]
    },
    {
      category: "Metal Refineries",
      companies: [
        { name: "Hindustan Zinc Limited", location: "Udaipur", contact: "+91-294-666-9999" },
        { name: "Vedanta Limited", location: "Mumbai", contact: "+91-22-6646-1000" },
        { name: "National Aluminium Company", location: "Bhubaneswar", contact: "+91-674-230-8282" }
      ]
    }
  ];

  const hotspots = [
    { city: "Mumbai", type: "Major Hub", activity: "Collection & Distribution", color: "bg-red-500" },
    { city: "Delhi NCR", type: "Primary Market", activity: "Electronics & Automotive", color: "bg-blue-500" },
    { city: "Bangalore", type: "Tech Center", activity: "EV & Electronics", color: "bg-green-500" },
    { city: "Chennai", type: "Industrial Hub", activity: "Automotive & Manufacturing", color: "bg-yellow-500" },
    { city: "Pune", type: "Auto Cluster", activity: "Automotive Industry", color: "bg-purple-500" },
    { city: "Hyderabad", type: "Battery Hub", activity: "Battery Manufacturing", color: "bg-pink-500" }
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
              Complete Supply Chain
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              From sourcing raw batteries to distributing recovered materials - we connect you with the entire ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* India Map Section */}
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
              India Supply Chain Hotspots
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic locations across India for optimal sourcing and distribution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Major Industrial Hubs</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {hotspots.map((hotspot, index) => (
                      <motion.div
                        key={hotspot.city}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-4 rounded-xl shadow-lg"
                      >
                        <div className={`w-4 h-4 ${hotspot.color} rounded-full mx-auto mb-2`}></div>
                        <h4 className="font-bold text-gray-900">{hotspot.city}</h4>
                        <p className="text-sm text-gray-600">{hotspot.type}</p>
                        <p className="text-xs text-gray-500">{hotspot.activity}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Northern Region</h3>
                <p className="text-gray-600">Delhi NCR, Punjab, Haryana - Major automotive and electronics hub</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Western Region</h3>
                <p className="text-gray-600">Mumbai, Pune, Gujarat - Industrial manufacturing and ports</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Southern Region</h3>
                <p className="text-gray-600">Bangalore, Chennai, Hyderabad - Tech and automotive center</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eastern Region</h3>
                <p className="text-gray-600">Kolkata, Bhubaneswar - Heavy industry and mining</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
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
              Raw Battery Sourcing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships across India's key industrial sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sourcingSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 rounded-xl mb-6 inline-block">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-gray-600 mb-6">{section.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Locations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {section.locations.map((location, locIndex) => (
                        <span key={locIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Volume:</span>
                    <span className="font-semibold text-green-600">{section.volume}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Channels */}
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
              Distribution Channels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting recovered materials with the right buyers across India
            </p>
          </motion.div>

          <div className="space-y-8">
            {distributionChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{channel.material}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Demand:</span>
                      <span className={`font-semibold ${
                        channel.demand === 'Very High' ? 'text-red-600' :
                        channel.demand === 'High' ? 'text-orange-600' : 'text-yellow-600'
                      }`}>
                        {channel.demand}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Buyers:</h4>
                    <ul className="space-y-1">
                      {channel.buyers.map((buyer, buyerIndex) => (
                        <li key={buyerIndex} className="text-gray-600 text-sm flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                          <span>{buyer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Regions:</h4>
                    <div className="space-y-1">
                      {channel.regions.map((region, regionIndex) => (
                        <span key={regionIndex} className="block text-gray-600 text-sm">
                          <MapPin className="h-3 w-3 inline mr-1" />
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-1">Pricing</h4>
                      <span className="text-green-600 font-bold">{channel.pricing}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Contacts */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Industry Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key industry players across the battery and recycling ecosystem
            </p>
          </motion.div>

          <div className="space-y-12">
            {industryContacts.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.companies.map((company, companyIndex) => (
                    <div key={companyIndex} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg">
                          <Building className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">{company.name}</h4>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{company.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Phone className="h-4 w-4" />
                          <span>{company.contact}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let us connect you with the right partners and optimize your material flows for maximum efficiency and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Connect With Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupplyChain;