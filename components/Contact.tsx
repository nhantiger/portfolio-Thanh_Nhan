import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';


const ParticlesBg = dynamic(
  () => import('particles-bg').then((mod) => mod.default),
  { ssr: false }
);

type Props = {};

function Contact({}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 1.5,
    }}
    className="contact-container"
  >
    <ParticlesBg type="cobweb" num={100} color="#ffffff" bg={false} />
    <div className="contact-form-wrapper">
      <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase  tracking-[20px] text-gray-500 text-2xl md:whitespace-nowrap">
          Contact
        </h3>
        <div className="contact-form-container md:mr-20 md:pr-10">
          <form className="contact-form">
            <input
              className="contact-input text-black"
              type="text"
              placeholder="Name"  
              required
            />
            <input
              className="contact-input  text-black"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="contact-textarea  text-black"
              placeholder="Message"
              rows={4}
              required
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="contact-submit "
              type="submit"
            >
              Send
            </motion.button>
          </form>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Contact;
