import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline , VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import photo from "../assets/Customize/photo_5_2025-01-09_01-14-24.jpg";


const ExperienceCard = ({ experience }) => {
  const openWeb = (link) => {
    if (link) {
      window.open(link, "_blank"); // Opens the link in a new tab
    } else {
      console.log("No link provided");
    }
  };
  return (
  <VerticalTimelineElement
  contentStyle={{
    backgroundImage: `url(${experience.bgPhoto})`,
    backgroundSize: "cover", // Optional: ensures the image covers the element
    backgroundRepeat: "no-repeat", // Optional: prevents tiling of the background
    color: "black",
    padding:'0px',

  }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    // date={experience.date}
    dateClassName="absolute opacity-[0]"
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          onClick={() => openWeb(experience.link)}
          className="w-[60%] h-[60%] object-contain cursor-pointer  hover:scale-[1.2] transition-transform duration-300 hover:rotate-[20deg]"
        />
      </div>
    }
  >
    {/* ############# */}
    <div className="bg-black/70 flex flex-col h-[350px] justify-center"> 
      <div>
        <h3 className="text-white text-[24px] text-center font-bold cursor-pointer hover:text-blue-600 hover:underline"  onClick={() => openWeb(experience.link)}>{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      {/* ############# */}
      <dev className="  mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <p
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 text-center tracking-wider  h-[100px] mb-[500px] "
          >
            {point}
          </p>
        ))}
      </dev>
    </div>
    {/* ############# */}
  </VerticalTimelineElement>
  )
};

const Experience = () => (
  <>
    {/* ############# */}
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        What I have done so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience</h2>
    </motion.div>
    {/* ############# */}
    {/* ############# */}
    <div className="mt-20 flex flex-col ">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard  key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
    {/* ############# */}
  </>
);

export default SectionWrapper(Experience, "work");
