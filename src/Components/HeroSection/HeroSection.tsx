import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BgHexagonTop from '../../UI/Hero/BgHexagonTop';
import BgHexagonBottom from '../../UI/Hero/BgHexagonBottom';
import DownArrow from '../../assets/SVG/downarrow.svg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {

    const roles = [
        "FrontEnd Developer",
        "BackEnd Developer",
        "Full Stack Developer",
        "React Developer",
        "MEAN Stack Developer",
        "MERN Stack Developer"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const rolesRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [roles.length]);

    useEffect(() => {
        const hero = heroRef.current;
        const title = titleRef.current;
        const rolesElement = rolesRef.current;
        const buttons = buttonsRef.current;

        gsap.set([title, rolesElement, buttons], { scale: 0.8, opacity: 0 });

        ScrollTrigger.create({
            trigger: hero,
            start: "top center",
            end: "bottom center",
            scrub: true,
            onEnter: () => {
                gsap.to([title, rolesElement, buttons], {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.5,
                    ease: "power3.out"
                });
            },
            onLeaveBack: () => {
                gsap.to([title, rolesElement, buttons], {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.in"
                });
            }
        });
    }, []);

    return (
        <>
            <div ref={heroRef} className="relative bg-whiteColor md:h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Background Hexagon Top */}
                <div className="absolute top-0 left-0 right-0 z-0">
                    <BgHexagonTop />
                </div>

                <div className="relative z-10 md:mt-0 md:mb-0 mt-20 mb-5">
                    <div className="max-w-2xl md:mx-auto text-center lg:max-w-7xl mb-0">
                        <h1 ref={titleRef} className="font-Agrandir text-3xl md:text-5xl lg:text-8xl mb-12"> Hi, I'm Sanjai Kannan G 👋</h1>

                        <div ref={rolesRef} className="relative flex justify-center items-center h-16 mb-12">
                            {roles.map((role, index) => (
                                <div
                                    key={index}
                                    className={`absolute transition-opacity duration-700 ease-in-out transform ${index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-10 translate-y-5'}`}
                                    style={{
                                        zIndex: index === currentIndex ? 10 : 1,
                                    }}
                                >
                                    <div className="relative bg-whiteColor text-blackColor py-1 px-8 inline-block shadow-2xl border border-gray-300 mb-4">
                                        <p className="text-xl md:text-3xl font-Agrandir px-10 py-3">{role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div ref={buttonsRef} className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 mb-8">
                            <button className="bg-blueColor rounded-tr-[20px] text-whiteColor font-Agrandir py-3 px-5 shadow-2xl mb-2 sm:mb-0 transition-all duration-300 hover:rounded-tr-[0px] hover:scale-105">
                                View Resume
                                {/* <img
                                    src={RightArrow}
                                    width={16}
                                    height={24}
                                    alt="Right Arrow"
                                    className="inline-block ml-2"
                                /> */}
                            </button>
                            <button className="bg-blueColor rounded-tr-[20px] text-whiteColor font-Agrandir py-3 px-5 shadow-2xl transition-all duration-300 hover:rounded-tr-[0px] hover:scale-105">
                                View Portfolio
                                {/* <img
                                    src={RightArrow}
                                    width={16}
                                    height={24}
                                    alt="Right Arrow"
                                    className="inline-block ml-2"
                                /> */}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Background Hexagon Bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-0">
                    <BgHexagonBottom />
                </div>

                <div className="absolute bottom-3 w-full justify-center hidden md:flex z-20">
                    <img
                        src={DownArrow}
                        width={32}
                        height={32}
                        alt="Down Arrow"
                        className="hover:scale-110 animate-bounce"
                    />
                </div>
            </div>
        </>
    );
};

export default HeroSection;