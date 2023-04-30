import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
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
      <h3 className='absolute top-24 xl:fixed uppercase ml-5 tracking-[20px] text-gray-500 text-2xl'>
        Project
      </h3>
      <div className='w-full md:w-4/5 md:mt-20'>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className='flex flex-col items-center'>
              <img
                src={project.imageUrl}
                alt={project.title}
                className='w-full h-56 md:h-80 object-cover rounded-lg'
              />
              <h4 className='mt-4 text-2xl font-bold'>{project.title}</h4>
              <p className='mt-2 text-gray-100'>{project.description}</p>
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                
                className='mt-4 inline-block bg-[#3f51b5] text-white py-2 px-4 rounded'
              >
                Xem chi tiết
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
}

export default Project;
