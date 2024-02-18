import AboutMe from "@/pages/about/components/about-me.jsx";
import PersonalStats from "@/pages/about/components/personal-stats.jsx";
import SkillsSection from "@/pages/about/components/skills-statistics.jsx";
import {EduSection} from "@/pages/about/components/edu-section.jsx";
import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {Broadcast} from "@/components/broadcast.jsx";

export default function AboutPage() {
    return (
        <>
            <SiteHeader />
            <AboutMe />
            <PersonalStats />
            <EduSection />
            <SkillsSection />
            <SiteFooter />
        </>
    )
}

