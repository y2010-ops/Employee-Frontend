import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Users, Award, CheckCircle } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Top Talent for Your Company</h1>
                <p className="text-xl mb-8">Connect with qualified interns and build your future workforce.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register" className="btn btn-accent text-center">
                    Register as Employer
                  </Link>
                  <a href="#benefits" className="btn btn-outline border-white text-white hover:bg-white/10 text-center">
                    Learn More
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team working together" 
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section id="benefits" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We connect employers with top intern talent, streamlining the recruitment process.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Briefcase className="h-10 w-10 text-primary-600" />,
                  title: "Quality Candidates",
                  description: "Access pre-screened, qualified candidates ready to contribute to your team."
                },
                {
                  icon: <Users className="h-10 w-10 text-primary-600" />,
                  title: "Simplified Hiring",
                  description: "Our streamlined process saves you time and resources in finding the right talent."
                },
                {
                  icon: <Award className="h-10 w-10 text-primary-600" />,
                  title: "Diverse Talent Pool",
                  description: "Connect with candidates from various backgrounds, skills, and perspectives."
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-primary-600" />,
                  title: "Full-Service Platform",
                  description: "From posting to onboarding, we provide tools for the entire recruitment journey."
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Great Hire?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of companies who have successfully built their teams through our platform.
              </p>
              <Link to="/register" className="btn btn-primary text-lg px-8 py-3">
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;