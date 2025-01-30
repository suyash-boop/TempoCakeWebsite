import React from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { Gift, Star, PenTool } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features?: FeatureCardProps[];
}

const defaultFeatures: FeatureCardProps[] = [
  {
    icon: <Gift className="w-8 h-8 text-pink-500" />,
    title: "Special Offers",
    description:
      "Exclusive deals and seasonal promotions on our delicious treats",
  },
  {
    icon: <Star className="w-8 h-8 text-pink-500" />,
    title: "Bestsellers",
    description: "Our most popular and beloved bakery creations",
  },
  {
    icon: <PenTool className="w-8 h-8 text-pink-500" />,
    title: "Custom Orders",
    description: "Create your perfect dessert with our customization options",
  },
];

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full border-2 border-pink-100 bg-white hover:border-pink-200 hover:shadow-lg transition-all duration-200">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-pink-50 rounded-full">{icon}</div>
          <h3 className="text-xl font-semibold text-pink-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeatureGrid = ({ features = defaultFeatures }: FeatureGridProps) => {
  return (
    <div className="w-full max-w-[1200px] h-[300px] bg-gradient-to-b from-pink-50 to-white p-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
