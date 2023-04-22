import { motion } from 'framer-motion';
import Tilt from "react-parallax-tilt";

import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import Type from './Type';
import { github } from "../assets";
import { socials } from "../constants";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

import { projects } from "../constants";
import { test1 } from '../constants';
import { resume } from '../constants';


import { fadeIn, textVariant } from "../utils/motion";


const TestCard = ({
  index,
  image,
  href,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 350,
        }}
        className='p-3 rounded-1xl sm:w-[minpx] w-min'>
            <div
              onClick={() => window.open(href, "_blank")}
              className='violet-gradient w-16 h-16 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={image}
                alt='source code'
                className='w-11 h-11 object-contain'
              />
            </div>
      </Tilt>
    </motion.div>
  );
};

const ResumeCard = ({
  index,
  image,
  href,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='p-2 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <div className='absolute inset-0 flex justify-end m-6 card-img_hover'>
            <div
              onClick={() => window.open(href, "_blank")}
              className='violet-gradient w-full h-1/2 rounded-full flex justify-center items-center cursor-pointer'
            >
              <p className = {`${styles.heroSubText} mt text-white-100`}>Resume &#62; </p>
            </div>
          </div>
        </div>
        <div className='mt-5'>
        </div>
      </Tilt>
    </motion.div>
  );
};


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[250px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-cetner items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
 
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi {"  "}
            <span className="wave" role="img" aria-labelledby="wave">
                  👋🏿
            </span>, {" "} I'm <span className='text-[#915eff]'>Matthew</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a software engineer with <br className='sm:block hidden' /> an interest in  
            <span className='text-[#915eff]'> <Type/> </span> 
          </p>
          <div className='mt-10 flex flex-wrap gap-3'>
            {test1.map((test, index) => (
              <TestCard key={`test-${index}`} index={index} {...test} />
            ))}
          </div>

          <div className='mt- flex flex-wrap gap-3'>
            {resume.map((resume, index) => (
              <ResumeCard key={`resume-${index}`} index={index} {...resume} />
            ))}
          </div>
  
        </div> 
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero