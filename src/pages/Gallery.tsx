import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Filter } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'machinery', name: 'Machinery' },
    { id: 'plants', name: 'Plant Setup' },
    { id: 'materials', name: 'Output Materials' },
    { id: 'process', name: 'Process' }
  ];

  const images = [
    {
      id: 1,
      src: "https://images.squarespace-cdn.com/content/v1/60b9e2e5f81cb50d6a867e91/1584b87a-60e0-4c6b-a1b2-d3b967dfddc5/CAM19373.jpg",
      category: "machinery",
      title: "Battery Disassembly Machine",
      description: "Advanced automated system for safe battery disassembly"
    },
    {
      id: 2,
      src: "https://www.wiscon-tech.com/wp-content/uploads/2021/06/Shredding-machine.jpg",
      category: "machinery",
      title: "Crushing Equipment",
      description: "High-precision crushing and shredding machinery"
    },
    {
      id: 3,
      src: "https://5.imimg.com/data5/SELLER/Default/2023/11/364060483/KD/GZ/DH/18860332/lithium-ion-battery-recycling-machine.png",
      category: "plants",
      title: "Complete Plant Setup",
      description: "Fully operational battery recycling facility"
    },
    {
      id: 4,
      src: "https://www.cellcycle.co.uk/wp-content/uploads/2025/06/Thumbnail-Images-for-Cellcycle-1-scaled.png",
      category: "plants",
      title: "Processing Area",
      description: "Clean room environment for material processing"
    },
    {
      id: 5,
      src: "https://www.recyclingtoday.com/remote/aHR0cHM6Ly9naWVjZG4uYmxvYi5jb3JlLndpbmRvd3MubmV0L2ZpbGV1cGxvYWRzL2ltYWdlLzIwMjIvMDQvMjIvdmVvbGlhbGljeWNsZXdlYi5qcGc.OaQVlu-7Zdc.jpg?format=webp",
      category: "materials",
      title: "Blackmass Output",
      description: "High-purity blackmass containing lithium, cobalt, nickel"
    },
    {
      id: 6,
      src: "https://www.sunygroup.cn/images/copper-particles.webp",
      category: "materials",
      title: "Copper Recovery",
      description: "Recovered copper from battery conductors"
    },
    {
      id: 7,
      src: "https://www.salvidefaveri.it/images/conservazione-alluminio-big.webp",
      category: "materials",
      title: "Aluminum Separation",
      description: "Clean aluminum components ready for reuse"
    },
    {
      id: 8,
      src: "https://images.wevolver.com/eyJidWNrZXQiOiJ3ZXZvbHZlci1wcm9qZWN0LWltYWdlcyIsImtleSI6IjAuOXZteXgycmZtYTlwbGNfc2NhZGEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MDAsImhlaWdodCI6NDUwLCJmaXQiOiJjb3ZlciJ9fX0=",
      category: "process",
      title: "Quality Control",
      description: "Material analysis and quality assurance"
    },
    {
      id: 9,
      src: "https://lohum.com/wp-content/uploads/2023/03/02.-Rising-battery-waste.jpg",
      category: "process",
      title: "Sorting Process",
      description: "Advanced sorting and separation techniques"
    },
    {
      id: 10,
      src: "https://5.imimg.com/data5/SELLER/Default/2025/4/499919397/DP/PM/TZ/184166843/plc-scada-hmi-software-development.jpg",
      category: "plants",
      title: "Control Room",
      description: "Automated monitoring and control systems"
    },
    {
      id: 11,
      src: "https://i0.wp.com/www.williamboulton.co.uk/wp-content/uploads/2024/08/mid-size-seperator.jpg?resize=640%2C525&ssl=1",
      category: "machinery",
      title: "Separation Equipment",
      description: "Magnetic and density separation systems"
    },
    {
      id: 12,
      src: "https://www.gme-recycling.com/wp-content/uploads/2023/05/output-Polypropilene-1.jpg",
      category: "materials",
      title: "Plastic Components",
      description: "Separated plastic materials for recycling"
    },
      {
      id: 13,
      src: "../public/assets/img/1.png",
      category: "plants",
      title: "Plant Machinery",
      description: "Separated plastic materials for recycling"
    },
      {
      id: 14,
      src: "../public/assets/img/2.png",
      category: "plants",
      title: "Plant Machinery",
      description: "Separated plastic materials for recycling"
    },
      {
      id: 15,
      src: "../public/assets/img/3.png",
      category: "plants",
      title: "Plant Machinery",
      description: "Separated plastic materials for recycling"
    },
      {
      id: 16,
      src: "../public/assets/img/4.png",
      category: "plants",
      title: "Plant Machinery",
      description: "Separated plastic materials for recycling"
    },
      {
      id: 17,
      src: "../public/assets/img/5.png",
      category: "plants",
      title: "Plant Machinery",
      description: "Separated plastic materials for recycling"
    },
      {
      id: 18,
      src: "../public/assets/img/6.png",
      category: "plants",
      title: "Plant Machinery",
      description: "Separated plastic materials for recycling"
    },
      {
      id: 19,
      src: "../public/assets/img/7.jpg",
      category: "materials",
      title: "Blackmass Output",
      description: "Separated plastic materials for recycling"
    }
    
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

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
              Our Work in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Action
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Explore our state-of-the-art facilities, advanced machinery, and high-quality output materials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <ZoomIn className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready to See Our Solutions in Action?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Schedule a visit to our facilities or request a detailed project proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                Schedule Facility Tour
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200">
                Request Proposal
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;