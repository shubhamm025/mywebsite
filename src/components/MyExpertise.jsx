import bb from "../assets/banner_wallpaper.svg";
const MyExpertise=()=>{
    return(
      <div>
        <h1 id="Skills" className="mb-16 text-4xl font-bold underline text-center">My Expertise</h1>
        <div 
        style={{
            backgroundImage : `url(${bb})`,
            backgroundSize: "cover"
        }}  
        className=" main-cont py-10 h- flex items-center">
             

            <div className="mb-5 mt-4   w-full flex justify-center bannerStyle">
               <div className="w-2/3">
               
                <h1 className="mt-2 text-4xl semi-bold">I Love These Technologies</h1>
                
                <p className="mt-2 ">A dedicated tech enthusiast and developer. With a strong foundation in Java.  Let's connect and embark on a journey of innovation and collaboration. 
                Reach out and let's create something extraordinary together!</p>
               
              <br></br>
              {/* <a className="hover:underline font-bold" href="mailto:shubhammotwani2511@gmail.com">Email: shubhammotwani2511@gmail.com</a> */}
                <a href="mailto:shubhammotwani2511@gmail.com" className="px-4  py-2 bg-orange-500 rounded-full text-1xl shadow-lg ">Hire me</a>
               </div>
            </div>
            <div className=" w-full flex justify-center h-fit space-x-3 flex-wrap ">
              
              <a className="bg-slate-100 w-fit px-3 mt-1 py-2 rounded-full hover:bg-orange-400 cursor-pointer">Core java</a>
              <a className="bg-slate-100 w-fit px-3 mt-1 py-2 rounded-full hover:bg-orange-400 cursor-pointer">React.js</a>
              <a className="bg-slate-100 w-fit px-3 mt-1 py-2 rounded-full hover:bg-orange-400 cursor-pointer">JavaScript</a>
              <a className="bg-slate-100 w-fit px-3 mt-1 py-2 rounded-full hover:bg-orange-400 cursor-pointer">J2EE</a>
              <a className="bg-slate-100 w-fit px-3 mt-1 py-2 rounded-full hover:bg-orange-400 cursor-pointer">Tailwind CSS</a>
              <a className="bg-slate-100 w-fit px-3 mt-1 py-2 rounded-full hover:bg-orange-400 cursor-pointer">JDBC</a>
              <a className="bg-slate-100 w-fit px-3 mt-1 py-2 rounded-full hover:bg-orange-400 cursor-pointer">MySQL</a>
              <a className="bg-slate-100 w-fit px-3 mt-1 py-2 rounded-full hover:bg-orange-400 cursor-pointer">HTML</a>
              <a className="bg-slate-100 w-fit px-3 mt-1 py-2 rounded-full hover:bg-orange-400 cursor-pointer">CSS</a>
             
            </div>
        </div>
        </div>
   
    );
};

export default MyExpertise;