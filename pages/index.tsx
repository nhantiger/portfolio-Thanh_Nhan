import Image from 'next/image'
import Head from 'next/head';
import Header from '@/components/Header';

import type { NextPage } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/About';

const Home: NextPage = () =>{

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
   
      <Head>
         <title> Thanh_Nhan`s Portfolio</title>
      </Head>
      {/* Header */}
      <Header/>
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero/> 
    
      </section>
      {/* About */}
     <section id="about" className='snap-center'>
     <About/>
     </section>
      {/* Experisence */}

      {/* Skills */}

      {/* Project */}

      {/* Contact me */}
    
    </div>
  );
};

export default Home ;