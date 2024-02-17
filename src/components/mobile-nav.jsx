import React from "react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.jsx";
import {Button} from "@/components/ui/button.jsx";
import {siteConfig} from "@/config/siteConfig.js";
import {ScrollArea} from "@/components/ui/scroll-area.jsx";
import {Link} from "react-router-dom";

export function MobileNav() {
    const [open, setOpen] = React.useState()

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <svg
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                    >
                        <path
                            d="M3 5H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 12H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 19H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className={"pl-2 font-bold sm:inline-block"}>{siteConfig.name}</span>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className={"pr-0"}>
                <Link to={"/"} className={"flex items-center"}>
                    <span className="font-bold pl-2">{siteConfig.name}</span>
                </Link>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-2">
                    <div className="flex flex-col space-y-3">
                        <Link to={"/about"}>
                            <span className={"transition-colors hover:text-foreground/80 font-medium"}>À propos</span>
                        </Link>
                        <Link to={"/degree"}>
                            <span className={"transition-colors hover:text-foreground/80 font-medium"}>Formation</span>
                        </Link>
                        <Link to={"/portfolio"}>
                            <span className={"transition-colors hover:text-foreground/80 font-medium"}>Portfolio</span>
                        </Link>
                        <Link to={"/tech-watch"}>
                            <span className={"transition-colors hover:text-foreground/80 font-medium"}>Veille technologique</span>
                        </Link>
                        <Link to={"/databank"}>
                            <span className={"transition-colors hover:text-foreground/80 font-medium"}>Banques de données</span>
                        </Link>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}
