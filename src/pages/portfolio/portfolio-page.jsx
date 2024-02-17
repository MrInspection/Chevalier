"use client"

import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {PorfolioHero} from "@/pages/portfolio/components/porfolio-hero.jsx";

export default function PortfolioPage() {
    return (
        <>
            <SiteHeader />
            <PorfolioHero />
            <SiteFooter />
        </>
    )
}