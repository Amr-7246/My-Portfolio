import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { AboutDataForCompany, AboutDataForClient } from './AbotData';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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

const About = () => {
  const [WhoAreThere, setWhoAreThere] = useState('');
  const [openTab, setOpenTab] = useState(null);
  const btn = 'bg-purple-600/20 w-full text-indigo-700 font-black duration-700 p-3 cursor-pointer hover:bg-transparent hover:border-indigo-700 border border-transparent rounded-lg';

  // Select data source
  const aboutData = WhoAreThere === 'company' ? AboutDataForCompany : WhoAreThere === 'client' ? AboutDataForClient : [];

  // Tab click handler
  const handleTabClick = idx => {
    setOpenTab(openTab === idx ? null : idx);
  };

  return (
    <>
      <motion.div variants={textVariant()} className='mb-10 flex flex-col gap-10' id='about'>
        <h2 className={`font-bold text-[50px] text-transparent bg-clip-text w-fit bg-gradient-to-r from-blue-800 via-purple-800  to-pink-800`}>Overview</h2>
        {/* Select Buttons Controller */}
        <div className='flex flex-row justify-between gap-4'>
          <button onClick={() => setWhoAreThere(WhoAreThere === 'company' ? '' : 'company')} className={`${btn} ${WhoAreThere === 'company' ? '!bg-transparent !border-indigo-700' : ''}`}>For company</button>
          <button onClick={() => setWhoAreThere(WhoAreThere === 'client' ? '' : 'client')} className={`${btn} ${WhoAreThere === 'client' ? '!bg-transparent !border-indigo-700' : ''}`}>For client</button>
        </div>
        {/* Tabs Section */}
        {WhoAreThere ? (
          <div className="w-full max-w-3xl mx-auto mt-8 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-black/60 via-purple-900/20 to-black/60 backdrop-blur-lg">
            {aboutData.map((item, idx) => (
              <div key={idx}>
                <div className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-all duration-300 select-none ${openTab === idx ? 'bg-gradient-to-r from-purple-900/30 to-indigo-900/20 text-purple-400 shadow-inner scale-[1.01]' : 'hover:bg-purple-900/10 text-stone-400'} font-bold text-lg`} onClick={() => handleTabClick(idx)} >
                  <span className=' tracking-widest font-rubikPuddles text-transparent bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 bg-clip-text '>{item.title}</span>
                  <span className="ml-2 text-xl transition-transform duration-300">
                    {openTab === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: openTab === idx ? 'auto' : 0, opacity: openTab === idx ? 1 : 0, marginBottom: openTab === idx ? 24 : 0 }}
                  transition={{ duration: 0.5, ease: [0.6, 0.05, 0.28, 0.99] }}
                  style={{ overflow: 'hidden' }}
                >
                  {openTab === idx && (
                    <div className="px-8 py-6 ">
                      <p className=" font-rubikDistressed text-transparent bg-gradient-to-r from-white via-sky-400 to-white bg-clip-text mb-3">{item.UperContent}</p>
                      <p className=" font-joti text-transparent bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-300 bg-clip-text font-bold mb-3">{item.HighlitedContent}</p>
                      <p className=" font-frijole text-transparent bg-stone-400 bg-clip-text ">{item.DownContent}</p>
                    </div>
                  )}
                </motion.div>
                {/* Gradient line separator */}
                {idx < aboutData.length - 1 && (
                  <div className="h-[2px] w-full bg-gradient-to-r from-purple-700/0 via-purple-700/60 to-purple-700/0 my-1" />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <motion.p variants={fadeIn('', '', 0.1, 1)} className="md:my-[50px] lg:my-[100px] my-[20px] text-center mx-auto w-fit font-bold text-teal-300/50 text-[17px] max-w-3xl leading-[30px]">
              You can Select What you are looking For
            </motion.p>
          </div>
        )}
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

export default WrappedAbout;
