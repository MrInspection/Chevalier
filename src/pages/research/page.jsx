import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {ResearchContent, ResearchHero} from "@/pages/research/components/research-content.jsx";
import {ResearchCategories} from "@/pages/research/components/research-categories.jsx";

export default function ResearchPage() {
    return (
        <>
            <SiteHeader />
            <ResearchHero />
            <ResearchContent />
            <ResearchCategories />
            <SiteFooter />
        </>
    )
}

