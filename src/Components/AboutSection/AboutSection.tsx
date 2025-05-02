const AboutSection = () => {

    return (
        <>
            <div className="px-4 py-10 md:py-28 max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-stretch w-full md:h-screen bg-whiteColor">
                {/* Left Section */}
                <div className="bg-whiteColor w-full md:w-1/2 lg:w-1/3 mr-0 md:mr-6 flex justify-center items-center mb-4 md:mb-0 lg:mb-0">
                    <div className="border-4 border-greenColor rounded-tr-[100px] transition-all duration-500 hover:rounded-tr-[0px] h-full w-full p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                        <div className="flex flex-col items-center justify-center text-center">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-Agrandir mb-2 md:mb-4 lg:mb-6">
                                About Me
                            </h1>
                            <p className="font-Agrandir md:text-lg lg:text-xl text-gray-700 mt-2 md:mt-4 mb-2 md:mb-4">
                                Your digital products foster greater user engagement and mark
                                satisfaction with our intuitive, user-centric and scalable designs.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mb-2 md:mb-8">
                            {[1, 2, 3, 4, 5].map(num => (
                                <span key={num} className="font-Agrandir bg-greenColor rounded-full px-3 py-1 text-whiteColor text-sm md:text-base">{num}</span>
                            ))}
                        </div>
                        <button className="bg-greenColor rounded-tr-[20px] text-whiteColor font-Agrandir py-2 px-4 shadow-2xl text-sm md:text-base lg:text-lg transition-all duration-300 hover:rounded-tr-[0px] hover:scale-105">
                            View Resume
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col gap-4">
                    {/* Existing Right Section Content */}
                    <div className="bg-blackColor p-4 md:p-6 lg:p-8 flex-1 flex flex-col justify-center items-center transition-all duration-500 hover:rounded-tr-[100px]">
                        <div className="text-whiteColor space-y-4 md:space-y-6 lg:space-y-8">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-Agrandir text-greenColor">
                                A Bit About me . . !
                            </h1>
                            <p className="font-Agrandir text-base md:text-lg lg:text-xl text-gray-300">
                                Aspiring Full Stack Developer specializing in the MERN stack, currently pursuing a
                                Master of Computer Applications (MCA). Passionate about leveraging technology to solve
                                real-world problems and eager to contribute to innovative projects. Strong foundation in
                                software development principles and committed to continuous learning. Open to collaboration
                                and new opportunities in the tech industry.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutSection