import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function ExperisenceCart({}: Props) {
    return (
       <div className='md:ml-0 md:pl-0 w-full md:pt-0  mt-10 '>
        <article className='flex items-center mb-10 flex-col rounded-lg space-y-4 flex-shrink-0 w-full sm:w-3/4 md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10 md:ml-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img initial={{
                y:-100,
            opacity:0,
        }}
        whileInView={{
            y:0,
            opacity:1,
        }}
        transition={{
            duration:1.2,
        }}
        viewport={{
            once:true,
        }}
        className='w-32 h-32 rounded-full object-cover object-center xl:h-[-100px] xl:w-[-100px]'
            src='https://images.pexels.com/photos/14724965/pexels-photo-14724965.jpeg?auto=compress&cs=tinysrgb&w=600'
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light'>
                    Front-end Developer (freelance work)    
                </h4>
                <p className='font-bold text-lg my-1'>WEBPRO ECLIPSE</p>
                <div className='flex md:justify-start justify-center space-x-2 '>
                    <img className='h-7  rounded-lg flex-shrink-0' src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="" />
                    <img className='h-7 bg-white rounded-full flex-shrink-0' src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="" />
                    <img className='h-7 rounded-full flex-shrink-0' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="" />    
                    <img className='h-7  rounded-lg flex-shrink-0' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />    
                    <img className='h-7  rounded-lg flex-shrink-0' src="https://i.pinimg.com/originals/5e/fd/4e/5efd4e04173b52c1c4d1f459679bf7fb.png" alt="" />    
                </div>
                <p className='uppercase p-1  text-gray-300'>Started work 07/2022 - Now</p>
                <ul className='list-disc space-y-2 ml-5 text-xs scrollbar-hide'>

                    <li> Proficient in using programming languages and having experience working with frameworks </li>
                    <li> Experience in optimizing a website for performance</li>
                    <li> Communication and teamwork skills</li>
                    <li> Worked with many customers to get requirements and analyze solutions</li>
                    
</ul>
</div>
</article>
       </div>     
)
}

export default ExperisenceCart;