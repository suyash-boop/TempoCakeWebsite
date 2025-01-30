import React from "react";
import HeroSection from "./HeroSection";
import PastryCarousel from "./PastryCarousel";
import FeatureGrid from "./FeatureGrid";
import { motion } from "framer-motion";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";

interface HomeProps {
  onGetStarted?: () => void;
  onCategorySelect?: (category: {
    title: string;
    imageUrl: string;
    description: string;
  }) => void;
}

const Home = ({
  onGetStarted = () => {},
  onCategorySelect = () => {},
}: HomeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full bg-white overflow-x-hidden"
    >
      <Navbar onSignUp={() => console.log("Sign up clicked")} />
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full overflow-hidden">
          <HeroSection onGetStarted={onGetStarted} />
        </section>

        {/* Pastry Categories Section */}
        <section className="w-full py-16">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-pink-800 mb-4"
            >
              Explore Our Categories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto px-4"
            >
              Discover our wide selection of freshly baked goods, from classic
              pastries to custom creations
            </motion.p>
          </div>
          <PastryCarousel onCategorySelect={onCategorySelect} />
        </section>

        {/* Features Section */}
        <section className="w-full py-16">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-pink-800 mb-4"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto px-4"
            >
              Experience the perfect blend of tradition and innovation in every
              bite
            </motion.p>
          </div>
          <FeatureGrid />
        </section>
        {/* About Us Section */}
        <section className="w-full">
          <AboutUs />
        </section>
      </main>
    </motion.div>
  );
};

export default Home;
