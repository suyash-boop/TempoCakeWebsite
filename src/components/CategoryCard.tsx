import React from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

interface CategoryCardProps {
  title?: string;
  imageUrl?: string;
  description?: string;
  onClick?: () => void;
}

const CategoryCard = ({
  title = "Delicious Pastries",
  imageUrl = "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=400&h=300&fit=crop",
  description = "Explore our handcrafted selection of fresh baked goods",
  onClick = () => {},
}: CategoryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-[300px] h-[350px] bg-white"
    >
      <Card
        className="h-full overflow-hidden cursor-pointer border-2 border-pink-100 hover:border-pink-300 transition-all duration-300 shadow-sm hover:shadow-xl"
        onClick={onClick}
      >
        <div className="relative h-[200px] overflow-hidden group">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-6 bg-gradient-to-b from-pink-50 to-white">
          <h3 className="text-2xl font-semibold text-pink-800 mb-3 transition-colors duration-300 group-hover:text-pink-600">
            {title}
          </h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CategoryCard;
