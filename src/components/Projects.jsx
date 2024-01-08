const Projects =()=>{
    return(
       <div className="main-container py-16">
        <h1 id="Projects" className="text-4xl font-bold underline text-center">My Projects</h1>

        <div className="project-container space-x-5 px-6 flex mt-12">
            <div className="bg-slate-100 hover:bg-slate-300 text-center p-5 shadow-lg rounded-xl space-y-4">
            <i class="fa-solid fa-blog text-4xl"></i>
                <h1 className="text-4xl">Blogging Website</h1>
                <p>I developed a dynamic J2EE-powered blogging website, where users can creat their profiles and perform CRUD operations on posts.
                This project showcases my expertise in Java Enterprise technologies, demonstrating a seamless integration of back-end functionalities to support dynamic and engaging content creation.
                </p>
           <br />
            <a href="https://github.com/shubhamm025/Techblog" className="text-white px-4 py-2 cursor-pointer  bg-orange-500 rounded-full text-1xl shadow">See code</a>
            </div>

            <div className=" hover:bg-slate-300 shadow-lg bg-slate-100 text-center p-5 rounded-xl space-y-4">
               
                <i class="fa-solid fa-cloud text-4xl"></i>
              
                <h1 className="text-4xl">Java Weather web-app</h1>
                <p>Developed a dynamic weather web application using Java, JSP, and Servlet technologies. Integrated the OpenWeather API to provide real-time weather updates. Users can easily access accurate weather information in a user-friendly interface, 
                    enhancing their experience with seamless navigation and responsive design.</p>
                <br />
                <a href="https://github.com/shubhamm025/MyWeatherApp"className="cursor-pointer text-white px-4 py-2 bg-orange-500 rounded-full text-1xl shadow">See Code</a>
            </div>
            
        </div>
       </div>
    );
}

export default Projects;