import {TechHero} from "@/pages/tech-watch/components/tech-hero.jsx";
import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";

export default function TechPage() {
    return (
        <>
            <SiteHeader />
            <TechHero />
            <SiteFooter />
        </>
    )
}