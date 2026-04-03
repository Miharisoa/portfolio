// import hadeen from "../../../assets/projects/hadeen.png";
import cite from "../../../assets/projects/cite.png";
import cite1 from "../../../assets/projects/cite-1.png";
import cite2 from "../../../assets/projects/cite-2.png";
import bo1 from "../../../assets/projects/bo-1.png";
import bo2 from "../../../assets/projects/bo-2.png";
import bo3 from "../../../assets/projects/bo-3.png";
import bo4 from "../../../assets/projects/bo-4.png";
import type { Project } from "../interfaces/common.interface";

export const PROJECTS: Project[] = [
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
    {
        name: "Backoffice - Cité des cultures",
        description: "Backoffice sur mesure qui sert d'outils d'administration pour la Cité des Cultures à Madagascar",
        image: bo1,
        url: "https://citedescultures.com/",
        context: "Ce projet a été développé pour répondre au besoin de le Cité des Cultures souhaitant centraliser et faciliter la gestion de ses activités.",
        features: [
            "Gestion des contenus pour le site vitrine",
            "Gestion des membres, personnels, clients",
            "Gestion des salles et réservations",
            "Gestion du calendrier de la cité",
            "Envoi et historique newsletters",
        ],
        stacks: ["Next.js", "TailwindCss"],
        screenshots: [bo2, bo3, bo4]
    },
    // {
    //     name: "Hadéen-place",
    //     description: "C'est une place de marché dédiée pour aider les TPE/PME françaises.",
    //     image: hadeen,
    //     url: "https://hadeen-place.fr/",
    //     context: "",
    //     features: [],
    //     stacks: [],
    //     screenshots: []
    // },
] ;