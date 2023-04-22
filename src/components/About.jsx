import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        👋🏾 Hey I'm Matthew, a First Year Computer Engineering student at the University of Waterloo. I'm currently looking for Software Development Intern opportunities, this Summer 2023!
        <br/>
        <p>‏‏‎ ‎</p>
        💬 I'm really passionate about creating a positive change through technical innovation, where I strive to build for impact!
        <br/>
        <p>‏‏‎ ‎</p>
        💻 Previously, I interned at Carizon, where I built and deployed a production-grade ticket distribution system. I’ve also led a team of students on my robotics team as a lead programmer!
        <br/>
        <p>‏‏‎ ‎</p>
        🌱 In my free time, you can find me playing soccer, finding my perfect coffee, and grabbing a bite to eat!
        <br/>
        <p>‏‏‎ ‎</p>
        🗨 Always looking to learn from others' experiences — let’s chat!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");