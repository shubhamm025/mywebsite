const Header = ()=>{
    return (
        <>
    <div className=" h-20 border main flex justify-between items-center px-16 bg-gray-100" >
        <div>
            <h1 className="text-2xl font-bold">Shubham Motwani</h1>
        </div>

        <div className="space-x-6" >
            <a href="" className="hover:text-orange-400">
                Home</a>
            <a href="#About" className="hover:text-orange-400">
                About</a>
            <a href="#Skills"className="hover:text-orange-400">
                Skills</a>
            <a href="#Projects"className="hover:text-orange-400">
                Projects</a>
            {/* <a href="#contact"className="hover:text-orange-400"> */}
                {/* Contact</a> */}
        </div>
        {/* <div>
            <a href="hire-me" className="text-white px-4 py-2 bg-orange-500 rounded-full text-1xl shadow">Hire me</a>
        </div> */}
    </div>

     </>
    );
    
};

export default Header;

