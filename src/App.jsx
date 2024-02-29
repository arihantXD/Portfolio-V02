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
import { useRef, useState } from "react";

import "./App.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function App() {
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(true);
  const [add, setAdd] = useState(true);
  const [formSubmit, setFormSubmit] = useState(false);
  const form = useRef();
  const sendMessage = (e) => {
    e.preventDefault();
    setFormSubmit(() => true);
    const name = form.current.from_name.value;
    const email = form.current.reply_to.value;
    const message = form.current.message.value;
    if (!name || !email || !message) {
      toast.error("Please fill all the details");
    }
    form.current.from_name.value = name.charAt(0).toUpperCase() + name.slice(1);
    const result = emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    toast.promise(result, {
      loading: "Sending the message.",
      success: "Hi, I got it. I'll reach out soon ✅.",
      error: "Message not sent.",
    });
  };

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
        <span className="logo text-3xl md:text-4xl text-[#FB6195]">AK</span>
        <div className="flex text-sm md:text-xl gap-[30px]">
          <span>
            <a href="#about-me">About Me</a>
          </span>
          <span>
            <a href="#projects">Projects</a>
          </span>
          <span>
            <a href="#contact-me">Contact Me</a>
          </span>
        </div>
      </div>

      {/* main content style !!!edit */}
      <div
        id="about-me"
        className="flex items-center min-h-[650px] md:min-h-[800px] px-[20px] "
      >
        <div className="w-[100%] [&>h1]:text-2xl lg:[&>h1]:text-5xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
          <h1>
            Hello, <span className="color">I'm Arihant,</span>
          </h1>
          <h1>a MERN Stack Developer</h1>
          <h1>living in Nagpur</h1>
          <p className="mt-[50px]">
            👋 Hey! I am a MERN Stack Developer. I love working on exciting
            projects and building modern and minimalistic web designs🚀.
          </p>
          <div className="mt-[70px] [&>button]:uppercase [&>button]:font-semibold [&>button]:py-[12px] [&>button]:px-[25px] [&>button]:rounded-xl flex flex-col sm:flex-row gap-[20px]">
            <button className="bgColor">
              <a href="/resume.docx">Download Resume</a>
            </button>
            <button className="border-black border-[2px] ">
              <a href="#projects">view all work</a>
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
      <div className="mt-[50px] h-[700px]  px-[20px] min-h-[400px] flex flex-col gap-[50px] md:flex-row md:items-center justify-center">
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
            Proficient in the MERN stack, I specialize in React for dynamic
            front-end, Node.js/Express.js for server-side efficiency, and
            MongoDB for scalable databases.
          </p>
          <div className="my-[30px] [&>button]:uppercase [&>button]:font-semibold [&>button]:py-[12px] [&>button]:px-[25px] [&>button]:rounded-xl flex flex-col sm:flex-row gap-[20px]">
            <button className="bgColor">
              <a href="#contact-me">Get in touch</a>
            </button>
          </div>
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
          <div className="mt-[20px] lg:mt-[40px]">
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
      <div
        id="projects"
        className={`${
          !front && !back
            ? "px-[20px] mt-[140px] md:mt-[30px]"
            : "px-[20px] mt-[30px]"
        }`}
      >
        <div className="[&>h1]:text-3xl lg:[&>h1]:text-5xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
          <h1>My Projects</h1>
        </div>
        <div className="mt-[50px] w-[90%] md:w-[85%] mx-auto flex flex-col-reverse md:flex-row md:gap-[20px] md:justify-around">
          <div className="mt-[30px] [&>h1]:text-2xl lg:[&>h1]:text-5xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
            <h1 className="">Jobify</h1>
            <p className="">
              "Jobify" - my project designed for streamlined job application
              tracking. Users can effortlessly categorize job roles tech or non
              - tech, and classify job type, making it easy to organize and
              monitor their job search progress, whether it's for full-time,
              part-time, or any other opportunity.
            </p>
            <div className="mt-[30px] [&>button]:uppercase [&>button]:font-semibold [&>button]:py-[12px] [&>button]:px-[25px] [&>button]:rounded-xl flex flex-col sm:flex-row gap-[20px]">
              <button className="bgColor">
                <a target="blank" href="https://jobify-sdkn.onrender.com/">
                  Go Live
                </a>
              </button>
              <button className="border-black border-[2px] ">
                <a target="blank" href="https://github.com/arihantXD/Jobify">
                  Git Hub Link
                </a>
              </button>
            </div>
          </div>
          <div className="max-h-[300px] max-w-[500px] mx-auto ">
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
              "GenZ" - a full-stack e-commerce store for Gen Z clothing brand.
              Users can seamlessly register, log in, add items to their cart,
              and simulate the purchase process. GenZ offers a dummy flow from
              registration to purchase, providing a user-friendly experience for
              exploring and interacting with the project.
            </p>
            <div className="mt-[30px] [&>button]:uppercase [&>button]:font-semibold [&>button]:py-[12px] [&>button]:px-[25px] [&>button]:rounded-xl flex flex-col sm:flex-row gap-[20px]">
              <button className="bgColor">
                <a target="blank" href="https://gen-z-five.vercel.app/">
                  Go Live
                </a>
              </button>
              <button className="border-black border-[2px] ">
                <a target="blank" href="https://github.com/arihantXD/GenZ">
                  Git HUb link
                </a>
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
              "Caffezilla" - a dynamic project where users can register, log in,
              and share their cafe experiences through reviews complete with
              photos. Enhancing the social aspect, users can track their
              location on an integrated map, allowing others to explore and
              contribute reviews for the cafes they've visited.
            </p>
            <div className="mt-[30px] [&>button]:uppercase [&>button]:font-semibold [&>button]:py-[12px] [&>button]:px-[25px] [&>button]:rounded-xl flex flex-col sm:flex-row gap-[20px]">
              <button className="bgColor">Go Live </button>
              <button className="border-black border-[2px] ">
                <a
                  target="blank"
                  href="https://github.com/arihantXD/CaffeZilla"
                >
                  Git hub link
                </a>
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
          <div className="md:max-w-[33%] md:p-[10px] md:shadow-md mt-[30px]  [&>h1]:text-xl lg:[&>h1]:text-3xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
            <h1 className="">Weather.io 2.0</h1>
            <div className="sm:flex sm:flex-row-reverse text-sm md:text-base gap-[10px] md:flex-col ">
              <div>
                <a target="blank" href="https://weather-io2.vercel.app/">
                  <img
                    src="/weather.png"
                    alt=""
                    className="mt-[20px] sm:max-w-[200px] sm:min-h-[130px] md:min-w-[100%] mx-auto"
                  />
                </a>
              </div>
              <p className="mt-[20px] text-sm">
                A sleek user-friendly weather application crafted with React.
                Get real-time weather information for any location worldwide,
                including current conditions and a 5-day forecast with an
                intuitive graph that visualizes temperature trends.
              </p>
            </div>
          </div>
          <div className="md:max-w-[33%] md:p-[10px] md:shadow-md mt-[30px]   [&>h1]:text-xl lg:[&>h1]:text-3xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
            <h1 className="">Weather.io 1.0</h1>
            <div className=" sm:flex sm:flex-row-reverse sm:text-sm gap-[10px] md:flex-col">
              <div>
                <a target="blank" href="https://weather-io-kappa.vercel.app/">
                  <img
                    src="/weatherOld.png"
                    alt=""
                    className="mt-[20px] sm:max-w-[200px] sm:min-h-[130px] md:min-w-[100%] mx-auto"
                  />
                </a>
              </div>
              <p className="mt-[20px] text-sm">
                An environmentally conscious weather app crafted using vanilla
                JavaScript, HTML, and CSS. This app focuses on air quality. Get
                real-time data on pollutants, sunrise, and sunset times.
              </p>
            </div>
          </div>
          <div className="md:max-w-[33%] md:p-[10px] md:shadow-md  mt-[30px]  [&>h1]:text-xl lg:[&>h1]:text-3xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
            <h1 className="">Portfolio 1.0</h1>
            <div className="sm:flex sm:flex-row-reverse sm:text-sm gap-[10px] md:flex-col">
              <div>
                <a
                  target="blank"
                  href="https://portfolio-website-olive-rho.vercel.app/"
                >
                  <img
                    src="/portfolio.png"
                    alt=""
                    className="mt-[20px] sm:max-w-[200px] sm:min-h-[130px] md:min-w-[100%] mx-auto"
                  />
                </a>
              </div>
              <p className="mt-[20px] text-sm">
                A dynamic showcase of my skills, crafted using HTML, CSS, and
                JavaScript. Dive into my projects, and do checkout the magic of
                GSAP animations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  seperator  */}
      <div className="md:flex md:justify-evenly md:gap-[30px] md:items-center md:py-[30px]  w-[100%] mt-[50px] bg-[#0F0F0F] py-[40px]">
        <div className="mt-[30px] md:m-0 flex items-center flex-col font-semibold">
          <h2 className=" uppercase color leading-relaxed lg:leading-[70px] text-xl lg:text-3xl">
            Projects Done
          </h2>
          <h1 className="text-white md:mt-[10px] text-lg lg:text-xl">8+</h1>
        </div>
        <div className="mt-[30px] md:m-0 flex items-center flex-col   font-semibold ">
          <h2 className=" uppercase color leading-relaxed lg:leading-[70px] text-xl lg:text-3xl">
            Experience
          </h2>
          <h1 className="text-white md:mt-[10px] text-lg lg:text-xl">
            2 Years
          </h1>
        </div>
        <div className="mt-[30px] mb-[10px] md:m-0 flex items-center flex-col   font-semibold ">
          <h2 className=" uppercase color leading-relaxed lg:leading-[70px] text-lg lg:text-3xl">
            Certifications
          </h2>
          <h1 className="text-white md:mt-[10px] text-lg lg:text-xl">4</h1>
        </div>
      </div>

      {/* footer and contacts  */}
      <div className="px-[20px] mb-[20px] mt-[50px] md:mt-[70px] [&>h1]:text-3xl lg:[&>h1]:text-5xl [&>h1]:leading-relaxed lg:[&>h1]:leading-[70px] [&>h1]:font-semibold">
        <h1>Contact Me</h1>
        <div>
          <div className="">
            <h1 className="text-xl lg:text-3xl leading-relaxed l7g:leading-[70px] font-light">
              <span className="text-2xl md:text-4xl leading-relaxed lg:leading-[70px] font-medium">
                A
              </span>
              rihant
            </h1>
          </div>
          <div className="mt-[20px] py-[20px] flex flex-col items-center max-w-[800px] mx-auto shadow-sm border-t-[2px] border-[pink]">
            <span className="text-lg md:text-3xl leading-relaxed lg:leading-[70px] font-light text-center">
              SEND ME A MESSAGE
            </span>
            <div
              className="min-w-[100%] mt-[5px] border-b-[2px] border-[pink] "
              id="contact-me"
            ></div>
            <form ref={form} onSubmit={sendMessage}>
              <input
                className="border-b-[2px] border-[#ddd] mt-[25px] w-[97%] max-w-[600px] px-[2px] text-[#676767] outline-none"
                type="text"
                name="from_name"
                required
                placeholder="Ex. Arihant Kamde"
              />
              <input
                className="border-b-[2px] text-[#676767] border-[#ddd] mt-[25px] w-[97%] px-[2px] max-w-[600px] placeholder:text-[#] outline-none"
                type="email"
                name="reply_to"
                required
                placeholder="Ex. kamdearihant@gmail.com"
              />
              <textarea
                className="outline-none text-[#676767] mt-[25px] p-[2px] border-[2px] min-h-[150px] max-h-[150px] w-[97%] max-w-[600px]"
                name="message"
                placeholder="Ex. Hi Arihant! you are the best React Js Developer."
                required
              ></textarea>
              <div className="mt-[30px] [&>button]:uppercase [&>button]:font-bold [&>button]:py-[12px] [&>button]:px-[25px] [&>button]:rounded-xl flex justify-center  gap-[20px] ">
                <button
                  type="submit"
                  disabled={formSubmit}
                  value="Send"
                  className={`bg-[pink] hover:bg-[#ff7d92] transition w-[250px] text-[#333] ${
                    formSubmit
                      ? "bg-[#ff7d92] transition"
                      : "bg-[pink] transition"
                  }`}
                >
                  {formSubmit ? "Sending Message" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
          <div className="mt-[30px] flex flex-col-reverse   gap-[20px]  md:flex-row md:items-center md:gap-[200px]">
            <p className="text-sm font-light">
              Reach out through the form or connect via the links below. Excited
              to hear from you - whether it's about collaboration or just a
              friendly chat. Thanks for stopping by!
            </p>
            <div className="flex gap-[20px] mt-[10px]">
              <a target="blank" href="https://www.facebook.com/01arihant/">
                <FaFacebookF
                  size={35}
                  className="rounded-full border-[2px] border-[pink] p-[10px]"
                />
              </a>

              <a
                target="blank"
                href="https://www.linkedin.com/in/arihant-kamde-2976451b5/"
              >
                <FaLinkedinIn
                  size={35}
                  className="rounded-full border-[2px] border-[pink] p-[10px]"
                />
              </a>
              <a target="blank" href="https://www.instagram.com/arihant0.1/">
                <FaInstagram
                  size={35}
                  className="rounded-full border-[2px] border-[pink] p-[10px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
