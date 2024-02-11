import { HiSparkles } from "react-icons/hi2";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

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
      <div className="flex text-[white] justify-between items-center bg-[#0F0F0F] rounded-t-xl px-[20px] py-[10px] h-[90px]">
        <span className="logo text-4xl text-[#FB6195]">AK</span>
        <div className="flex gap-[30px]">
          <span>About Me</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </div>

      {/* main content style !!!edit */}
      <div className="min-h-[500px] flex items-center md:min-h-[830px] px-[20px] ">
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
      <div className="mt-[80px] h-[600px] px-[20px] min-h-[400px] flex flex-col gap-[50px] md:flex-row md:items-center justify-center">
        <div className="w-[100%] [&>h1]:text-2xl lg:[&>h1]:text-5xl lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
          <h1>Skills in my arsenal</h1>
          <div className="mt-[40px] p-[10px] flex gap-[25px] lg:gap-[40px] ">
            <div className="flex flex-col items-center text-sm lg:text-xl text-green-600">
              <DiMongodb className="text-[20px] lg:text-[40px]" />
              <span>Mongo DB</span>
            </div>
            <div className="flex flex-col items-center text-sm lg:text-xl text-orange-700">
              <SiExpress className="text-[20px] lg:text-[40px]" />
              <span>Express Js</span>
            </div>
            <div className="flex flex-col items-center text-sm lg:text-xl text-blue-400">
              <FaReact className="text-[20px] lg:text-[40px]" />
              <span>React Js</span>
            </div>
            <div className="flex flex-col items-center text-sm lg:text-xl text-green-400">
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
        <div className=" min-w-[45%] flex flex-col [&>div]:mb-[10px]">
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
      <div className="px-[20px] mt-[80px] h-[600px] items-center">
        <div className="[&>h1]:text-2xl lg:[&>h1]:text-5xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
          <h1>My Projects</h1>
        </div>
        <div className="mt-[20px] flex flex-col-reverse md:flex-row">
          <div className="[&>h1]:text-2xl lg:[&>h1]:text-4xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
            <h1 className="text-center">Jobify</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              nostrum nobis architecto tempora eveniet explicabo qui, dicta quas
              non veniam aspernatur laudantium minus provident distinctio.
            </p>
            <div className="mt-[40px] [&>button]:uppercase [&>button]:font-semibold [&>button]:py-[12px] [&>button]:px-[25px] [&>button]:rounded-xl flex flex-col sm:flex-row gap-[20px]">
              <button className="bgColor">Get in touch </button>
              <button className="border-black border-[2px] ">
                view all work
              </button>
            </div>
          </div>
          <div className="min-h-[300px] min-w-[300px] border-[2px] border-[black] rounded-md aspect-video object-cover">
            <img src="/jobify.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
