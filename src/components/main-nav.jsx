import {siteConfig} from "@/config/siteConfig.js";
import {Link} from "react-router-dom";

export function MainNav() {
    return (
        <div className={"mr-4 hidden md:flex"}>
            <div className={"mr-4 hidden md:flex"}>
                <Link to={"/"}>
                    <span className={"hidden font-bold sm:inline-block"}>{siteConfig.name}</span>
                </Link>
            </div>
            <nav className={"flex items-center gap-6 text-sm"}>

                <Link to={"/about"}>
                    <span className={"transition-colors hover:text-foreground/80 font-medium"}>À propos</span>
                </Link>

                <Link to={"/degree"}>
                    <span className={"transition-colors hover:text-foreground/80 font-medium"}>Formation</span>
                </Link>

                <Link to={"/projects"}>
                    <span className={"transition-colors hover:text-foreground/80 font-medium"}>Projets</span>
                </Link>

                <Link to={"/research"}>
                        <span className={"transition-colors hover:text-foreground/80 font-medium"}>Mes recherches</span>
                </Link>

                <Link to={"/resources"}>
                    <span className={"transition-colors hover:text-foreground/80 font-medium"}>Ressources</span>
                </Link>

                <Link to={siteConfig.links.github}>
                    <span className={"transition-colors hover:text-foreground/80 font-medium"}>GitHub</span>
                </Link>

            </nav>
        </div>
    )
}
