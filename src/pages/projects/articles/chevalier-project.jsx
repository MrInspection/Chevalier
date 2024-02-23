import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {Broadcast} from "@/components/broadcast.jsx";

export default function ChevalierProject() {
    return (
        <>
            <SiteHeader/>
            <Broadcast />
            <ArticleSection/>
            <SiteFooter/>
        </>
    )
}

function ArticleSection() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl mt-16"}>
                <img className={"bg-cover bg-center rounded-md"} src={"/banners/inquisitive-banner.png"} />
            </div>
            <div className={"container relative mx-auto max-w-3xl mb-32"}>
                <div className={"flex-1 mt-12"}>
                    <div>
                        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                            ProjectUltron Chevālier
                        </h1>
                        <div className="flex h-5 items-center space-x-3 my-3">
                            <div className={"font-bold"}>Board of Directors</div>
                            <Separator orientation="vertical"/>
                            <div className={"text-sm font-semibold"}>Feb 19th, 2024 </div>
                        </div>


                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue
                        nisi vitae. Bibendum neque egestas congue quisque egestas. Etiam non quam lacus
                        suspendisse faucibus interdum posuere. Vestibulum morbi blandit cursus risus at
                        ultrices. Enim diam vulputate ut pharetra sit. Rutrum quisque non tellus orci.
                        Dui ut ornare lectus sit. Pulvinar neque laoreet suspendisse interdum consectetur
                        libero id faucibus nisl. A iaculis at erat pellentesque adipiscing commodo elit.
                        Ultrices mi tempus imperdiet nulla malesuada. At ultrices mi tempus imperdiet
                        nulla malesuada.
                        </p>

                        <p className="leading-7 [&:not(:first-child)]:my-8">
                            <img className={"bg-cover bg-center rounded-md"} src={"/images/demonstration.png"}/>
                            <figcaption className={"text-center text-muted-foreground my-1"}>
                                Press Conference of ProjectUltron
                            </figcaption>
                        </p>


                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue
                        nisi vitae. Bibendum neque egestas congue quisque egestas. Etiam non quam lacus
                        suspendisse faucibus interdum posuere. Vestibulum morbi blandit cursus risus at
                        ultrices. Enim diam vulputate ut pharetra sit. Rutrum quisque non tellus orci.
                        Dui ut ornare lectus sit. Pulvinar neque laoreet suspendisse interdum consectetur
                        libero id faucibus nisl. A iaculis at erat pellentesque adipiscing commodo elit.
                        Ultrices mi tempus imperdiet nulla malesuada. At ultrices mi tempus imperdiet
                        nulla malesuada.
                    </p>

                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue
                        nisi vitae. Bibendum neque egestas congue quisque egestas. Etiam non quam lacus
                        suspendisse faucibus interdum posuere. Vestibulum morbi blandit cursus risus at
                        ultrices. Enim diam vulputate ut pharetra sit. Rutrum quisque non tellus orci.
                        Dui ut ornare lectus sit. Pulvinar neque laoreet suspendisse interdum consectetur
                        libero id faucibus nisl. A iaculis at erat pellentesque adipiscing commodo elit.
                        Ultrices mi tempus imperdiet nulla malesuada. At ultrices mi tempus imperdiet
                        nulla malesuada.
                    </p>

                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue
                        nisi vitae. Bibendum neque egestas congue quisque egestas. Etiam non quam lacus
                        suspendisse faucibus interdum posuere. Vestibulum morbi blandit cursus risus at
                        ultrices. Enim diam vulputate ut pharetra sit. Rutrum quisque non tellus orci.
                        Dui ut ornare lectus sit. Pulvinar neque laoreet suspendisse interdum consectetur
                        libero id faucibus nisl. A iaculis at erat pellentesque adipiscing commodo elit.
                        Ultrices mi tempus imperdiet nulla malesuada. At ultrices mi tempus imperdiet
                        nulla malesuada.
                    </p>

                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue
                        nisi vitae. Bibendum neque egestas congue quisque egestas. Etiam non quam lacus
                        suspendisse faucibus interdum posuere. Vestibulum morbi blandit cursus risus at
                        ultrices. Enim diam vulputate ut pharetra sit. Rutrum quisque non tellus orci.
                        Dui ut ornare lectus sit. Pulvinar neque laoreet suspendisse interdum consectetur
                        libero id faucibus nisl. A iaculis at erat pellentesque adipiscing commodo elit.
                        Ultrices mi tempus imperdiet nulla malesuada. At ultrices mi tempus imperdiet
                        nulla malesuada.
                    </p>

                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue
                        nisi vitae. Bibendum neque egestas congue quisque egestas. Etiam non quam lacus
                        suspendisse faucibus interdum posuere. Vestibulum morbi blandit cursus risus at
                        ultrices. Enim diam vulputate ut pharetra sit. Rutrum quisque non tellus orci.
                        Dui ut ornare lectus sit. Pulvinar neque laoreet suspendisse interdum consectetur
                        libero id faucibus nisl. A iaculis at erat pellentesque adipiscing commodo elit.
                        Ultrices mi tempus imperdiet nulla malesuada. At ultrices mi tempus imperdiet
                        nulla malesuada.
                    </p>

                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue
                        nisi vitae. Bibendum neque egestas congue quisque egestas. Etiam non quam lacus
                        suspendisse faucibus interdum posuere. Vestibulum morbi blandit cursus risus at
                        ultrices. Enim diam vulputate ut pharetra sit. Rutrum quisque non tellus orci.
                        Dui ut ornare lectus sit. Pulvinar neque laoreet suspendisse interdum consectetur
                        libero id faucibus nisl. A iaculis at erat pellentesque adipiscing commodo elit.
                        Ultrices mi tempus imperdiet nulla malesuada. At ultrices mi tempus imperdiet
                        nulla malesuada.
                    </p>


                </div>
            </div>
        </div>
        </>
    )
}

