import { HiSparkles } from "react-icons/hi2";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import "./App.css";
import { useState } from "react";

function App() {
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(true);
  const [add, setAdd] = useState(true);

  const handleFront = () => {
    setFront(!front);
  };

  const handleBack = () => {
    setBack(!back);
  };
  const handleAdd = () => {
    setAdd(!add);
  };

  return (
    <div className="max-w-[1600px] mx-auto body">
      {/* navbar styling */}
      <div className="flex text-[white] justify-between items-center bg-[#0F0F0F]  px-[20px] py-[10px] h-[70px]">
        <span className="logo text-3xl text-[#FB6195]">AK</span>
        <div className="flex text-sm gap-[30px]">
          <span>About Me</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </div>

      {/* main content style !!!edit */}
      <div className="flex items-center min-h-[650px] md:min-h-[800px] px-[20px] ">
        <div className="w-[100%] [&>h1]:text-2xl lg:[&>h1]:text-5xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
          <h1>
            Hello, <span className="color">I'm Arihant,</span>
          </h1>
          <h1>a MERN Stack Developer</h1>
          <h1>living in Nagpur</h1>
          <p className="mt-[50px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
            soluta dolores, asperiores eligendi rerum excepturi.
          </p>
          <div className="mt-[70px] [&>button]:uppercase [&>button]:font-semibold [&>button]:py-[12px] [&>button]:px-[25px] [&>button]:rounded-xl flex flex-col sm:flex-row gap-[20px]">
            <button className="bgColor">Get in touch </button>
            <button className="border-black border-[2px] ">
              view all work
            </button>
          </div>
        </div>
        <div className="hidden md:block md:w-[80%] mx-auto mt-[50px]">
          <img src="/mainSection.svg" alt="" />
        </div>
      </div>

      {/* seperator */}
      <div className="w-[100%] h-[70px] bgColor lg:mt-[30px]">
        <div className="flex justify-evenly gap-[20px] items-center h-[60px] bg-[white] -rotate-[3deg] drop-shadow-xl ">
          <div className="flex gap-[10px] lg:gap-[30px] items-center [&>span]:text-sm lg:[&>span]:text-2xl [&>span]:font-bold">
            <span>React Js</span>
            <span>
              <HiSparkles color="pink" />
            </span>
          </div>
          <div className="hidden md:flex gap-[10px] lg:gap-[30px] items-center [&>span]:text-sm lg:[&>span]:text-2xl [&>span]:font-bold">
            <span>Express Js</span>
            <span>
              <HiSparkles color="pink" />
            </span>
          </div>
          <div className="flex gap-[10px] lg:gap-[30px] items-center [&>span]:text-sm lg:[&>span]:text-2xl [&>span]:font-bold">
            <span>Node Js</span>
            <span>
              <HiSparkles color="pink" />
            </span>
          </div>
          <div className="hidden md:flex gap-[10px] lg:gap-[30px] items-center [&>span]:text-sm lg:[&>span]:text-2xl [&>span]:font-bold">
            <span>Tailwind Css</span>
            <span>
              <HiSparkles color="pink" />
            </span>
          </div>
          <div className="hidden lg:flex gap-[30px] items-center [&>span]:text-sm lg:[&>span]:text-2xl [&>span]:font-bold">
            <span>Git Hub</span>
            <span>
              <HiSparkles color="pink" />
            </span>
          </div>
          <div className="flex gap-[10px] lg:gap-[30px] items-center [&>span]:text-sm lg:[&>span]:text-2xl [&>span]:font-bold">
            <span>MERN Stack</span>
            <span>
              <HiSparkles color="pink" />
            </span>
          </div>
        </div>
      </div>

      {/* skill section !!!edit  */}
      <div className="mt-[50px] h-[700px] md:h-[600px] px-[20px] min-h-[400px] flex flex-col gap-[50px] md:flex-row md:items-center justify-center">
        <div className="w-[100%] [&>h1]:text-3xl lg:[&>h1]:text-5xl lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
          <h1>Skills in my arsenal</h1>
          <div className="mt-[40px] p-[10px] flex gap-[20px] lg:gap-[40px] ">
            <div className="flex flex-col items-center text-xs lg:text-xl text-green-600">
              <DiMongodb className="text-[20px] lg:text-[40px]" />
              <span>Mongo DB</span>
            </div>
            <div className="flex flex-col items-center text-xs lg:text-xl text-orange-700">
              <SiExpress className="text-[20px] lg:text-[40px]" />
              <span>Express Js</span>
            </div>
            <div className="flex flex-col items-center text-xs lg:text-xl text-blue-400">
              <FaReact className="text-[20px] lg:text-[40px]" />
              <span>React Js</span>
            </div>
            <div className="flex flex-col items-center text-xs lg:text-xl text-green-400">
              <FaNodeJs className="text-[20px] lg:text-[40px]" />
              <span>Node Js</span>
            </div>
          </div>
          <p className="mt-[10px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            voluptatibus, quaerat quia cupiditate soluta cumque unde cum dicta
            exercitationem id!
          </p>
          <button className="mt-[60px] min-w-[200px] bgColor uppercase font-semibold py-[12px] px-[25px] rounded-xl">
            Get in touch
          </button>
        </div>
        <div className=" min-w-[45%] flex flex-col justify-center [&>div]:mb-[10px]">
          <div className="">
            <div className="border-b-[2px] border-[#ddd] flex items-center justify-between w-[100%] [&>h1]:text-2xl lg:[&>h1]:text-4xl lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
              <h1 className="">Front End</h1>
              <GrAdd
                onClick={handleFront}
                size={25}
                className={`${front ? "block" : "hidden"}`}
              />
              <GrSubtract
                size={25}
                onClick={handleFront}
                className={`${front ? "hidden" : "block"}`}
              />
            </div>
            <div
              className={`${
                front
                  ? "hidden"
                  : "mt-[15px] py-[10px] px-[5px] border-[#ddd] border-[2px] text-lg"
              }`}
            >
              <span>
                React Js, HTML, CSS, JavaScript, Tailwind CSS, BootStrap, E Js,
                GSAP
              </span>
            </div>
          </div>
          <div className="mt-[30px] lg:mt-[40px]">
            <div className="border-b-[2px] border-[#ddd] flex items-center justify-between w-[100%] [&>h1]:text-2xl lg:[&>h1]:text-4xl lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
              <h1 className="">Back End</h1>
              <GrAdd
                className={`${back ? "block" : "hidden"}`}
                onClick={handleBack}
                size={25}
              />
              <GrSubtract
                size={25}
                className={`${back ? "hidden" : "block"}`}
                onClick={handleBack}
              />
            </div>
            <div
              className={`${
                back
                  ? "hidden"
                  : "mt-[15px] py-[10px] px-[5px] border-[#ddd] border-[2px] text-lg"
              }`}
            >
              <span>
                Node Js, Express Js, Mongo DB, Mongoose, My Sql, Java, Java
                Spring Boot
              </span>
            </div>
          </div>
          <div className="mt-[30px] lg:mt-[40px]">
            <div className="border-b-[2px] border-[#ddd] flex items-center justify-between w-[100%] [&>h1]:text-2xl lg:[&>h1]:text-4xl lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
              <h1 className="">Additional Skills</h1>
              <GrAdd
                className={`${add ? "block" : "hidden"}`}
                onClick={handleAdd}
                size={25}
              />
              <GrSubtract
                size={25}
                className={`${add ? "hidden" : "block"}`}
                onClick={handleAdd}
              />
            </div>
            <div
              className={`${
                add
                  ? "hidden"
                  : "mt-[15px] py-[10px] px-[5px] border-[#ddd] border-[2px] text-lg"
              }`}
            >
              <span>MERN Stack, Git Hub, Postman</span>
            </div>
          </div>
        </div>
      </div>

      {/* projects section !!!edit  */}
      <div className="px-[20px] mt-[130px] md:mt-[70px]">
        <div className="[&>h1]:text-3xl lg:[&>h1]:text-5xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
          <h1>My Projects</h1>
        </div>
        <div className="mt-[50px] w-[90%] md:w-[85%] mx-auto flex flex-col-reverse md:flex-row md:gap-[20px] md:justify-around">
          <div className="mt-[30px] [&>h1]:text-2xl lg:[&>h1]:text-5xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
            <h1 className="">Jobify</h1>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              nostrum nobis architecto tempora eveniet explicabo qui, dicta quas
              non veniam aspernatur laudantium minus provident distinctio.
            </p>
            <div className="mt-[40px] [&>button]:uppercase [&>button]:font-semibold [&>button]:py-[12px] [&>button]:px-[25px] [&>button]:rounded-xl flex flex-col sm:flex-row gap-[20px]">
              <button className="bgColor">Go Live </button>
              <button className="border-black border-[2px] ">
                Git Hub Link
              </button>
            </div>
          </div>
          <div className="max-h-[300px] max-w-[500px] mx-auto">
            <img
              src="/jobify1.png"
              alt=""
              className="w-[100%] h-[100%] object-contain shadow-md"
            />
          </div>
        </div>
        <div className="mt-[50px] w-[90%] md:w-[85%] mx-auto flex flex-col-reverse md:flex-row md:gap-[20px] md:justify-around">
          <div className="mt-[30px] [&>h1]:text-3xl lg:[&>h1]:text-5xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
            <h1 className="">GenZ</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              nostrum nobis architecto tempora eveniet explicabo qui, dicta quas
              non veniam aspernatur laudantium minus provident distinctio.
            </p>
            <div className="mt-[40px] [&>button]:uppercase [&>button]:font-semibold [&>button]:py-[12px] [&>button]:px-[25px] [&>button]:rounded-xl flex flex-col sm:flex-row gap-[20px]">
              <button className="bgColor">Go Live </button>
              <button className="border-black border-[2px] ">
                Git Hub Link
              </button>
            </div>
          </div>
          <div className="max-h-[300px] max-w-[500px] mx-auto">
            <img
              src="/genz.png"
              alt=""
              className="w-[100%] h-[100%] object-contain shadow-md"
            />
          </div>
        </div>
        <div className="mt-[50px] w-[90%] md:w-[85%] mx-auto flex flex-col-reverse md:flex-row md:gap-[20px] md:justify-around">
          <div className="mt-[30px] [&>h1]:text-3xl lg:[&>h1]:text-5xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
            <h1 className="">CaffeZilla</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              nostrum nobis architecto tempora eveniet explicabo qui, dicta quas
              non veniam aspernatur laudantium minus provident distinctio.
            </p>
            <div className="mt-[40px] [&>button]:uppercase [&>button]:font-semibold [&>button]:py-[12px] [&>button]:px-[25px] [&>button]:rounded-xl flex flex-col sm:flex-row gap-[20px]">
              <button className="bgColor">Go Live </button>
              <button className="border-black border-[2px] ">
                Git Hub Link
              </button>
            </div>
          </div>
          <div className="max-h-[300px] max-w-[500px] mx-auto">
            <img
              src="/caffeZilla.png"
              alt=""
              className="w-[100%] h-[100%] object-contain shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="mt-[50px] lg:mt-[70px] px-[20px] mx-auto  [&>h1]:text-3xl lg:[&>h1]:text-5xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
        <h1>Additional Projects</h1>
        <div className="md:flex md:gap-[5px] lg:gap-[25px]">
          <div className="md:p-[10px] md:shadow-md mt-[30px]  [&>h1]:text-xl lg:[&>h1]:text-3xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
            <h1 className="">Weather.io 2.0</h1>
            <div className="sm:flex sm:flex-row-reverse text-sm md:text-base gap-[10px] md:flex-col ">
              <div>
                <img
                  src="/weather.png"
                  alt=""
                  className="mt-[20px] sm:max-w-[200px] sm:min-h-[130px] md:min-w-[100%] mx-auto"
                />
              </div>
              <p className="mt-[20px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                laudantium eaque earum magnam! Eveniet rerum eum expedita dicta
                iste repellendus.
              </p>
            </div>
          </div>
          <div className="md:p-[10px] md:shadow-md mt-[30px]   [&>h1]:text-xl lg:[&>h1]:text-3xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
            <h1 className="">Weather.io 1.0</h1>
            <div className="sm:flex sm:flex-row-reverse sm:text-sm gap-[10px] md:flex-col">
              <div>
                <img
                  src="/weatherOld.png"
                  alt=""
                  className="mt-[20px] sm:max-w-[200px] sm:min-h-[130px] md:min-w-[100%] mx-auto"
                />
              </div>
              <p className="mt-[20px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                laudantium eaque earum magnam! Eveniet rerum eum expedita dicta
                iste repellendus.
              </p>
            </div>
          </div>
          <div className="md:p-[10px] md:shadow-md  mt-[30px]  [&>h1]:text-xl lg:[&>h1]:text-3xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
            <h1 className="">Portfolio 1.0</h1>
            <div className="sm:flex sm:flex-row-reverse sm:text-sm gap-[10px] md:flex-col">
              <div>
                <img
                  src="/portfolio.png"
                  alt=""
                  className="mt-[20px] sm:max-w-[200px] sm:min-h-[130px] md:min-w-[100%] mx-auto"
                />
              </div>
              <p className="mt-[20px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                laudantium eaque earum magnam! Eveniet rerum eum expedita dicta
                iste repellendus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  seperator  */}
      <div className="md:flex md:justify-evenly md:gap-[30px] md:items-center md:py-[50px]  w-[100%] mt-[50px] bg-[#0F0F0F] py-[40px]">
        <div className="mt-[30px] md:m-0 flex items-center flex-col font-semibold">
          <h2 className=" uppercase color leading-relaxed lg:leading-[70px] text-2xl lg:text-4xl">
            Projects Done
          </h2>
          <h1 className="text-white md:mt-[10px] text-xl lg:text-2xl">8+</h1>
        </div>
        <div className="mt-[30px] md:m-0 flex items-center flex-col   font-semibold ">
          <h2 className=" uppercase color leading-relaxed lg:leading-[70px] text-2xl lg:text-4xl">
            Experience
          </h2>
          <h1 className="text-white md:mt-[10px] text-xl lg:text-2xl">
            2 Years
          </h1>
        </div>
        <div className="mt-[30px] mb-[10px] md:m-0 flex items-center flex-col   font-semibold ">
          <h2 className=" uppercase color leading-relaxed lg:leading-[70px] text-2xl lg:text-4xl">
            Certifications
          </h2>
          <h1 className="text-white md:mt-[10px] text-xl lg:text-2xl">4</h1>
        </div>
      </div>

      {/* footer and contacts  */}
      <div className="px-[20px] mb-[20px] mt-[50px] md:mt-[70px] [&>h1]:text-2xl lg:[&>h1]:text-5xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
        <h1>Contact Me</h1>
        <div>
          <div className="flex flex-row items-center justify-between">
            <div>
              <h1 className="text-xl lg:text-3xl leading-relaxed lg:leading-[70px] font-light">
                <span className="text-2xl lg:text-5xl leading-relaxed lg:leading-[70px] font-medium">
                  A
                </span>
                rihant
              </h1>
            </div>
            <div className="flex text-sm md:text-base font-light gap-[25px]">
              <span>Home</span>
              <span>Projects</span>
              <span>My Skills</span>
            </div>
          </div>
          <div className="flex flex-col-reverse gap-[20px] justify-between md:flex-row md:gap-[200px]">
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit neque ut dolores inventore veritatis ullam in, ipsa
              saepe quia eveniet.
            </p>
            <div className="flex gap-[20px] mt-[10px]">
              <FaFacebookF
                size={45}
                className="rounded-full border-[2px] border-[pink] p-[10px]"
              />
              <FaLinkedinIn
                size={45}
                className="rounded-full border-[2px] border-[pink] p-[10px]"
              />
              <FaInstagram
                size={45}
                className="rounded-full border-[2px] border-[pink] p-[10px]"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
