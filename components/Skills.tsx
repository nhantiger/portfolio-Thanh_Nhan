import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';
import 'aos/dist/aos.css';

type Props = {}

function Skills({}: Props) {
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
            
        className=""
      >
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
          <h3 className="absolute top-24 uppercase tracking-[20px] xl:fixed text-gray-500 text-2xl md:whitespace-nowrap">
            Skills
          </h3>
          <h3 className="absolute text-sm top-36 uppercase tracking-[3px] xl:fixed text-gray-500 md:whitespace-nowrap">
            {" "}
            Hover over a skills for currency PROFICIENCY
          </h3>
          <div className="flex md:mt-20 md:pt-20 md:mb-20  grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-5" >
           
                <div className=' md:mt-20' >  
                <Skill  
                imageUrl="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                percentage={90}
                />
                <Skill
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                
                percentage={90}
                />
                <Skill
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                percentage={90}
                />
                <Skill
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                percentage={80}
                />
                </div> 
                <div className=' md:mt-20 '> 
                <Skill
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
                percentage={90}
                />
                <Skill
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
                
                percentage={90}
                />
                <Skill
                imageUrl="https://cdn-icons-png.flaticon.com/512/28/28826.png"
                percentage={75}
                />
                <Skill
                imageUrl="https://www.svgrepo.com/show/303251/mysql-logo.svg"
                percentage={75}
                />
                </div> 
                <div className=' md:mt-20 '> 
                <Skill
                imageUrl="https://www.svgviewer.dev/static-svgs/34566/mongodb.svg"
                percentage={80}
                />
                <Skill
                imageUrl="https://img.icons8.com/color/512/c-plus-plus-logo.png"
                
                percentage={75}
                />
                <Skill
                imageUrl="https://www.svgrepo.com/show/303208/php-1-logo.svg"
                percentage={80}
                />
                <Skill
                imageUrl="https://cdn.worldvectorlogo.com/logos/java.svg"
                percentage={85}
                />
                </div> 
                <div className=' md:mt-20 '> 
                <Skill
                imageUrl="https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png"
                percentage={85}
                />
                <Skill
                imageUrl="https://www.svgrepo.com/show/333491/wix.svg"
                
                percentage={100}
                />
                <Skill
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"
                percentage={75}
                />
                <Skill
                imageUrl="https://cdn-icons-png.flaticon.com/512/5968/5968358.png"
                percentage={80}
                />
                </div> 
            </div>
        </div>
    </motion.div>
  )
}

export default Skills