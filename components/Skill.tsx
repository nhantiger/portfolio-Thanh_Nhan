// Skill.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  imageUrl: string;
  percentage: number;
};

function Skill({ imageUrl, percentage }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
  initial={{
    x: -200,
    opacity: 0,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 1,
  }}
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
    </div>
  );
}

export default Skill;
