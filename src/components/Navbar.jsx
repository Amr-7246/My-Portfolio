import React, { useState } from 'react';
import {Amr} from '../assets';

const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "#about",
    title: "About",
  },
  {
    id: "/experines",
    title: "Experines",
  },
  {
    id: "/contact",
    title: "Contact",
  },
  {
    id: "/Resume.pdf",
    title: "My Resume",
  },
];
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const list = () => {
    setToggle(!toggle)
  }
  // ####################### elements
  return (
    <>
      {/* ########################## */}
      <nav style={{ backgroundColor: 'rgb(144 89 255 / 15%)'}} className={` w-[90%] mx-auto max-w-[1170px] rounded-[20px] top-[30px] fixed translate-x-[-50%] left-[50%] backdrop-blur-lg z-20 `}>
        <div className='flex items-center justify-between w-full px-4 py-2 '>
          <div className='flex items-center'>
          {/* ********* */}
            <img src={Amr} className='rounded-full object-cover md:w-[70px] md:h-[70px] w-[60px] h-[60px] mr-4' alt="my imge" />
            <a className='cursor-pointer' href='#about'>Amr</a>
          </div>
          {/* ********* */}
          <div className='group'>
            <div onClick={list} className='flex cursor-pointer w-10 h-4 flex-col justify-around items-center'>
              <span className={`${  toggle ? 'transform rotate-45' : 'transform rotate-0'}
                                    ${toggle ? 'top-[3px]' : 'top-0'}
                                    ${toggle ? 'bg-purple-500' : 'bg-stone-100'} 
                                    ${toggle ? 'w-[60%]' : 'w-[100%]'} 
                                    group-hover:bg-gradient-to-r from-stone-100/10 via-purple-500 to-stone-100/10
                                    duration-[500ms] relative w-[100%] h-[3px] rounded-[100%] `}></span>
              <span className={`${toggle ? 'transform rotate-[-45deg]' : 'transform rotate-0'} 
                                ${toggle ? 'top-[-5px]' : 'top-0'}
                                ${toggle ? 'bg-purple-500' : 'bg-stone-100'}  
                                ${toggle ? 'w-[60%]' : 'w-[100%]'} 
                                group-hover:bg-gradient-to-r from-stone-100/10 via-purple-500 to-stone-100/10 
                                duration-[500ms] relative w-[100%] h-[3px] rounded-[100%] `}></span>
            </div>
          </div>
        </div>
      {/* ########################## */}
        <div style= {{transition: 'all 1000ms cubic-bezier(0.6, -0.16, 0.44, 1.25)'}} className={` ${toggle ? 'w-[90%] h-[250px] left-1/2 top-[120%] md:w-[300px] md:h-[350px] md:left-[78%] lg:left-[80%] transform -translate-x-1/2' :  'w-[0px] h-[0px] z-10 left-[90%] top-[70%]  md:left-[95%] md:top-[50%] rounded-[100%]'}  duration-[700ms] overflow-hidden mx-auto z-10 rounded-[20px] absolute `}   > 
          <div className={`bg-black/70 h-[100%] w-full !backdrop-blur-3xl flex-col justify-center py-6`}>
            <ul  className='flex flex-col w-full md:py-[60px] h-full'>
                <li  className={` ${toggle ? 'opacity-1' :  'opacity-0'} duration-[600ms] delay-[300ms] flex flex-col h-full  py-[2px] items-center justify-center`}>
                  {
                    navLinks.map((link) => (
                          <a onClick={list} key={link.id}   className=' not-last:border-b w-[90%] border-purple-400 text-purple-400  h-[100%] flex items-center justify-center text-center hover:text-blue-600 hover: ' href={`${link.id}`}>
                            {link.title}
                          </a>
                    ))
                  }
                </li>
            </ul>
          </div> 
        </div>
      </nav>
      {/* ########################## */}
    </>
  );
};

export default Navbar;
