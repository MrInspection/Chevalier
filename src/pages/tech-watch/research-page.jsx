import {TechHero} from "@/pages/tech-watch/components/tech-hero.jsx";
import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {Broadcast} from "@/components/broadcast.jsx";
import {PublicationsSection} from "@/pages/tech-watch/data/tech-articles/publications-section.jsx";
import {TechIntro} from "@/pages/tech-watch/components/tech-intro.jsx";
import {ResearchMenu, RsearchDatabank} from "@/pages/tech-watch/components/research-menu.jsx";
import {ResearchDepartment} from "@/pages/tech-watch/components/research-department.jsx";

export default function ResearchPage() {
    return (
        <>
            <SiteHeader />
            <ResearchDepartment />
            <RsearchDatabank />
            <ResearchMenu />
            <SiteFooter />
        </>
    )
}

