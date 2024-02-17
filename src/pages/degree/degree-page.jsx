import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {DegreePresentation} from "@/pages/degree/degree-pres.jsx";
import {Broadcast} from "@/components/broadcast.jsx";

export default function DegreePage() {
    return (
        <>
            <SiteHeader />
            <Broadcast />
            <DegreePresentation />
            <SiteFooter />
        </>
    )
}