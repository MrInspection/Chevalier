import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages/home/home-page.jsx";
import AboutPage from "@/pages/about/about-page.jsx";
import DegreePage from "@/pages/degree/degree-page.jsx";
import PortfolioPage from "@/pages/projects/portfolio-page.jsx";
import TechPage from "@/pages/tech-watch/tech-page.jsx";
import {Error404Page} from "@/pages/utils/error404-page.jsx";
import DatabankPage from "@/pages/databank/databank-page.jsx";
import ChevalierProject from "@/pages/projects/articles/chevalier-project.jsx";

const router = createBrowserRouter([
    { path: "/",  element: <HomePage />, errorElement: <Error404Page /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/degree", element: <DegreePage /> },
    { path: "/projects", element: <PortfolioPage /> },

    { path: "/projects/chevalier", element: <ChevalierProject /> },

    { path: "/tech-watch", element: <TechPage /> },
    { path: "/databank", element: <DatabankPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
