import SiteHeader from "@/components/site-header.jsx";
import SiteFooter from "@/components/site-footer.jsx";
import {Separator} from "@/components/ui/separator.jsx";

export default function DegreePage() {
    return (
        <>
            <SiteHeader />
            <PageArticle />
            <SiteFooter />
        </>
    )
}

function PageArticle() {
    return (
        <>
            <div className={"container relative mx-auto max-w-6xl mt-16"}>
                <img className={"bg-cover bg-center rounded-md"} src={"/banners/blue-inquisitive-banner.png"}/>
            </div>
            <div className={"container relative mx-auto max-w-3xl mb-32"}>
                <div className={"flex-1 mt-12"}>
                    <div>
                        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                            La Formation BTS SIO
                        </h1>
                        <div className="flex h-5 items-center space-x-3 my-3">
                            <div className={"font-bold"}>Formation</div>
                            <Separator orientation="vertical"/>
                            <div className={"text-sm font-semibold"}>Publié le 24 Février 2024</div>
                        </div>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Le Brevet de <strong>Technicien Supérieur aux Services Informatiques aux
                            Organisations</strong> (BTS SIO) offre une opportunité unique de se former
                            en <strong>deux ans</strong> dans les domaines essentiels de l{"'"}informatique.
                            Cette formation polyvalente prépare les étudiants à devenir des <strong>
                            experts</strong> dans deux spécialités clés : <strong>les Solutions
                            d{"'"}Infrastructure, Systèmes et Réseaux (SISR)</strong> et <strong>
                            les Solutions Logicielles et Applications Métiers (SLAM)</strong>.
                        </p>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            La spécialité <strong>SISR</strong> forme des professionnels compétents dans la
                            <strong>gestion des réseaux et des équipements informatiques</strong>. De
                            l{"'"}installation à la maintenance en passant par la sécurité, les étudiants
                            acquièrent les compétences nécessaires pour <strong>administrer</strong>
                            {" "}efficacement les réseaux d{"'"}entreprises. Les débouchés sont nombreux,
                            allant de l{"'"}administrateur systèmes et réseaux au technicien micro et réseaux.
                        </p>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Quant à la spécialité <strong>SLAM</strong>, elle prépare les
                            futurs experts des logiciels et des applications métiers. Les étudiants apprennent
                            à rédiger des cahiers des charges, formuler des besoins, développer des solutions
                            logicielles et les intégrer au sein des organisations. Avec des perspectives de
                            carrière variées telles que développeur d{"'"}applications informatiques,
                            analyste programmeur ou encore responsable des services applicatifs, cette
                            spécialité offre une diversité d{"'"}opportunités professionnelles.
                        </p>

                        <blockquote className="mt-6 border-l-4 pl-6 italic">
                            Mon choix de la spécialité SLAM s{"'"}est fait en raison de mes compétences
                            préexistantes en développement Java et Python. Le développement informatique
                            suscitait déjà mon intérêt bien plus que les réseaux.
                        </blockquote>

                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            En résumé, le BTS SIO est une formation complète et adaptée aux besoins actuels
                            du marché de l{"'"}informatique. Que ce soit pour intégrer directement le monde
                            professionnel ou poursuivre des études supérieures, cette formation ouvre les
                            portes vers des carrières prometteuses dans les domaines de l{"'"}infrastructure
                            et du développement informatique.
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}