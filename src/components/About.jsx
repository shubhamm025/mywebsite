import bi from "../assets/mypic.jpg";
const About=()=>{
    return(
        <div className="main-container ">
       <h1 id="About" className="text-center text-4xl underline font-bold py-16">About Me</h1>

       <div className="flex ">
            <div className=" w-full flex justify-center ">
                <img className="  rounded-full h-80 w-70  shadow-lg" src={bi} alt="Pic Loading"  />
            </div>
            
            <div className="w-full flex justify-center">
            <div className="space-y-5 w-2/3">
                <h1 className="text-4xl font-semibold  w-5/6">Eternal Optimist and Lifelong Learne.</h1>

                <p>A passionate learner with a positive mindset. Beyond coding, my heart beats for cricket, finding joy in coding, cricket, and the rhythm of music. Embracing challenges as opportunities, I believe in constant growth. 
                    Let's connect and share the enthusiasm for learning, positivity, and the beautiful game of cricket!</p>

                     {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, delec
                    tus asperiores. Expedita, perspiciatis corrupti sequi
                     beatae accusantium libero, vero harum dolores vel qu
                     ia nulla maxime facere? Dolore illum fugiat dicta.</p> */}
                  <div className="mt-4">
                  {/* <a href="hire-me" className="px-4 py-2 bg-orange-500 rounded-full text-1xl shadow text-white">Contact</a> */}
                  </div>
                     </div>
            </div>
       </div>

       </div>

       
    );
};

export default About;