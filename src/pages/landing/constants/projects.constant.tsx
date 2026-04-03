import hadeen from "../../../assets/projects/hadeen.png";
import cite from "../../../assets/projects/cite.png";
import cite1 from "../../../assets/projects/cite-1.png";
import cite2 from "../../../assets/projects/cite-2.png";
import type { Project } from "../interfaces/common.interface";

export const PROJECTS: Project[] = [
    {
        name: "Hadéen-place",
        description: "C'est une place de marché dédiée pour aider les TPE/PME françaises.",
        image: hadeen,
        url: "https://hadeen-place.fr/",
        context: "",
        features: [],
        stacks: [],
        screenshots: []
    },
    {
        name: "Portail web - Cité des cultures",
        description: "Portail web de la cité des cultures à Madagascar, accompagné d'un outils d'administration.",
        image: cite,
        url: "https://citedescultures.com/",
        context: "Ce projet a été développé pour servir de site vitrine à la cité des cultures, permettant à toutes personnes intéressées de ne rien rater des actualités de la cité et des prochains rendez-vous.",
        features: [
            "Présentation de la cité, ses activités et ses partenaires",
            "Formulaire de contact permettant de contacter facilement les responsables",
            "Visualisation de l'agenda de la cité",
            "Visualisation et abonnement aux newsletter",
        ],
        stacks: ["Next.js", "TailwindCss"],
        screenshots: [cite, cite1, cite2]
    },
] ;