import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1.5,
    }}
    className=''
    >
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className=' absolute xl:fixed top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>About</h3>
            <motion.img 
            initial={{
                x:-200,
                opacity:0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{
                opacity:1, x: 0,
            }}
            viewport={{
                once:true,
            }}
            src='https://b-f10-zpcloud.zdn.vn/3251896299789389941/d414c257bc72632c3a63.jpg'
            className="w-56 h-56 -mb-20 md:mb-0 rounded-full  object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[350px]">
            </motion.img>
            <div className='space-y-10 px-0 md:px-10'>
               
                <p className='text-base'>
                I aspire to become a professional, creative Front-end developer and contribute to the development of the company. I am committed to continuous learning and skill development to bring high quality products that meet the requirements of customers and colleagues.
                </p>
            </div>
    </div>
    </motion.div>
  );
}

export default About;
