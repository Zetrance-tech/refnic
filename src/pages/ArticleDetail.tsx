import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, BookmarkPlus } from 'lucide-react';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams();

  // Sample article data - in a real app, this would be fetched based on the slug
  const article = {
    slug: "future-of-lithium-battery-recycling",
    title: "Why Lithium Battery Recycling is the Future of Energy",
    excerpt: "As the world transitions to clean energy, lithium battery recycling becomes crucial for sustainable development. Discover how REFNIC is leading this transformation.",
    content: `
      <p>The global transition to renewable energy sources and electric vehicles has created an unprecedented demand for lithium-ion batteries. As these technologies become mainstream, we're facing a critical challenge: what happens to the millions of batteries when they reach the end of their useful life?</p>
      
      <h2>The Growing Battery Waste Challenge</h2>
      <p>By 2030, experts predict that over 11 million tonnes of lithium-ion batteries will reach end-of-life globally. Without proper recycling infrastructure, these batteries pose significant environmental and resource challenges:</p>
      
      <ul>
        <li><strong>Environmental Impact:</strong> Improper disposal can lead to soil and water contamination</li>
        <li><strong>Resource Depletion:</strong> Critical materials like lithium, cobalt, and nickel are finite resources</li>
        <li><strong>Economic Waste:</strong> End-of-life batteries contain valuable materials worth billions of dollars</li>
      </ul>
      
      <h2>The Solution: Advanced Recycling Technology</h2>
      <p>Modern battery recycling technology can recover up to 95% of valuable materials from end-of-life batteries. At REFNIC, we've developed proprietary processes that extract:</p>
      
      <ul>
        <li><strong>Blackmass:</strong> High-purity powder containing lithium, cobalt, nickel, and manganese</li>
        <li><strong>Copper:</strong> High-grade copper from current collectors</li>
        <li><strong>Aluminum:</strong> Clean aluminum for reuse in various applications</li>
        <li><strong>Plastic Components:</strong> Separated plastics for recycling</li>
      </ul>
      
      <h2>India's Opportunity in Battery Recycling</h2>
      <p>India is uniquely positioned to become a global leader in battery recycling:</p>
      
      <ol>
        <li><strong>Growing EV Market:</strong> India's electric vehicle market is expected to grow at 36% CAGR</li>
        <li><strong>Government Support:</strong> Favorable policies and incentives for recycling businesses</li>
        <li><strong>Manufacturing Hub:</strong> Proximity to major battery and EV manufacturing centers</li>
        <li><strong>Skilled Workforce:</strong> Technical expertise and cost-effective operations</li>
      </ol>
      
      <h2>REFNIC's Approach to Sustainable Recycling</h2>
      <p>Our comprehensive approach ensures maximum resource recovery while maintaining the highest environmental standards:</p>
      
      <h3>1. Collection and Transportation</h3>
      <p>We've established a nationwide network for safe collection and transportation of end-of-life batteries, ensuring proper handling from source to facility.</p>
      
      <h3>2. Advanced Processing Technology</h3>
      <p>Our state-of-the-art facilities use automated disassembly, precision crushing, and advanced separation techniques to maximize material recovery.</p>
      
      <h3>3. Quality Assurance</h3>
      <p>Every batch of recovered materials undergoes rigorous testing to ensure they meet the highest purity standards for reuse in new battery production.</p>
      
      <h3>4. Circular Economy Integration</h3>
      <p>We work closely with battery manufacturers to create closed-loop supply chains, reducing dependence on virgin materials.</p>
      
      <h2>The Economic Benefits</h2>
      <p>Battery recycling isn't just environmentally responsible—it's economically attractive:</p>
      
      <ul>
        <li><strong>Revenue Generation:</strong> Recovered materials command premium prices in global markets</li>
        <li><strong>Job Creation:</strong> The recycling industry creates skilled employment opportunities</li>
        <li><strong>Energy Security:</strong> Reduces dependence on imported raw materials</li>
        <li><strong>Cost Savings:</strong> Recycled materials are often cheaper than virgin alternatives</li>
      </ul>
      
      <h2>Looking Ahead: The Future of Battery Recycling</h2>
      <p>As battery technology continues to evolve, recycling processes must adapt and improve. Key trends shaping the future include:</p>
      
      <ul>
        <li><strong>Direct Recycling:</strong> Technologies that preserve battery material structure</li>
        <li><strong>AI and Automation:</strong> Smart systems for optimized sorting and processing</li>
        <li><strong>Blockchain Tracking:</strong> Transparent supply chain management for recycled materials</li>
        <li><strong>Regional Processing:</strong> Localized recycling to reduce transportation costs and emissions</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The future of energy is electric, and battery recycling is the key to making this transition sustainable. Companies like REFNIC are not just processing waste—we're creating the foundation for a circular economy that supports long-term environmental and economic sustainability.</p>
      
      <p>As India continues its journey toward energy independence and environmental responsibility, battery recycling will play an increasingly vital role. The question isn't whether battery recycling is important—it's how quickly we can scale these solutions to meet growing demand.</p>
    `,
    image: "https://www.electrive.com/media/2023/03/KIT_Batterierecycling_Battery-recycling_29-03-2023-1400x700.jpg.webp",
    author: "Dr. Rajesh Kumar",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Industry Insights"
  };

  const relatedArticles = [
    {
      slug: "epr-compliance-guide-india",
      title: "Understanding EPR Compliance for E-waste in India",
      readTime: "6 min read"
    },
    {
      slug: "what-is-blackmass-valuable",
      title: "What is Blackmass? Why It's Valuable",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "5 min read"
    },
    {
      slug: "battery-recycling-plant-setup-guide",
      title: "Complete Guide to Setting Up Battery Recycling Plants",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Back Navigation */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/articles"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Articles</span>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between border-b border-gray-200 pb-8 mb-8">
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                  <Share2 className="h-4 w-4" />
                  <span className="hidden sm:block">Share</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                  <BookmarkPlus className="h-4 w-4" />
                  <span className="hidden sm:block">Save</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-green max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-start space-x-6">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt={article.author}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{article.author}</h3>
                <p className="text-gray-600 mb-4">
                  Dr. Rajesh Kumar is REFNIC's Chief Technology Officer with over 15 years of experience in 
                  battery recycling and sustainable energy solutions. He holds a PhD in Materials Science 
                  and has published numerous papers on lithium-ion battery recycling technologies.
                </p>
                <div className="flex space-x-4">
                  <button className="text-green-600 hover:text-green-700 font-semibold">
                    Follow on LinkedIn
                  </button>
                  <button className="text-green-600 hover:text-green-700 font-semibold">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Related Articles
            </h2>
            <p className="text-xl text-gray-600">
              Continue exploring our insights and expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle, index) => (
              <motion.article
                key={relatedArticle.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {relatedArticle.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-green-600 transition-colors duration-200">
                    {relatedArticle.title}
                  </h3>
                  
                  <Link
                    to={`/articles/${relatedArticle.slug}`}
                    className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 group"
                  >
                    <span>Read Article</span>
                    <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.article>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss how REFNIC can help you implement sustainable battery recycling solutions.
            </p>
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 inline-block"
            >
              Book Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;