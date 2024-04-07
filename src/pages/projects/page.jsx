"use client"

import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {ProjectsHero, ProjectsIntroduction} from "@/pages/projects/components/projects-content.jsx";
import {ProjectsCategories} from "@/pages/projects/components/projects-categories.jsx";
import React from "react";
import {Broadcast} from "@/components/broadcast.jsx";

export default function ProjectsPage() {
    return (
        <>
            <Broadcast />
            <SiteHeader />
            <ProjectsHero />
            <ProjectsIntroduction />
            <ProjectsCategories/>
            <SiteFooter />
        </>
    )
}