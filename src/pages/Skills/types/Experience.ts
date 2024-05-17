import { Skill } from "./Skill";

  export interface Experience {
    shortName: string;
    longName: string;
    skills: Skill[];
  }