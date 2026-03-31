import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { theme } from '../config/theme';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.backgroundDark }}>
      {/* Hero Section - Full screen, minimal */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-option2.jpg)',
            filter: 'brightness(0.3)'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Logo - top right */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-6 right-0 md:top-10 md:right-0"
          >
            <div className="hidden md:block">
              <Logo size="lg" />
            </div>
            <div className="block md:hidden">
              <Logo size="sm" />
            </div>
          </motion.div>

          {/* Main Content - centered, minimal */}
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              TIMBER DOLLAR
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-2 tracking-wider" style={{ color: theme.colors.primary }}>
                HOLDINGS
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/70 mb-12 max-w-xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Strategic. Trusted. Effective.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 font-semibold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.textOnPrimary
                }}
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/40 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
