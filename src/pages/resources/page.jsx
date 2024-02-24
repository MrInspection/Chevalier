import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {
    ExamsQuickAccess,
    QuickAccess,
    ResourcesHero,
} from "@/pages/resources/components/resources-content.jsx";
import {ResourcesDatabank} from "@/pages/resources/components/resources-databank.jsx";

export default function DatabankPage() {
    return (
        <>
            <SiteHeader />
            <ResourcesHero />
            <ResourcesDatabank />

            <ExamsQuickAccess />

            <QuickAccess />

            <SiteFooter />
        </>
    )
}
