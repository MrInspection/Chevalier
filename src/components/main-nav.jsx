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

                <Link to={"/tech-watch"}>
                        <span className={"transition-colors hover:text-foreground/80 font-medium"}>Research</span>
                </Link>

                <Link to={"/databank"}>
                    <span className={"transition-colors hover:text-foreground/80 font-medium"}>Banque de données</span>
                </Link>

            </nav>
        </div>
    )
}
