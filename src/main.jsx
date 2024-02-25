import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages/home/page.jsx";
import AboutPage from "@/pages/about/page.jsx";
import DegreePage from "@/pages/degree/page.jsx";
import ResearchPage from "@/pages/research/page.jsx";
import {Error404Page} from "@/pages/utils/error404-page.jsx";
import DatabankPage from "@/pages/resources/page.jsx";
import ProjectChevalier from "@/pages/projects/articles/project-chevalier.jsx";
import ProjectsPage from "@/pages/projects/page.jsx";
import CaseChevalier from "@/pages/research/data/cases-studies/case-chevalier.jsx";
import ProjectTetris from "@/pages/projects/articles/project-tetris.jsx";
import ProjectCalculator from "@/pages/projects/articles/project-calculator.jsx";
import InternshipsPage from "@/pages/resources/pages/internships-page.jsx";
import CertificationsPage from "@/pages/resources/pages/certifications-page.jsx";
import ExamE5Page from "@/pages/resources/pages/exam-e5-page.jsx";
import ExamE4Page from "@/pages/resources/pages/exam-e4-page.jsx";
import FeedbackPage from "@/pages/resources/pages/feedback-page.jsx";

const router = createBrowserRouter([

    { path: "/",  element: <HomePage />, errorElement: <Error404Page /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/degree", element: <DegreePage /> },

    // Projects Routing
    { path: "/projects", element: <ProjectsPage /> },
    { path: "/projects/chevalier", element: <ProjectChevalier /> },
    { path: "/projects/calculator", element: <ProjectCalculator /> },
    { path: "/projects/tetris", element: <ProjectTetris /> },

    // Research Routing
    { path: "/research", element: <ResearchPage /> },
    { path: "/research/chevalier", element: <CaseChevalier /> },

    // Resources Routing
    { path: "/resources", element: <DatabankPage /> },
    { path: "/resources/exam-e4", element: <ExamE4Page /> },
    { path: "/resources/exam-e5", element: <ExamE5Page /> },
    { path: "/resources/certification-sio", element: <CertificationsPage /> },
    { path: "/resources/internships", element: <InternshipsPage /> },
    { path: "/resources/feedback-loop-system", element: <FeedbackPage /> },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
