import AboutSection from "../Components/AboutSection/AboutSection"
import AchievementSection from "../Components/AchievementSection/AchievementSection"
import ContactSection from "../Components/ContactSection/ContactSection"
import EducationSection from "../Components/EducationSection/EducationSection"
import ExperienceSection from "../Components/ExperienceSection/ExperienceSection"
import HeroSection from "../Components/HeroSection/HeroSection"
import Navbar from "../Components/Navbar/Navbar"
import ProjectSection from "../Components/ProjectSection/ProjectSection"
import SkillsSection from "../Components/SkillsSection/SkillsSection"

const Layout = () => {
    return (
        <>
            <Navbar />

            <HeroSection />

            <AboutSection />

            <SkillsSection />

            <ExperienceSection />

            <EducationSection />

            <ProjectSection />

            <AchievementSection />

            <ContactSection />
        </>
    )
}

export default Layout