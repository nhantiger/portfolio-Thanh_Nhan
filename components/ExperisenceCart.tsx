import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function ExperisenceCart({}: Props) {
    return (
<article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-full sm:w-3/4 md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
  

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
                    Front-end Developer
                </h4>
                <p className='font-bold text-lg my-1'>WEBPRO ECLIPSE</p>
                <div className='flex md:justify-start justify-center space-x-2 '>
                    <img className='h-7  rounded-lg flex-shrink-0' src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="" />
                    <img className='h-7 bg-white rounded-full flex-shrink-0' src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="" />
                    <img className='h-7 rounded-full flex-shrink-0' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="" />    
                    <img className='h-7  rounded-lg flex-shrink-0' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />    
                </div>
                <p className='uppercase p-1  text-gray-300'>Started work... - Ended...</p>
                <ul className='list-disc space-y-2 ml-5 text-xs scrollbar-hide'>

                    <li> summary pointsummary pointsummary pointsummary pointsummary pointsummary pointsummary pointsummary point</li>
                    <li> summary pointsummary pointsummary pointsummary pointsummary pointsummary pointsummary pointsummary point</li>
                    <li> summary pointsummary pointsummary pointsummary pointsummary pointsummary pointsummary pointsummary point</li>
                    <li> summary pointsummary pointsummary pointsummary pointsummary pointsummary pointsummary pointsummary point</li>
</ul>
</div>
</article>
)
}

export default ExperisenceCart;