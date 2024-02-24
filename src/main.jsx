import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages/home/home-page.jsx";
import AboutPage from "@/pages/about/page.jsx";
import DegreePage from "@/pages/degree/page.jsx";
import ResearchPage from "@/pages/research/page.jsx";
import {Error404Page} from "@/pages/utils/error404-page.jsx";
import DatabankPage from "@/pages/resources/page.jsx";
import ChevalierProject from "@/pages/projects/articles/chevalier-project.jsx";
import ProjectsPage from "@/pages/projects/page.jsx";

const router = createBrowserRouter([
    { path: "/",  element: <HomePage />, errorElement: <Error404Page /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/degree", element: <DegreePage /> },
    { path: "/projects", element: <ProjectsPage /> },

    { path: "/projects/chevalier", element: <ChevalierProject /> },

    { path: "/research", element: <ResearchPage /> },
    { path: "/resources", element: <DatabankPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
