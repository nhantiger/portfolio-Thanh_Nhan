import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/Header';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experisence from '@/components/Experisence';
import Skills from '@/components/Skills';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
          <Head>
            <title> Thanh_Nhan`s Portfolio</title>
          </Head>
          {/* Header */}
          <Header />
          {/* Hero */}
          <section id="hero" className="snap-center">
            <Hero />
          </section>
          {/* About */}
          <section id="about" className="snap-center">
            <About />
          </section>
          {/* Experisence */}
          <section id="experisence" className="snap-center">
            <Experisence />
          </section>
          {/* Skills */}
          <section id="skills" className="snap-start">
            <Skills />
          </section>
          {/* Project */}
          <section id="project" className="snap-start">
            <Project />
          </section>
          {/* Contact me */}
          <section className="snap-start">
            <Contact />
          </section>
          <section className="snap-end">
            <Footer />
          </section>
        </div>
      )}
    </>
  );
};

export default Home;
