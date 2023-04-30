import React from 'react';
import { Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

type Props = {
  text: string;
};

function BackgroudCircles({ text }: Props) {
  function scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        border: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center mb-20 pb-20 items-center'
    >
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'/>
      <div className='absolute border border-[#333333] rounded-full h-[450px] w-[450px] mt-52 '/>
      <div className='absolute border border-[#F7AB0A] opacity-20 rounded-full h-[600px] w-[600px] mt-52 animate-pulse'   />
      <div className='absolute border border-[#333333] rounded-full h-[700px] w-[700px] mt-52 animate-ping'/>
      <div className='mt-20 pt-20'>
        <div className='mt-20 pt-20 '>
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://b-f10-zpcloud.zdn.vn/8191219509785039038/8862240f9731486f1120.jpg" alt="" />
        </div>
      <div className=''>
    <h2 className='text-orange-500 uppercase text-xl tracking-[15px]'>Front-end Developer</h2>
      <h1 className='text-2xl font-semibold lg:text-4xl px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
      </h1>
      </div>
      <div className='mt-4 z-10 relative'>
        <button onClick={() => scrollToSection('about')} className='heroBtn'>
          About
        </button>
        <button
          onClick={() => scrollToSection('experisence')}
          className='heroBtn'
        >
          Experience
        </button>
        <button onClick={() => scrollToSection('skills')} className='heroBtn'>
          Skills
        </button>
        <button onClick={() => scrollToSection('project')} className='heroBtn'>
          Project
        </button>
      </div>
      </div>
      
    </motion.div>
    
  )
}

export default BackgroudCircles
