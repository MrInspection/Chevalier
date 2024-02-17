import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import DatabankHeroSection from "@/pages/databank/components/page-content.jsx";
import {Broadcast} from "@/components/broadcast.jsx";

export default function DatabankPage() {
    return (
        <>
            <SiteHeader />
            <Broadcast />
            <DatabankHeroSection />
            <SiteFooter />
        </>
    )
}
