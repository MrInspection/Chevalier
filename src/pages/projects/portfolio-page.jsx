"use client"

import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {ProjectsContent} from "@/pages/projects/components/projects-content.jsx";
import {Broadcast} from "@/components/broadcast.jsx";
import {DepartmentHero} from "@/pages/projects/components/department-hero.jsx";

export default function PortfolioPage() {
    return (
        <>
            <SiteHeader />
            <DepartmentHero />
            <ProjectsContent />
            <SiteFooter />
        </>
    )
}