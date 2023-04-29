import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  imageUrl: string;
  percentage: number;
};

function Skill({ imageUrl, percentage }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 150,
  };

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      controls.start({ opacity: 0, y: 50, scale: 0.8 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={controls}
      transition={spring}
    >
      <motion.img 
      
  src={imageUrl}
  className="rounded-full bg-white border border-gray-500 object-cover w-14 h-14 md:w-28 md:h-28 xl:w-24 xl:h-24 filter transition duration-300 ease-in-out mb-2 md:m-4"
/>
      <div
        className={`absolute inset-0 bg-white ${
          isHovered ? 'opacity-80' : 'opacity-0'
        } transition duration-300 ease-in-out md:ml-4 rounded-full w-18 h-18 md:w-28 md:h-28 xl:w-24 xl:h-24`}
        
      ></div>
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } transition duration-300 ease-in-out`}
      >
        <span className="md:text-3xl text-lg md:mr-5 md:ml-5 font-bold text-black">
          {percentage}%
        </span>
      </div>
    </motion.div>
  );
}

export default Skill;
