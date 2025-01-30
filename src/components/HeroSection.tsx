import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Cake, Coffee } from "lucide-react";

interface HeroSectionProps {
  onGetStarted?: () => void;
  showcaseImages?: string[];
}

const HeroSection = ({
  onGetStarted = () => {},
  showcaseImages = [
    "https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&h=800&fit=crop",
  ],
}: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [showcaseImages.length]);

  return (
    <div className="relative w-[1512px] h-[600px] bg-white overflow-hidden">
      {/* Background Image with Animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          key={currentImageIndex}
          src={showcaseImages[currentImageIndex]}
          alt="Bakery Showcase"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 to-pink-200/50" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Cake className="w-12 h-12 text-white" />
            <Coffee className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to Our Sweet Haven
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover our delightful selection of handcrafted pastries, cakes,
            and sweet treats made with love and the finest ingredients.
          </p>
          <Button
            size="lg"
            onClick={onGetStarted}
            className="bg-white text-pink-600 hover:bg-pink-50 hover:text-pink-700"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {showcaseImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
