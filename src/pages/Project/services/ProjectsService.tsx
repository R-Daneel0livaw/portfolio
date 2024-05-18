import { Project } from "../types";


export function getProjects(): Map<Number, Project> {
    return new Map([
      [1, {
        id: 1,
        name: "Sports Detective",
        description: ["Sports Detective empowers users to harness the power of machine learning for in-depth sports analysis. Dive into historical sports data, build custom machine learning models, and leverage sophisticated algorithms to gain valuable insights into player performance, team dynamics, and game outcomes. Whether you're a seasoned sports analyst or a novice enthusiast, Sports Detective provides intuitive tools for creating, testing, and refining your models.", "Our platform also facilitates a vibrant marketplace where users can buy and sell their models, fostering a community of collaboration and innovation. Follow top performers, discover winning strategies, and stay ahead of the game with real-time updates and betting line integration. Join Sports Detective today and elevate your sports analysis experience to new heights!"],
        image1: "/src/img/detective.jpg",
        image2: "/src/img/basketball.jpg",
        featured: true,
        highlighted: true,
        gitURL: "https://github.com/R-Daneel0livaw"
      }],
      [2, {
        id: 2,
        name: "TODO",
        description: ["'TODO' is a robust task management application built with Electron and React, designed to streamline daily productivity. With a sleek and intuitive user interface, users can easily add, edit, prioritize, and organize tasks according to their projects and deadlines. The application features a unique ranking system that considers both task priority and duration within the task list, ensuring optimal task prioritization.", "Additionally, the integrated recommendation engine utilizes machine learning algorithms to suggest daily tasks based on user behavior and preferences, enhancing productivity and efficiency. With seamless integration with VSCode, users can effortlessly create and sync tasks while coding, ensuring a seamless workflow. With its comprehensive features and innovative functionalities, 'TODO' empowers users to conquer their daily tasks and achieve their goals with ease."],
        image1: "/src/img/todo.jpg",
        image2: "/src/img/todo-2.jpg",
        featured: true,
        highlighted: false,
        gitURL: "https://github.com/R-Daneel0livaw"
      }],
      [3, {
        id: 3,
        name: "Tidy Tuesday",
        description: ["This repository showcases a diverse collection of data visualizations which make up my contributions to 'Tidy Tuesday', a weekly social data project that presents various datasets for the community to explore. Each visualization offers unique insights into complex datasets, highlighting trends, patterns, and correlations in an engaging and informative manner.", "From interactive charts to dynamic dashboards, these visualizations offer unique insights into complex datasets, spanning economic indicators, environmental data, social trends, and more. See how I use data visualization to uncover actionable insights and compelling stories from the world of social data."],
        image1: "/src/img/tidy.jpg",
        image2: "/src/img/tidy-2.jpg",
        featured: true,
        highlighted: false,
        gitURL: "https://github.com/R-Daneel0livaw"
      }],
      [4, {
        id: 4,
        name: "Job Tracker",
        description: ["Job Tracker is a comprehensive solution designed to streamline the job search process and alleviate the complexities associated with it. By providing a centralized platform, the project empowers users to meticulously track their job applications, monitor application statuses, and manage essential details about prospective employers and job postings.", "Through intuitive features such as reminders for interviews, notifications for new job postings, and personalized recommendations based on user preferences, Job Tracker offers a seamless and efficient experience for job seekers. With its user-friendly interface and robust functionalities, the platform aims to enhance productivity, organization, and ultimately, the success rate of landing desired employment opportunities."],
        image1: "/src/img/job.jpg",
        image2: "/src/img/job-2.jpg",
        featured: true,
        highlighted: false,
        gitURL: "https://github.com/R-Daneel0livaw",
        figmaURL: "https://www.figma.com/"
      }],
      [5, {
        id: 5,
        name: "Knowledge Journey 365",
        description: ["Knowledge Journey 365 is a transformative platform designed to foster continuous self-improvement and lifelong learning. Rooted in the philosophy of daily knowledge acquisition, the project empowers users to embark on a personalized journey of discovery, reflection, and growth. Through intuitive features, users can seamlessly document their daily learning experiences, share insights with a like-minded community, and receive personalized recommendations tailored to their interests and previous learning endeavors.", "By leveraging collaborative filtering techniques, the platform intelligently suggests new topics and resources based on users' historical learning data and the collective wisdom of the community. With its user-centric design and dynamic learning ecosystem, Knowledge Journey 365 inspires individuals to cultivate a habit of learning every day and unlock their full potential."],
        image1: "/src/img/knowledge.jpg",
        image2: "/src/img/knowledge-2.jpg",
        featured: true,
        highlighted: false,
        gitURL: "https://github.com/R-Daneel0livaw",
        figmaURL: "https://www.figma.com/"
      }],
      [6, {
        id: 6,
        name: "Portfolio",
        description: ["My Portfolio/personal website showcases my skills, expertise, and interests in the realm of technology and programming. With a modern and minimalist design, the website serves as a digital resume and portfolio, allowing visitors to explore my professional journey, projects, and achievements. Through sleek and intuitive navigation, users can delve into various sections highlighting my skills, projects, and areas of interest.", "The website's blog section offers insightful articles focused on programming, technology trends, and industry insights, reflecting my passion for continuous learning and knowledge sharing. Overall, this Portfolio embodies my commitment to excellence, innovation, and creativity in the digital space."],
        image1: "/src/img/portfolio.jpg",
        image2: "/src/img/portfolio-2.jpg",
        featured: true,
        highlighted: false,
        gitURL: "https://github.com/R-Daneel0livaw",
        figmaURL: "https://www.figma.com/",
        webURL: "http://localhost:5173/"
      }],
      // [7, {
      //   id: 7,
      //   name: "Project 1",
      //   description: [""],
      //   image1: "",
      //   image2: "",
      //   featured: false,
      //   highlighted: false
      // }],
      // [8, {
      //   id: 8,
      //   name: "Project 2",
      //   description: [""],
      //   image1: "",
      //   image2: "",
      //   featured: false,
      //   highlighted: false
      // }],
      // [9, {
      //   id: 9,
      //   name: "Project 3",
      //   description: [""],
      //   image1: "",
      //   image2: "",
      //   featured: false,
      //   highlighted: false
      // }],
      // [10, {
      //   id: 10,
      //   name: "Project 4",
      //   description: [""],
      //   image1: "",
      //   image2: "",
      //   featured: false,
      //   highlighted: false
      // }],
      // [11, {
      //   id: 11,
      //   name: "Project 5",
      //   description: [""],
      //   image1: "",
      //   image2: "",
      //   featured: false,
      //   highlighted: false
      // }],
      // [12, {
      //   id: 12,
      //   name: "Project 6",
      //   description: [""],
      //   image1: "",
      //   image2: "",
      //   featured: false,
      //   highlighted: false
      // }],
      // [13, {
      //   id: 13,
      //   name: "Project 7",
      //   description: [""],
      //   image1: "",
      //   image2: "",
      //   featured: false,
      //   highlighted: false
      // }],
      // [14, {
      //   id: 14,
      //   name: "Project 8",
      //   description: [""],
      //   image1: "",
      //   image2: "",
      //   featured: false,
      //   highlighted: false
      // }],
    ]);
  }