import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Footer({}: Props) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#4A4A4A] to-[#333333] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
          
            <p className="text-sm">
              P.5, Q.8, HCM
              <br />
              Email: nhanrbnk365@gmail.com
              <br />
              Phone: +84 0355 213 825
            </p>
          </div>
        </div>
        <hr className="my-6" />
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} NGO THANH NHAN. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
