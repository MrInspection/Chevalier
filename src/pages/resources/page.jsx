import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {
    ExamsQuickAccess,
    QuickAccess,
    ResourcesHero,
} from "@/pages/resources/components/resources-content.jsx";
import {ResourcesDatabank} from "@/pages/resources/components/resources-databank.jsx";
import {Broadcast} from "@/components/broadcast.jsx";

export default function DatabankPage() {
    return (
        <>
            <Broadcast />
            <SiteHeader />
            <ResourcesHero />
            <ResourcesDatabank />
            <ExamsQuickAccess />
            <QuickAccess />
            <SiteFooter />
        </>
    )
}
