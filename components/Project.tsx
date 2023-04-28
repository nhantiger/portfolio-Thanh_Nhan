import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Project.module.scss';

type Props = {};

const projects = [
  {
    title: 'Blog Travel',
    description: 'Là một trang web du lịch giới thiệu các tour du lịch và địa điểm tham quan nổi tiếng. Mục đích của trang web là cung cấp thông tin về các địa điểm du lịch hấp dẫn, giúp người dùng lên kế hoạch và đặt tour du lịch một cách dễ dàng.',
    imageUrl: 'https://f10-zpcloud.zdn.vn/7659049788213854298/1f26d4554f7e9020c96f.jpg',
    url: 'https://tralveltour.vercel.app/',
  },
  {
    title: 'Building Materials',
    description: 'Là một trang web giới thiệu công ty xây dựng K&P Construction và các sản phẩm công ty cung cấp. Mục đích của trang web là cung cấp thông tin về dịch vụ và các sản phẩm của công ty, đồng thời có thể đặt hàng mua hàng trực tuyến.',
    imageUrl: 'https://f10-zpcloud.zdn.vn/833891836994363095/de050945916e4e30177f.jpg',
    url: 'https://k-p-construction.vercel.app/',
  },
  {
    title: 'Booking app',
    description: 'Là một web ứng dụng đặt chỗ trực tuyến cho các dịch vụ như đặt phòng, mua vé và thư giãn. Mục đích của trang web là giúp người dùng tìm kiếm và đặt lịch hẹn với các dịch vụ trong khu vực của họ một cách dễ dàng và tiện lợi.',
    imageUrl: 'https://f10-zpcloud.zdn.vn/3288118886791775852/10662092beb961e738a8.jpg',
    url: 'https://bookingapp-n12.vercel.app/',
  },
];


function Project({}: Props) {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };
  
  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
      transition: { duration: 0.2 }
    },
    initial: {
      scale: 1,
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      transition: { duration: 0.2 }
    }
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
      className={styles.container}
    >
      <div className="relative h-screen md:flex-row max-w-7xl px-4 sm:px-10 mx-auto items-center">
        <div className="grid grid-cols-3 gap-8 mt-10 md:pt-20 sm:mt-24">
          <div></div>
          <div className="flex items-center justify-center">
            <h3 className="uppercase  tracking-[20px] text-gray-500 md:top-24 mb-10 md:mt-10 mt-20 text-2xl">Project</h3>
          </div>
          <div></div>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer col-span-3 sm:col-span-1"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <a href={project.url}>
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h4 className="text-lg text-black font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600">{project.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
  
  
}

export default Project;
