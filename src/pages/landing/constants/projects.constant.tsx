import hadeen from "../../../assets/projects/hadeen.png";
import cite from "../../../assets/projects/cite.png";
import type { Project } from "../interfaces/common.interface";

export const PROJECTS: Project[] = [
    {
        name: "Hadéen-place",
        description: "C'est une place de marché dédiée pour aider les TPE/PME françaises.",
        image: hadeen,
        url: "https://hadeen-place.fr/",
    },
    {
        name: "Cité des cultures",
        description: "Portail web de la cité des cultures à Madagascar, accompagné d'un outils d'administration.",
        image: cite,
        url: "https://citedescultures.com/",
    },
] ;