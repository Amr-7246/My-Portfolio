import { motion } from 'framer-motion';
import React , {useState} from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

// ~ ########### Start Service motion Card
  const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" >
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
// ~ ########### End Service motion Card
// ~ ########### Start About Section
  const About = () => {
    const [WhoAreThere, setWhoAreThere] = useState('')
    const btn = 'bg-purple-600/10 w-full text-indigo-700 font-black duration-700 p-3 cursor-pointer hover:bg-transparent hover:border-indigo-700 border border-transparent rounded-lg'
    return (
      <>
        <motion.div variants={textVariant()} className=' mb-10 flex flex-col gap-10 ' id='about'>
          <h2 className={`font-bold text-[50px] text-transparent bg-clip-text w-fit bg-gradient-to-r from-blue-800 via-purple-800  to-pink-800`}>Overview</h2>
          {/* Select Buttons Controller */}
            <div className='flex flex-row justify-between gap-4'>
              <button onClick={() => {
                if(WhoAreThere == 'company'){setWhoAreThere('')}else{setWhoAreThere('company')}
                }} 
                className={`${btn} ${WhoAreThere == 'company' ? '!bg-transparent !border-indigo-700' : ''} `} >
                  For company
              </button>
              <button onClick={() => {
                if(WhoAreThere == 'client'){setWhoAreThere('')}else{setWhoAreThere('client')}
                }} 
                className={`${btn} ${WhoAreThere == 'client' ? '!bg-transparent !border-indigo-700' : ''}`} >
                  For client
              </button>
            </div>
          {/* Select Buttons Controller */}
          {/* Start About section for Company and client */}
            {
              WhoAreThere == "company" ? 
              <div>
                <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 font-bold text-secondary text-[17px] max-w-3xl leading-[30px]" >
                  <p className="text-stone-400 mb-5">
                    - I’m a passionate web developer with a strong focus on modern front-end technologies like 
                    <span className="text-indigo-600"> JS/TS, HTML, CSS (Tailwind), and frameworks like Next.js</span>. 
                    and of course I’ve leveled up my UI game with animation tools like GSAP and Framer Motion to bring interfaces to life.
                  </p>
                  <p className="text-stone-400 mb-5">
                    - While I specialize in modern stacks, I’m flexible and always ready to learn any tech that gets the job done . . . 
                    If I don’t know it today, best believe I’ll learn it tomorrow — through deep research, non-stop practice, and staying ahead of the curve.
                  </p>
                  <p className="text-stone-400 mb-5">
                        - But I'm not just limited to the front-end side of the big picture, I have a global understanding of the entire apps production lifecycle. 
                        And with hands-on experience in <span className="text-indigo-600">Node.js, back-end frameworks like Express and Django, databases like MySQL and MongoDB, plus Python programming, 
                        Vercel for front-end deployment, and AWS for back-end and DB hosting </span> This full-stack exposure leveled up my ability to see the big picture clearly.
                        which leveled up my ability to see the big picture clearly. That said, I’ve chosen to focus on front-end as the core of my journey.
                  </p>
                  <p className="text-teal-500 font-bold">
                    So rest assured — I’ll make it work.
                  </p>
                </motion.p>
              </div> 
              : WhoAreThere == "client" ?  
              <div>
                <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 font-bold text-secondary text-[17px] max-w-3xl leading-[30px]" >
                  <p className="text-stone-400 mb-5">
                    - You're looking for someone who’s not just skilled, but **fully invested** in building your vision — I get that. That’s why I bring more than just clean code to the table: 
                    I bring <span className="text-indigo-600">consistency, communication, and real project ownership</span>.
                  </p>
                  <p className="text-stone-400 mb-5">
                    - I specialize in modern stacks — <span className="text-indigo-600">Next.js, Tailwind CSS, TypeScript, Framer Motion, and Firebase</span> — and I’ve worked on everything from elegant UIs to scalable back-end logic. I know what it takes to ship products that look great *and* work under pressure.
                  </p>
                  <p className="text-stone-400 mb-5">
                    - I understand business needs. That means meeting deadlines, writing maintainable code, collaborating with teams, and adapting fast when plans shift.
                    If there's a feature you need or a problem to solve, I’m not the “wait for instructions” type — I’ll think it through, offer options, and deliver solutions.
                  </p>
                  <p className="text-stone-400 mb-5">
                    - With experience in <span className="text-indigo-600">Firebase, MongoDB, Express, Python, and AWS</span> for deployment and logic, I can handle both the front and back — but I’ve chosen to go all in on **front-end excellence** because that’s where your users feel the magic. Let’s make your interface unforgettable
                  </p>
                  <p className="text-teal-500 font-bold">
                    I’m not here to test ideas — I’m here to help you build them.
                  </p>
                </motion.p>
              </div> 
              :
              <div>
                <motion.p variants={fadeIn('', '', 0.1, 1)} className="md:my-[50px] lg:my-[100px] my-[20px] mx-auto w-fit font-bold text-teal-300/50 text-[17px] max-w-3xl leading-[30px]" >
                    You can Select What you are looking For
                </motion.p>
              </div> 
            }
          {/* End About section for Company and client */}
        </motion.div>
        <div className="mt-20 flex flex-wrap justify-center gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
    );
  };

  const WrappedAbout = SectionWrapper(About, 'about');
// ~ ########### End About Section


export default WrappedAbout;
