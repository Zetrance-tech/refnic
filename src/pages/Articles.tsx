import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Articles: React.FC = () => {
  const featuredArticle = {
    slug: "future-of-lithium-battery-recycling",
    title: "Why Lithium Battery Recycling is the Future of Energy",
    excerpt: "As the world transitions to clean energy, lithium battery recycling becomes crucial for sustainable development. Discover how REFNIC is leading this transformation.",
    image: "https://www.electrive.com/media/2023/03/KIT_Batterierecycling_Battery-recycling_29-03-2023-1400x700.jpg.webp",
    author: "Dr. Rajesh Kumar",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Industry Insights"
  };

  const articles = [
    {
      slug: "epr-compliance-guide-india",
      title: "Understanding EPR Compliance for E-waste in India",
      excerpt: "A comprehensive guide to Extended Producer Responsibility regulations and how businesses can achieve compliance.",
      image: "https://media.istockphoto.com/id/468841284/photo/a-group-of-four-businesspeople-talking-at-a-table.jpg?s=612x612&w=0&k=20&c=r85vEdXockoHdtHT5TquqAWo4hJhG6ohzbD2EzAuHF8=",
      author: "Priya Sharma",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Compliance"
    },
    {
      slug: "what-is-blackmass-valuable",
      title: "What is Blackmass? Why It's Valuable",
      excerpt: "Understanding the most valuable output of battery recycling - blackmass and its critical role in the circular economy.",
      image: "https://www.aurubis.com/.imaging/resizer/1280/0/50-50/dam/jcr:864fcae7-56ca-4022-858b-7dff5cd28f3a/Black-Mass-2.jpg?imageFormat=webp",
      author: "Amit Patel",
      date: "January 5, 2025",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      slug: "battery-recycling-plant-setup-guide",
      title: "Complete Guide to Setting Up Battery Recycling Plants",
      excerpt: "Step-by-step process for establishing a successful battery recycling facility in India.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/10/459610241/QH/QU/IA/78005132/waste-recycling-machine-500x500.jpg",
      author: "Suresh Mehta",
      date: "December 28, 2024",
      readTime: "10 min read",
      category: "Business"
    },
    {
      slug: "india-ev-battery-recycling-opportunity",
      title: "India's Electric Vehicle Revolution: The Recycling Opportunity", 
      excerpt: "How India's growing EV market creates massive opportunities for battery recycling businesses.",
      image: "https://www.recovery-worldwide.com/imgs/2/1/8/0/0/8/2/Bild_1-196c55bb9dcc3626.jpeg",
      author: "Neha Gupta",
      date: "December 20, 2024",
      readTime: "7 min read",
      category: "Market Analysis"
    },
    {
      slug: "sustainable-supply-chain-battery-recycling",
      title: "Building Sustainable Supply Chains in Battery Recycling",
      excerpt: "Best practices for creating efficient and sustainable supply chains in the battery recycling industry.",
      image: "https://cdn.prod.website-files.com/62fc1b4ed3d11fcdb917ace9/63c19450690e4a7ab3a8cbc8_battery-supply-chain%402x.png",
      author: "Vikram Singh",
      date: "December 15, 2024",
      readTime: "9 min read",
      category: "Sustainability"
    },
    {
      slug: "government-policies-battery-recycling-india",
      title: "Government Policies Driving Battery Recycling in India",
      excerpt: "Overview of current and upcoming government initiatives supporting the battery recycling sector.",
      image: "https://www.banyannation.com/wp-content/uploads/2024/09/EPR.jpg",
      author: "Dr. Anita Reddy",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Policy"
    }
  ];

  const categories = [
    { name: "All", count: 7 },
    { name: "Industry Insights", count: 2 },
    { name: "Technology", count: 2 },
    { name: "Compliance", count: 1 },
    { name: "Business", count: 1 },
    { name: "Sustainability", count: 1 }
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
              Industry Insights &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Expert Knowledge
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Stay updated with the latest trends, technologies, and insights in battery recycling and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center space-x-6 mb-8 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
                
                <Link
                  to={`/articles/${featuredArticle.slug}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white transition-colors duration-200 text-left"
                    >
                      <span className="text-gray-700 hover:text-green-600">{category.name}</span>
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm">
                        {category.count}
                      </span>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl text-white">
                  <h4 className="text-xl font-bold mb-3">Subscribe to Updates</h4>
                  <p className="text-sm mb-4 opacity-90">
                    Get the latest insights delivered to your inbox
                  </p>
                  <button className="w-full bg-white text-green-600 py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article, index) => (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors duration-200">
                        {article.title}
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <span>{article.date}</span>
                      </div>
                      
                      <Link
                        to={`/articles/${article.slug}`}
                        className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 group"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Stay Informed
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of industry professionals who rely on our insights for making informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Articles;