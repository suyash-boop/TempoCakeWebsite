import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";

interface PastryCategory {
  title: string;
  imageUrl: string;
  description: string;
}

interface PastryCarouselProps {
  categories?: PastryCategory[];
  onCategorySelect?: (category: PastryCategory) => void;
}

const defaultCategories: PastryCategory[] = [
  {
    title: "Cakes",
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&h=300&fit=crop",
    description: "Delicious custom cakes for any occasion",
  },
  {
    title: "Doughnuts",
    imageUrl:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&h=300&fit=crop",
    description: "Fresh and fluffy doughnuts made daily",
  },
  {
    title: "Cupcakes",
    imageUrl:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=400&h=300&fit=crop",
    description: "Perfect bite-sized treats for any event",
  },
  {
    title: "Pastries",
    imageUrl:
      "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=400&h=300&fit=crop",
    description: "Flaky and buttery traditional pastries",
  },
];

const PastryCarousel = ({
  categories = defaultCategories,
  onCategorySelect = () => {},
}: PastryCarouselProps) => {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {categories.map((category, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CategoryCard
                    title={category.title}
                    imageUrl={category.imageUrl}
                    description={category.description}
                    onClick={() => onCategorySelect(category)}
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 hover:bg-pink-100 hover:text-pink-800" />
          <CarouselNext className="hidden md:flex -right-12 hover:bg-pink-100 hover:text-pink-800" />
        </Carousel>
      </div>
    </div>
  );
};

export default PastryCarousel;
