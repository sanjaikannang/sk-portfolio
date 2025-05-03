const ContactSection = () => {
    return (
        <>
            <div className="bg-whiteColor text-blackColor border-b-[15px] border-r-4 border-l-4 border-greenColor rounded-[35px] p-6 shadow-2xl">
                <h3 className="font-Agrandir text-2xl sm:text-4xl mt-4 mb-8 text-center">Let&apos;s know you more!</h3>
                <p className="font-Agrandir text-lg sm:text-md mb-10 text-center">Fill this form so we can know you as well as your requirements.</p>
                <div className="max-w-6xl mx-auto">
                    <form className="space-y-12 max-w-xl mx-auto text-blackColor font-Agrandir">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type='text'
                                placeholder='Name'
                                className="w-full border-b py-3 text-md focus:outline-none focus:border-none"
                            />
                            <input
                                type='text'
                                placeholder='Company Name'
                                className="w-full border-b py-3 text-md focus:outline-none focus:border-none"
                            />
                            <input
                                type='email'
                                placeholder='E-Mail'
                                className="w-full border-b py-3 text-md focus:outline-none focus:border-none"
                            />
                            <input
                                type='text'
                                placeholder='Phone No.'
                                className="w-full border-b py-3 text-md focus:outline-none focus:border-none"
                            />
                        </div>
                        <textarea
                            placeholder='Share Your Requirement..'
                            className="w-full border-b text-md pt-3 focus:outline-none focus:border-none"
                        ></textarea>
                        <button
                            type="button"
                            className="text-lg w-40 bg-blueColor rounded-tr-[20px] text-whiteColor font-Agrandir py-3 px-5 shadow-2xl transition-all duration-300 hover:rounded-tr-[0px] hover:scale-105"
                        >
                            Submit
                            {/* <img
                                className='h-6 w-4 inline-block ml-4'
                                src={RightArrow}
                                alt="Right Arrow"
                            /> */}
                        </button>
                    </form>
                </div>
            </div>

            {/* Icons Section */}
            {/* <div className="flex justify-around items-center mt-10 font-Agrandir">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="text-center text-2xl flex items-center justify-center hover:text-[#00e2c5]">
                        <Mail strokeWidth={1} className="mr-4" />
                        sanjaikannang@gmail.com
                    </button>
                    <button className="text-center text-2xl flex items-center justify-center hover:text-[#00e2c5]">
                        <Phone strokeWidth={1} className="mr-4" />
                        +91 93457 25595
                    </button>
                </div>
            </div> */}
        </>
    )
}

export default ContactSection