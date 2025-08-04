import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Battery, 
  Recycle, 
  Award, 
  Users, 
  ArrowRight, 
  Play, 
  CheckCircle,
  Lightbulb,
  Shield,
  Globe
} from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Battery Recycling Plants",
      description: "Complete turnkey solutions for setting up state-of-the-art lithium-ion battery recycling facilities."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "EPR Compliance",
      description: "End-to-end Extended Producer Responsibility compliance and certification services."
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "E-waste Management",
      description: "Comprehensive e-waste plant setup consulting and management solutions."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Government Licensing",
      description: "Expert assistance in obtaining all necessary licenses and certifications."
    }
  ];

  const recyclingSteps = [
    {
      step: "01",
      title: "Collection",
      description: "End-of-life batteries collected from various sources across India"
    },
    {
      step: "02", 
      title: "Disassembly",
      description: "Safe dismantling and component separation using advanced technology"
    },
    {
      step: "03",
      title: "Processing",
      description: "Crushing, shredding, and material separation processes"
    },
    {
      step: "04",
      title: "Recovery",
      description: "Extraction of valuable blackmass, copper, aluminum, and plastic"
    }
  ];

  const testimonials = [
    {
      name: "",
      company: "",
      text: "REFNIC helped us set up our battery recycling plant with exceptional efficiency. Their expertise is unmatched.",
      image: "https://thumbs.dreamstime.com/b/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.jpg"
    },
    {
      name: "",
      company: "",
      text: "The EPR compliance consulting was thorough and professional. They made the complex process simple.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/046/654/029/small/confident-indian-businesswoman-at-her-office-photo.jpeg"
    },
    {
      name: "",
      company: "",
      text: "Outstanding support in government licensing. REFNIC's team is knowledgeable and reliable.",
      image: "https://media.istockphoto.com/id/1336230140/photo/portrait-of-a-happy-mature-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=TNFicavabSAoGlBtx0RaQxPObIX-O50CCGLO-dvuaD8="
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              Powering Sustainability
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Through Innovation
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              India's pioneer in lithium-ion battery recycling, offering complete turnkey solutions and expert consulting services for a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
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
             About Us            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are at the forefront of sustainable energy solutions, specializing in lithium-ion battery recycling technology and comprehensive consulting services that help businesses achieve environmental compliance while maximizing resource recovery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* <img
                src="https://www.financialexpress.com/wp-content/uploads/2022/05/Nexcharge-1.jpg"
                alt="Battery recycling facility"
                className="rounded-2xl shadow-2xl"
              /> */}
              <img
                src="../public/assets/img/2.png"
                alt="Battery recycling facility"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pan-India Operations</h3>
                  <p className="text-gray-600">Serving clients across all major cities and industrial hubs in India with localized expertise.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Driven</h3>
                  <p className="text-gray-600">Cutting-edge technology and processes that maximize recovery rates and minimize environmental impact.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">Industry veterans with decades of combined experience in recycling and environmental compliance.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Turnkey Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions from plant setup to compliance management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 rounded-xl mb-6 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recycling Process Overview */}
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
              Our Recycling Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to maximize resource recovery and minimize environmental impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recyclingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < recyclingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-blue-600 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/recycling-process"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              <span>Learn More About Our Process</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What is Blackmass Section */}
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
                What is Blackmass?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Blackmass is the valuable powder obtained from recycled lithium-ion batteries. It contains critical materials including:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Lithium', 'Cobalt', 'Nickel', 'Manganese'].map((material, index) => (
                  <motion.div
                    key={material}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-lg">{material}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">
                These materials are essential for manufacturing new batteries, making blackmass a crucial component in the circular economy of battery production.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://mms.businesswire.com/media/20220215005160/en/1358675/4/graphite.jpg?download=1"
                alt="Blackmass material"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
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
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing sustainable solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              'Automotive', 
              'Electronics', 
              'Energy Storage', 
              'Manufacturing', 
              'Telecom', 
              'Consumer Goods'
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Battery className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg"
              >
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.company}</p>
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
              Ready to Start Your Sustainable Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get expert consultation on battery recycling, compliance, and sustainable business practices.
            </p>
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;