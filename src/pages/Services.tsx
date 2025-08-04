import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Battery, 
  Shield, 
  Recycle, 
  Award, 
  Users, 
  ArrowRight,
  CheckCircle,
  Settings,
  FileText,
  Truck
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Battery className="h-12 w-12" />,
      title: "Battery Recycling Plant Setup",
      description: "Complete turnkey solutions for establishing state-of-the-art lithium-ion battery recycling facilities with maximum recovery efficiency.",
      features: [
        "Plant design and engineering",
        "Equipment procurement and installation",
        "Process optimization",
        "Training and support",
        "Maintenance services"
      ],
      image: "../public/assets/img/4.png"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "EPR Compliance Consulting",
      description: "Comprehensive Extended Producer Responsibility compliance services to meet government regulations and environmental standards.",
      features: [
        "EPR registration and documentation",
        "Compliance auditing",
        "Annual return filing",
        "Regulatory updates",
        "Legal support"
      ],
      image: "https://www.banyannation.com/wp-content/uploads/2024/09/EPR.jpg"
    },
    {
      icon: <Recycle className="h-12 w-12" />,
      title: "E-waste Plant Setup",
      description: "Expert consulting for establishing electronic waste processing facilities with advanced sorting and recovery systems.",
      features: [
        "Site assessment and planning",
        "Technology selection",
        "Environmental clearances",
        "Operational setup",
        "Quality assurance"
      ],
      image: "https://5.imimg.com/data5/SELLER/Default/2025/1/481974565/DL/ON/MR/184313099/e-waste-recycling-plant.jpg"
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Government Licensing",
      description: "End-to-end support for obtaining all necessary licenses, permits, and certifications from regulatory authorities.",
      features: [
        "License application preparation",
        "Regulatory compliance",
        "Documentation support",
        "Follow-up and coordination",
        "Renewal services"
      ],
      image: "https://plus.unsplash.com/premium_photo-1661496148632-514dd2197691?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGVnYWwlMjBkb2N1bWVudHN8ZW58MHx8MHx8fDA%3D"
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Supply Chain Advisory",
      description: "Strategic consulting for optimizing raw material sourcing and establishing distribution channels for recovered materials.",
      features: [
        "Supplier network development",
        "Logistics optimization",
        "Market analysis",
        "Pricing strategies",
        "Partnership facilitation"
      ],
      image: "../public/assets/img/8.png"
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Technical Consulting",
      description: "Specialized technical expertise for process optimization, equipment selection, and operational efficiency improvements.",
      features: [
        "Process engineering",
        "Equipment evaluation",
        "Efficiency analysis",
        "Technology upgrades",
        "Performance monitoring"
      ],
      image: "../public/assets/img/9.png"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive assessment of your requirements and objectives."
    },
    {
      step: "02",
      title: "Custom Solution Design",
      description: "Our experts design tailored solutions that meet your specific needs and budget."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the project with precision, ensuring timely delivery and quality."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous support and maintenance to ensure optimal performance."
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
              Comprehensive Solutions for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Sustainable Business
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              From plant setup to compliance management, we provide end-to-end services that power your sustainable operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertly crafted solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 rounded-xl mb-6 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures success at every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-blue-600 transform -translate-y-1/2 z-10"></div>
                )}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let our experts help you implement sustainable solutions that drive growth and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/recycling-process"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;