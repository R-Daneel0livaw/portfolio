import { Article } from "./Article";

export type FeaturedArticle = Article & {
    image: string;
    rank: number;
};