import { House, SquareUserRound, CodeXml, BriefcaseBusiness, GraduationCap, FolderOpen, PhoneIncoming, LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
    name: string;
    icon: LucideIcon;
    sectionId: string;
}


const Navbar = () => {

    const [activeNavItem, setActiveNavItem] = useState<string>('Home');
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const topnavItems: NavItem[] = [
        { name: 'Home', icon: House, sectionId: 'home' },
        { name: 'About', icon: SquareUserRound, sectionId: 'about' },
        { name: 'Skills', icon: CodeXml, sectionId: 'skills' },
        { name: 'Experience', icon: BriefcaseBusiness, sectionId: 'experience' },
        { name: 'Education', icon: GraduationCap, sectionId: 'education' },
        { name: 'Projects', icon: FolderOpen, sectionId: 'projects' },
        { name: 'Contact', icon: PhoneIncoming, sectionId: 'contact' },
    ];

    const navItems: NavItem[] = [
        { name: 'About', icon: SquareUserRound, sectionId: 'about' },
        { name: 'Skills', icon: CodeXml, sectionId: 'skills' },
        { name: 'Experience', icon: BriefcaseBusiness, sectionId: 'experience' },
        { name: 'Home', icon: House, sectionId: 'home' },
        { name: 'Education', icon: GraduationCap, sectionId: 'education' },
        { name: 'Projects', icon: FolderOpen, sectionId: 'projects' },
        { name: 'Contact', icon: PhoneIncoming, sectionId: 'contact' },
    ];

    const handleClick = (name: string, sectionId: string) => {
        setActiveNavItem(name);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Top NavBar */}
            <div className="flex justify-center items-center p-4">
                <div className='hidden lg:flex bg-whiteColor p-2 rounded-full px-14 py-4 shadow-lg'>
                    <div className="flex items-center">
                        {topnavItems.map((item) => (
                            <button
                                key={item.name}
                                className={`text-lg font-Agrandir relative group transition-all duration-300 ease-in-out
                      ${hoveredItem === item.name ? 'text-greenColor scale-110 px-7' : 'px-5'}
                      ${hoveredItem && hoveredItem !== item.name ? 'opacity-50' : 'opacity-100'}
                      hover:text-greenColor`}
                                onClick={() => handleClick(item.name, item.sectionId)}
                                onMouseEnter={() => setHoveredItem(item.name)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <span className="relative z-10 whitespace-nowrap">{item.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom NavBar for small and medium screens */}
            <div className="fixed bottom-0 right-0 left-0 lg:hidden block">
                <div className="relative h-16">
                    {/* Custom curved background using SVG */}

                    <div className="absolute bottom-0 w-full h-16 bg-blueColor rounded-tr-2xl rounded-tl-2xl"></div>

                    {/* Center button */}
                    <div
                        className="absolute top-0 left-1/2 w-16 h-16 -mt-8 -ml-9 bg-blueColor rounded-full flex items-center justify-center"
                    >
                        <div className="w-12 h-12 bg-whiteColor rounded-full flex items-center justify-center">
                            {(() => {
                                const ActiveIcon = navItems.find(item => item.name === activeNavItem)?.icon;
                                return ActiveIcon ? <ActiveIcon className="text-blueColor" size={25} /> : null;
                            })()}
                        </div>
                    </div>

                    {/* Navigation items */}
                    <div className="flex items-center justify-evenly h-full relative z-10">
                        {navItems.map((item, index) => (
                            <button
                                key={item.name}
                                onClick={() => handleClick(item.name, item.sectionId)}
                                className={`flex flex-col items-center justify-center ${index === Math.floor(navItems.length / 2) ? 'opacity-0' : ''
                                    } ${activeNavItem === item.name ? 'text-whiteColor' : 'text-gray-300'}`}
                            >
                                <item.icon size={20} />
                                <span className="text-[8px] mt-1 font-Agrandir">{item.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar