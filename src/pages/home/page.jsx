import PersonalStats from "@/pages/about/components/personal-stats.jsx";
import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {IntroSection} from "@/pages/home/components/intro-section.jsx";
import {FeaturedWorks} from "@/pages/home/components/featured-works.jsx";
import {Broadcast} from "@/components/broadcast.jsx";

export default function HomePage() {
    return (
        <>
            <Broadcast />
            <SiteHeader />
            <IntroSection />
            <PersonalStats />
            <FeaturedWorks />
            <SiteFooter />
        </>
    )
}
