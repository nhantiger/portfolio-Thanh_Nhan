import React from 'react'
import { motion } from 'framer-motion';
import ExperisenceCart from './ExperisenceCart';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

type Props = {}

function Experisence({}: Props) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: isMobile ? '10px' : '180px',
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className=' absolute top-24  uppercase ml-5 tracking-[20px] text-gray-500 text-2xl '>Experisence</h3>
      <div className='w-full mt-20 overflow-x-scroll pt-10 hide-horizontal-scrollbar md:mx-auto md:w-auto'>
        <Slider {...settings} className='justify-center'>
          <ExperisenceCart />
          <ExperisenceCart />
          <ExperisenceCart />
          <ExperisenceCart />
        </Slider>
      </div>
  
    </motion.div>
  )
}

export default Experisence
