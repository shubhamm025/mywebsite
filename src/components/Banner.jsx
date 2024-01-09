import { useEffect, useRef } from "react";
import cv from "../assets/cv.pdf";
import bi from "../assets/mypic2.jpg";
import bb from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
const Banner =()=>{
    const el=useRef(null);
    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ["Frontend Developer", "Java Developer", "Full Stack Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 150,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop:true
          });
      
          // Destropying
          return () => {
            typed.destroy();
          };
    },[])
    return (
        <div 
        style={{
            backgroundImage : `url(${bb})`,
            backgroundSize: "cover"
        }}  
        className=" main-cont h- flex items-center">
             

            <div className="mb-5 mt-4 text-white  w-full flex justify-center bannerStyle">
               <div className="w-2/3">
               <h3 className="text-3xl font-semibold">Hi, I am</h3>
                <h1 className="mt-2 text-5xl semi-bold">Shubham Motwani</h1>
                <h2 className="mt-2 text-3xl">I am <span ref={el}></span></h2>
                <p className="mt-2 ">A dynamic tech enthusiast specializing in Java and web development.
                I bring a strong foundation in Object-Oriented Programming (OOPs) concepts, ensuring robust and scalable solutions. With
                 a keen learner attitude, I embrace challenges and stay committed to continuous improvement.</p>
               <br />
               <div className="IconContainer mt-1 flex space-x-5">
              <a href="https://www.instagram.com/shubhammotwaniii/" className=" hover:bg-orange-500 cursor-pointer px-3 py-4 bg-slate-800 h-10 w-10 rounded-full flex justify-center items-center">
              <i class="fa-brands fa-instagram text-2xl "></i>
              </a>
             
              <a href="https://www.linkedin.com/in/shubham-motwani-266022242/" className=" hover:bg-orange-500 cursor-pointer  px-3 py-4 bg-slate-800 h-10 w-10 rounded-full flex justify-center items-center">
               <i class="fa-brands fa-linkedin  text-2xl "></i>
            </a>
               <a href="https://github.com/shubhamm025" className=" hover:bg-orange-500 cursor-pointer px-3 py-4 bg-slate-800 h-10 w-10 rounded-full flex justify-center items-center">
               <i class="fa-brands fa-github  text-2xl "></i>
               </a>
               <a className=" hover:bg-orange-500 cursor-pointer  px-3 py-4 bg-slate-800 h-10 w-10 rounded-full flex justify-center items-center">
               <i class="fa-brands fa-x-twitter  text-2xl "></i>
               </a>
               </div>
                <br />
                {/* <a href="docs\assets\cv-9WVMimxE.pdf" download="docs\assets\cv-9WVMimxE.pdf" className="px-4 py-2 bg-orange-500 rounded-full text-1xl shadow-lg ">My Resume</a> */}
               </div>
            </div>
            <div className=" w-full flex justify-center ">
                <img className="  rounded-full h-80 w-70  shadow-lg" src={bi} alt="Pic Loading"  />
            </div>
        </div>
    );
};

export default Banner;