import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Project {
    title: string;
    image: string;
    description: string;
    details: string[];
    date: string;
    techStack: string;
    additionalContent: string;
}

const ProjectSection = () => {

    const [currentProject, setCurrentProject] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const projects: Project[] = [
        {
            title: "Real Estate Marketplace",
            image: "/src/assets/NoteWind.mp4",
            description: "A comprehensive real estate platform that connects buyers, sellers, and agents. This application streamlines property searches, listings, and transactions.",
            details: [
                "Advanced search filters for property type, location, and price range",
                "Interactive map integration for visualizing property locations",
                "Secure user authentication and profile management",
                "Real-time chat feature for direct communication between users",
                "Advanced search filters for property type, location, and price range",
                "Interactive map integration for visualizing property locations",
                "Secure user authentication and profile management",
                "Real-time chat feature for direct communication between users",
            ],
            date: "January 2024",
            techStack: "React, Node.js, MongoDB, Express, Google Maps API",
            additionalContent: "This project also includes a detailed dashboard for property management and advanced analytics for market trends."
        },
        {
            title: "StackOverflow Clone",
            image: "/src/app/assets/Stack Over Flow video.mp4",
            description: "A Q&A platform for developers, inspired by StackOverflow. This project aims to create a community-driven space for sharing knowledge and solving coding problems.",
            details: [
                "User reputation system with badges and privileges",
                "Markdown support for questions and answers",
                "Tag-based question categorization and search",
                "Voting system for questions and answers",
                "User reputation system with badges and privileges",
                "Markdown support for questions and answers",
                "Tag-based question categorization and search",
                "Voting system for questions and answers",
            ],
            date: "March 2024",
            techStack: "Vue.js, Django, PostgreSQL, Redis",
            additionalContent: "The clone includes features like user profiles, custom question filters, and a comprehensive admin panel for moderation."
        },
        {
            title: "NoteWind - Note-Taking App",
            image: "/src/app/assets/NoteWind.mp4",
            description: "A sleek and intuitive note-taking application designed for productivity. NoteWind offers a seamless experience for creating, organizing, and sharing notes across devices.",
            details: [
                "Rich text editing with support for images and attachments",
                "Hierarchical notebook and tag organization",
                "Offline support with automatic syncing",
                "Collaborative note editing and sharing features",
                "Rich text editing with support for images and attachments",
                "Hierarchical notebook and tag organization",
                "Offline support with automatic syncing",
                "Collaborative note editing and sharing features",
            ],
            date: "May 2024",
            techStack: "React Native, Firebase, Redux, Quill.js",
            additionalContent: "NoteWind features a powerful search engine, encryption for private notes, and cross-platform synchronization."
        },
        {
            title: "AI-Powered Personal Finance Manager",
            image: "/src/app/assets/Real Estate Video.mp4",
            description: "An intelligent personal finance application that leverages AI to provide insights, predictions, and recommendations for better financial management.",
            details: [
                "Automatic transaction categorization and budget tracking",
                "AI-driven spending insights and savings recommendations",
                "Investment portfolio analysis and optimization",
                "Predictive cash flow modeling and goal setting",
                "Automatic transaction categorization and budget tracking",
                "AI-driven spending insights and savings recommendations",
                "Investment portfolio analysis and optimization",
                "Predictive cash flow modeling and goal setting",
            ],
            date: "July 2024",
            techStack: "React, Python (Flask), TensorFlow, PostgreSQL, Plaid API",
            additionalContent: "The finance manager includes features for tax optimization and personalized financial advice based on user behavior."
        },
    ];

    // Set isClient to true once component mounts
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return; // Only run on client side

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [isClient]);

    useEffect(() => {
        if (!isClient) return; // Only run on client side

        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        if (isMobile) {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            return;
        }

        const container = containerRef.current;
        if (!container) return;

        projectRefs.current.forEach((project, index) => {
            if (project) {
                const content = project.querySelector('.project-content');
                const video = project.querySelector('.project-video');

                ScrollTrigger.create({
                    trigger: project,
                    start: 'top top',
                    end: 'bottom bottom',
                    pin: video,
                    pinSpacing: false,
                    scrub: true,
                });

                if (content) {
                    ScrollTrigger.create({
                        trigger: content,
                        start: 'top top',
                        end: 'bottom bottom',
                        onEnter: () => setCurrentProject(index),
                        onEnterBack: () => setCurrentProject(index),
                    });
                }
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isMobile, isClient]);

    // Don't render anything until we're on the client
    if (!isClient) {
        return null;
    }

    return (
        <>
            <div ref={containerRef} className={`project-container ${isMobile ? 'mobile-layout' : ''}`}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        ref={(el: HTMLDivElement | null) => {
                            projectRefs.current[index] = el;
                        }}
                        className={`project ${isMobile ? 'mobile-project' : 'min-h-screen grid grid-cols-1 lg:grid-cols-7'} relative ${index === currentProject ? 'active' : ''}`}
                    >
                        {/* Video content */}
                        <div className={`flex justify-center items-center project-video ${isMobile ? 'w-full h-[50vh]' : 'col-span-1 lg:col-span-4 h-[50vh] lg:h-screen'} relative overflow-hidden`}>
                            <div className="flex justify-center items-center w-full h-full object-cover absolute top-0 left-0 bg-greenColor">
                                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                                    {/* Mobile MockUp */}
                                    <div className="relative border-gray-600 bg-gray-600 border-[8px] rounded-[20px] h-[350px] w-[200px] shadow-xl hidden sm:block sm:shrink-0">
                                        <div className="w-[60px] h-[8px] bg-gray-600 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                        <div className="h-[30px] w-[2px] bg-gray-600 absolute -start-[10px] top-[60px] rounded-s-lg"></div>
                                        <div className="h-[30px] w-[2px] bg-gray-600 absolute -start-[10px] top-[100px] rounded-s-lg"></div>
                                        <div className="h-[50px] w-[2px] bg-gray-600 absolute -end-[10px] top-[70px] rounded-e-lg"></div>
                                        <div className="rounded-[1rem] overflow-hidden w-[185px] h-[330px] bg-whiteColor">
                                            <video src={project.image} className="w-full h-full" autoPlay loop muted />
                                        </div>
                                    </div>

                                    {/* PC Mockup */}
                                    <div className="relative border-gray-600 bg-gray-600 border-[4px] sm:border-[8px] rounded-lg h-[282px] w-[380px] sm:shrink-0">
                                        <div className="rounded-md overflow-hidden h-full w-full">
                                            <video src={project.image} className="h-full w-full object-cover" autoPlay loop muted />
                                        </div>
                                        {/* Additional Element */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10">
                                            <div className="relative bg-gray-600 rounded-b-sm h-[40px] w-[100px]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project content */}
                        <div className={`project-content ${isMobile ? 'w-full' : 'col-span-1 lg:col-span-3'} p-4 lg:p-8 overflow-y-auto`}>
                            <h2 className="font-Agrandir text-xl md:text-2xl lg:text-3xl mb-8 mt-8">{project.title}</h2>
                            <p className="font-Agrandir text-md md:text-lg lg:text-lg mb-8">{project.description}</p>
                            <ul className="font-Agrandir list-disc list-inside text-md md:text-lg lg:text-lg mb-8">
                                {project.details.map((detail, i) => (
                                    <li key={i} className="font-Agrandir mb-2">{detail}</li>
                                ))}
                            </ul>
                            <p className='font-Agrandir text-md md:text-lg lg:text-lg mt-5 mb-5'><strong>Date:</strong> {project.date}</p>
                            <p className='font-Agrandir text-md md:text-lg lg:text-lg mb-10'><strong>Tech Stack:</strong> {project.techStack}</p>

                            <div className="font-Agrandir shadow-2xl py-20 bg-greenColor rounded-tr-[40px] rounded-bl-[40px] mb-8 flex items-center justify-center">
                                <p className="text-md md:text-lg lg:text-lg text-center">&quot; {project.additionalContent} &quot;</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProjectSection