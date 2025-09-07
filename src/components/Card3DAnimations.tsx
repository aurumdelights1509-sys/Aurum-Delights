'use client';

import { motion } from "framer-motion";

// Product Card 3D Animation
export function ProductCard3D({ 
  children, 
  isHovered 
}: { 
  children: React.ReactNode; 
  isHovered: boolean; 
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        y: isHovered ? -10 : 0,
        scale: isHovered ? 1.02 : 1,
        transition: { 
          duration: 0.3, 
          ease: "easeOut",
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

// Review Card 3D Animation
export function ReviewCard3D({ 
  children, 
  isHovered 
}: { 
  children: React.ReactNode; 
  isHovered: boolean; 
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        y: isHovered ? -5 : 0,
        scale: isHovered ? 1.01 : 1,
        transition: { 
          duration: 0.3, 
          ease: "easeOut",
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

// Blog Card 3D Animation
export function BlogCard3D({ 
  children, 
  isHovered 
}: { 
  children: React.ReactNode; 
  isHovered: boolean; 
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        y: isHovered ? -5 : 0,
        scale: isHovered ? 1.01 : 1,
        transition: { 
          duration: 0.3, 
          ease: "easeOut",
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}