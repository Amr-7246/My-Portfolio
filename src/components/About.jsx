import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id='about'>
      </motion.div>
        <h2 className={`font-bold text-[50px] text-transparent bg-clip-text w-fit bg-gradient-to-r from-blue-800 via-purple-800  to-pink-800`}>Overview</h2>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 font-bold text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p className="text-stone-400 mb-5">
          - I’m a passionate web developer with a strong focus on modern front-end technologies like 
          <span className="text-green-400"> JS/TS, HTML, CSS (Tailwind), and frameworks like Next.js</span>. 
          and of course I’ve leveled up my UI game with animation tools like GSAP and Framer Motion to bring interfaces to life.
        </p>
    
        <p className="text-stone-400 mb-5">
          - While I specialize in modern stacks, I’m flexible and always ready to learn any tech that gets the job done . . . 
          If I don’t know it today, best believe I’ll learn it tomorrow — through deep research, non-stop practice, and staying ahead of the curve.
        </p>

        <p className="text-stone-400 mb-5">
              - But I'm not just limited to the front-end side of the big picture, I have a global understanding of the entire apps production lifecycle. 
              And with hands-on experience in <span className="text-sky-400">Node.js, back-end frameworks like Express and Django, databases like MySQL and MongoDB, plus Python programming, 
              Vercel for front-end deployment, and AWS for back-end and DB hosting </span> This full-stack exposure leveled up my ability to see the big picture clearly.
              which leveled up my ability to see the big picture clearly. That said, I’ve chosen to focus on front-end as the core of my journey.
        </p>

        <p className="text-rose-500 font-bold">
          So rest assured — I’ll make it work.
        </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
