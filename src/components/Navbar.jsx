import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu,Amr,bgNav,navList2,navList,bgNav2,bgNav3 } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  // ####################### useState
  const [toggle, setToggle] = useState(false)
  // ####################### logic
  const list = () => {
    setToggle(!toggle)
  }
  // ####################### elements
  return (
    <>
      {/* ########################## */}
      <nav style={{ backgroundColor: 'rgb(144 89 255 / 15%)'}} className={` w-[90%] mx-auto max-w-[1170px] relative rounded-[20px] md:top-[50px] top-[30px] z-20 `}>
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

        <div style= {{transition: 'all 1000ms cubic-bezier(0.6, -0.16, 0.44, 1.25)'}} className={` ${toggle ? 'w-[90%] h-[250px] left-1/2 top-[120%] md:w-[300px] md:h-[350px] md:left-[78%] lg:left-[80%] transform -translate-x-1/2' :  'w-[0px] h-[0px] z-10 left-[90%] top-[70%]  md:left-[95%] md:top-[50%] rounded-[100%]'}  duration-[1000ms] bg-cover bg-center overflow-hidden mx-auto z-10 rounded-[20px] absolute `}   > 
          <div className={`bg-black/70 h-[100%] w-full  flex-col justify-center py-6`}>
            <ul  className='flex flex-col w-full md:py-[60px] h-full'>
                <li  className={` ${toggle ? 'opacity-1' :  'opacity-0'} duration-[600ms] delay-[300ms] flex flex-col h-full  py-[10px] items-center justify-center`}>
                  {
                    navLinks.map((link) => (
                          <a onClick={list} key={link.id}   className=' not-last:border-b w-[90%] border-gray-400 text-purple-400  h-[100%] flex items-center justify-center text-center hover:text-blue-600 hover: ' href={`#${link.id}`}>
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

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { close, logo, menu } from '../assets';
// import { navLinks } from '../constants';
// import { styles } from '../styles';

// const Navbar = () => {
//   // ####################### useState
//   const [active, setActive] = useState('');
//   const [toggle, setToggle] = useState(false);
//   // ####################### logic
//   const toggleResume = () => {
//     const resumeUrl = '/Resume.pdf';
//     window.open(resumeUrl);
//   };
// //  *********
//   useEffect(() => {
//     if (toggle) {
//       setActive('');
//     }
//   }, [toggle]);
// //  *********

//   const renderNavLinks = (isSecondary) => (
//     <ul className={`list-none ${isSecondary ? 'flex sm:hidden' : 'hidden sm:flex'} flex-row gap-6`}>
//       {navLinks.map((link) => (
//         <li
//           key={link.id}
//           className={`${
//             active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
//           } hover:text-white text-[20px] font-medium cursor-pointer`}
//           onClick={() => {
//             setActive(link.title);
//             if (isSecondary) {
//               setToggle(false);
//             }
//           }}
//         >
//           <a href={`#${link.id}`}>{link.title}</a>
//         </li>
//       ))}
//       <li
//         className={`text-${
//           isSecondary ? 'secondary' : 'white'
//         } hover:text-white text-[20px] font-medium cursor-pointer`}
//       >
//         <button onClick={toggleResume}>Resume</button>
//       </li>
//     </ul>
//   );
// //  *********

//   return (
//     <>
//       <nav
//         className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
//       >
//         <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//           {/* ################### */}
//           <Link
//             to="/"
//             className="flex items-center gap-2"
//             onClick={() => {
//               setActive('');
//               window.scrollTo(0, 0);
//             }}
//           >
//             <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//             <p className="text-white text-[20px] font-bold cursor-pointer flex">
//               LOHIT&nbsp;
//               <span className="sm:block hidden">KOLLURI</span>
//             </p>
//           </Link>
//           {/* ################### */}
//           {renderNavLinks(false)}
//           {/* ################### */}
//           <div className="sm:hidden flex flex-1 justify-end items-center">
//             <img
//               src={toggle ? close : menu}
//               alt="menu"
//               className="w-[28px] h-[18px] object-contain cursor-pointer"
//               onClick={() => setToggle(!toggle)}
//             />
//             <div
//               className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
//                 toggle ? 'flex' : 'hidden'
//               }`}
//             >
//               {renderNavLinks(true)}
//             </div>
//           </div>
//           {/* ################### */}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
