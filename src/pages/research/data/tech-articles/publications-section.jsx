import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table.jsx";
import {FileTextIcon} from "@radix-ui/react-icons";
import {publications} from "@/pages/research/data/tech-articles/publicationsData.jsx";


export function PublicationsSection() {
    const openFile = (fileName) => {
        window.location.href = fileName;
    };

    return (
        <>
            <Table>
                <TableCaption>ProjectUltron - Système d{"'"}organization Avengard</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Identifiant</TableHead>
                        <TableHead>Intitulé du livrable de la veille technologique</TableHead>
                        <TableHead>Édition</TableHead>
                        <TableHead>Mois</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead><FileTextIcon /></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {publications.map((publication) => (
                        <TableRow key={publication.id}>
                            <TableCell className="font-medium" onClick={() => openFile(publication.file)}>
                                {publication.id}
                            </TableCell>
                            <TableCell onClick={() => openFile(publication.file)}>{publication.title}</TableCell>
                            <TableCell onClick={() => openFile(publication.file)}>{publication.edition}</TableCell>
                            <TableCell onClick={() => openFile(publication.file)}>
                                {publication.month}
                            </TableCell>
                            <TableCell className={"font-semibold text-muted-foreground"} onClick={() => openFile(publication.file)}>
                                {publication.status}
                            </TableCell>

                            <TableCell className={"text-muted-foreground"} onClick={() => openFile(publication.file)}> {publication.download}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
