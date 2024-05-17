export type Project = {
    id: number;
    name: string;
    description: string[];
    image1: string;
    image2: string;
    gitURL?: string;
    figmaURL?: string;
    webURL?: string;
    featured: boolean;
    highlighted: boolean
};