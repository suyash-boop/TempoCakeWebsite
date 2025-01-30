import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Cake } from "lucide-react";

interface NavbarProps {
  onSignUp?: () => void;
}

const Navbar = ({ onSignUp = () => {} }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Cake
              className={`h-8 w-8 ${isScrolled ? "text-pink-600" : "text-white"}`}
            />
            <span
              className={`text-xl font-bold ${isScrolled ? "text-pink-600" : "text-white"}`}
            >
              Sweet Haven
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#menu"
              className={`${isScrolled ? "text-gray-600" : "text-white"} hover:text-pink-500 transition-colors duration-200`}
            >
              Menu
            </a>
            <a
              href="#reviews"
              className={`${isScrolled ? "text-gray-600" : "text-white"} hover:text-pink-500 transition-colors duration-200`}
            >
              Reviews
            </a>
            <Button
              onClick={onSignUp}
              variant={isScrolled ? "default" : "secondary"}
              className={`${isScrolled ? "bg-pink-600 text-white hover:bg-pink-700" : "bg-white text-pink-600 hover:bg-pink-50"}`}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
