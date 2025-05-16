import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline , VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FiExternalLink } from "react-icons/fi";

// ~ ########### Start Experience Card
  const ExperienceCard = ({ experience }) => {
    const openWeb = (link) => {
      if (link) {
        window.open(link, "_blank"); 
      } else {
        console.log("No link provided");
      }
    };
    return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundImage: `url(${experience.bgPhoto})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "black",
        padding:'0px',
      }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
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
        {/* ############# Card Content */}
          <div className="  flex flex-col md:h-[350px] h-[290px] justify-between text-stone-400 ">
            { experience.IsCollection ? 
              <div className=" justify-center flex flex-wrap mt-[10%] gap-2 ">
                {experience.CollectionDeets.map((item , index) => (
                  <h3 key={index} className = " md:text-[15px] text-[10px] bg-indigo-800/20 backdrop-blur-md p-1 rounded-lg items-center text-center justify-center flex-center md:w-[150px] w-[100px] font-bold cursor-pointer hover:text-blue-600 flex hover:underline" 
                      onClick={() => openWeb(item.link)}
                      >
                        {item.title}<span className=" m-2 text-center " ><FiExternalLink/></span>
                  </h3>
                ))}
              </div>
              :
              <div className="justify-center flex flex-wrap mt-[20%] gap-2 ">
                <h3 className = "bg-stone-800/20 border-[1px] border-stone-600 py-2 px-5 rounded-lg items-center w-fit backdrop-blur-lg md:text-[19px] text-[15px] text-center justify-center flex-center  font-bold cursor-pointer hover:text-blue-600 flex hover:underline" 
                    onClick={() => openWeb(experience.link)}
                    >
                      {experience.title}<span className=" m-2 text-center " ><FiExternalLink/></span>
                </h3>
              </div>

            }
            <dev className=" rounded-t-sm pb-2 px-3 list-disc mx-auto w-full h-fit backdrop-blur-md bg-black/50 space-y-2">
              {experience.points.map((point, index) => (
                <p
                  key={`experience-point-${index}`}
                  className=" !font-black text-[14px] text-center tracking-wider  "
                >
                  {point}
                </p>
              ))}
            </dev>
          </div>
        {/* ############# Card Content */}
    </VerticalTimelineElement>
    )
  };
// ~ ########### End Experience Card
const Experience = () => (
  <>
    {/* ############# */}
    <div id="work">
      <p className={`${styles.sectionSubText} text-center`}>
        What I have done so far . . . <span className="text-indigo-300 font-bold"> You can Visit any one of them</span>
      </p>
      <h2 className={`${styles.sectionHeadText} w-fit mx-auto !text-transparent !bg-clip-text !bg-gradient-to-r from-blue-800 via-purple-800  to-pink-800 text-center`}>Work Experience</h2>
    </div>
    {/* ############# */}
    {/* ############# */}
    <div className="mt-20 max-w-[500px] lg:max-w-[2000px] mx-auto flex flex-col ">
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
