import React, { useRef, useState , useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { contact } from '../Data/OtherData';
import { slideIn } from "../utils/motion";
import { FiCopy, FiCheck } from "react-icons/fi";
import "../index.css";

const Contact = () => {
  const [WhichContactM, setWhichContactM] = useState('')
  const [ItemNumber, setItemNumber] = useState('');
  // const [copied, setCopied] = useState(false);

  // const handleCopy = (item) => {
  //   setItemNumber(item.Number)
  //   console.log(ItemNumber)
  // };
  // useEffect( async () => {
  //   try {
  //     await navigator.clipboard.writeText(ItemNumber);
  //     setCopied(true);
  //     setTimeout(() => setCopied(false), 2000); 
  //   } catch (err) {
  //     console.error("Failed to copy:", err);
  //   }
  //   console.log(copied)
  //   console.log(ItemNumber)
  // }, [ItemNumber])

  const HandelContact = (navLink) => {
    if (navLink == 'Phone') {
      if( WhichContactM == 'Phone'){
        setWhichContactM('')
      }else{
        setWhichContactM('Phone')
      }
    } else if (navLink == 'Mail') {
      if( WhichContactM == 'Mail'){
        setWhichContactM('')
      }else{
        setWhichContactM('Mail')
      }
    } else {
      window.open(navLink,'_blank')
      setWhichContactM('')
    }
} 
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`} id="contact">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] items-center flex flex-col p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>
        <div className="flex  flex-wrap my-[30px]">
          {contact.map((item) => (
            <div className="relative">
              <img onClick={() => HandelContact(item.navLink)} className="w-[50px] h-[50px] rounded-full mx-2 boxShadow animate-up-down cursor-pointer " src={item.icon} alt={item.name} />
              <div className={`${WhichContactM == item.navLink ? 'flex' : 'hidden'} duration-700 bg-stone-400/10 right-[-150%] backdrop-blur-md p-3 rounded-lg  font-black absolute `}>
                { WhichContactM && 
                  WhichContactM == 'Phone' ? 
                  <div className="flex gap-3 items-center justify-center">
                    <p className="text-[15px] text-center text-green-500">{item.Number}</p> 
                    {/* <button onClick={handleCopy(item)} className="text-green-500 hover:text-green-600 transition">
                      {copied ? <FiCheck className="text-xl" /> : <FiCopy className="text-xl" />}
                    </button> */}
                  </div>
                  : 
                  WhichContactM == 'Mail'  ? 
                  <div className="flex gap-3 items-center justify-center">
                    <p className="text-[15px] text-center  text-red-500">{item.Number}</p> 
                    {/* <button onClick={() => {handleCopy(item) }} className="text-green-500 hover:text-green-600 transition">
                      {copied ? <FiCheck className="text-xl" /> : <FiCopy className="text-xl" />}
                    </button> */}
                  </div>
                  : ''
                }
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}
export default Contact;