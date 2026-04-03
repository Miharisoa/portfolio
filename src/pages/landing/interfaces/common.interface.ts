export interface Project {
    name: string;
    description: string;
    context: string;
    features: string[];
    stacks: string[];
    currentRole?: string[];
    screenshots: string[];
    image: string;
    url?: string;
}