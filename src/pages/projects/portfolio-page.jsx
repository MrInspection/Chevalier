"use client"

import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {PorfolioHero} from "@/pages/projects/components/porfolio-hero.jsx";
import {Broadcast} from "@/components/broadcast.jsx";

export default function PortfolioPage() {
    return (
        <>
            <SiteHeader />
            <Broadcast />
            <PorfolioHero />
            <SiteFooter />
        </>
    )
}