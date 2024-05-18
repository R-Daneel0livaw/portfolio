import { Experience, Persona } from "../types";

function getExperiences(): Map<Persona, Experience[]> {
    return new Map([
        [
            "Full-Stack Developer",
            [
                { shortName: "Programming", longName: "Programming Languages", skills: ["Java", "C/C++/C#", "Python", "R", "Go", "Groovy", "PHP", "JavaScript", "TypeScript"] },
                { shortName: "Backend", longName: "Backend Technologies", skills: ["Spring", ".NET", "NodeJS"] },
                { shortName: "Web", longName: "Web Technologies", skills: ["React", "Angular", "Vue", "Webpack", "Vite", "HTML5/CSS3"] },
                { shortName: "Databases", longName: "Database Management", skills: ["SQL", "NoSQL", "Vector", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Cassandra"] },
                { shortName: "Cloud", longName: "Cloud Platforms", skills: ["AWS", "Azure"] },
                { shortName: "DevOps", longName: "DevOps", skills: ["Docker", "Kubernetes", "OpenShift", "Jenkins", "CI/CD Pipelines", "Git"] },
            ],
        ],
        [
            "Frontend Developer",
            [
                { shortName: "Web", longName: "Web Technologies", skills: ["React", "Angular", "Vue", "Webpack", "Vite", "HTML5/CSS3"] },
                { shortName: "Databases", longName: "Database Management", skills: ["SQL", "NoSQL", "Vector", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Cassandra"] },
                { shortName: "UI/UX", longName: "UI/UX", skills: ["Figma", "Sketch", "Adobe Photoshop", "Tailwind", "Bootstrap", "Material UI", "Accessibility"] },
                { shortName: "Cloud", longName: "Cloud Platforms", skills: ["AWS", "Azure"] },
            ],
        ],
        [
            "Designer",
            [
                { shortName: "UI/UX", longName: "UI/UX", skills: ["Figma", "Sketch", "Adobe Photoshop", "Tailwind", "Bootstrap", "Material UI", "Accessibility"] },
                { shortName: "Web", longName: "Web Technologies", skills: ["React", "Angular", "Vue", "Webpack", "Vite", "HTML5/CSS3"] },
            ],
        ],
        [
            "Data Analyst",
            [
                { shortName: "Programming", longName: "Programming Languages", skills: ["Java", "C/C++/C#", "Python", "R", "Go", "Groovy", "PHP", "JavaScript", "TypeScript"] },
                { shortName: "Machine Learning", longName: "Machine Learning", skills: ["Scikit-learn", "Amazon SageMaker", "Tensor-Flow", "Keras", "CARET"] },
                { shortName: "Data Visualization", longName: "Data Visualization", skills: ["Tableau", "Power BI", "Seaborn"] },
                { shortName: "Big Data", longName: "Big Data Technologies", skills: ["Hadoop", "Spark"] },
                { shortName: "Databases", longName: "Database Management", skills: ["SQL", "NoSQL", "Vector", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Cassandra"] },
            ],
        ],
        [
            "Manager",
            [
                { shortName: "Leadership", longName: "Leadership and Commnuication", skills: ["Team Leadership", "Mentorship", "Effective Commnuication", "Analytical Thinking"] },
                { shortName: "Soft Skills", longName: "Soft Skills", skills: ["Collaboration", "Time Management", "Adaptability", "Resource Planning"] },
            ],
        ],
        [
            "All",
            [
                { shortName: "Programming", longName: "Programming Languages", skills: ["Java", "C/C++/C#", "Python", "R", "Go", "Groovy", "PHP", "JavaScript", "TypeScript"] },
                { shortName: "Backend", longName: "Backend Technologies", skills: ["Spring", ".NET", "NodeJS"] },
                { shortName: "Web", longName: "Web Technologies", skills: ["React", "Angular", "Vue", "Webpack", "Vite", "HTML5/CSS3"] },
                { shortName: "Databases", longName: "Database Management", skills: ["SQL", "NoSQL", "Vector", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Cassandra"] },
                { shortName: "Cloud", longName: "Cloud Platforms", skills: ["AWS", "Azure"] },
                { shortName: "DevOps", longName: "DevOps", skills: ["Docker", "Kubernetes", "OpenShift", "Jenkins", "CI/CD Pipelines", "Git"] },
                { shortName: "Machine Learning", longName: "Machine Learning", skills: ["Scikit-learn", "Amazon SageMaker", "Tensor-Flow", "Keras", "CARET"] },
                { shortName: "Data Visualization", longName: "Data Visualization", skills: ["Tableau", "Power BI", "Seaborn"] },
                { shortName: "Big Data", longName: "Big Data Technologies", skills: ["Hadoop", "Spark"] },
                { shortName: "UI/UX", longName: "UI/UX", skills: ["Figma", "Sketch", "Adobe Photoshop", "Tailwind", "Bootstrap", "Material UI", "Accessibility"] },
                { shortName: "Leadership", longName: "Leadership and Commnuication", skills: ["Team Leadership", "Mentorship", "Effective Commnuication", "Analytical Thinking"] },
                { shortName: "Soft Skills", longName: "Soft Skills", skills: ["Collaboration", "Time Management", "Adaptability", "Resource Planning"] },
            ],
        ],
    ]);
}
 
function getDescriptions(): Map<string, string> {
    return new Map([
        ["Full-Stack Developer", "I build web applications from front to back, handling both client-side and server-side development."],
        ["Frontend Developer", "I focus on crafting engaging user interfaces and ensuring seamless user experiences."],
        ["Designer", "I create visually appealing designs with a focus on simplicity and intuitive interaction."],
        ["Data Analyst", "I analyze data to derive insights and make informed decisions."],
        ["Manager", "I lead teams and projects, ensuring efficient collaboration and successful outcomes."],
        ["All", "Versatile Technologist."],
    ]);
}

export {getExperiences, getDescriptions};