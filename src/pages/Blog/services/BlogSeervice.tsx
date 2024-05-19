import { Article, Comment, FeaturedArticle } from "../types";

function getArticles(): Article[] {
    return [
        {
            id: "post1",
            topic: "Machine Learning",
            title: "Mastering Machine Learning Algorithms",
            description:
                "Dive into the fascinating world of machine learning algorithms and learn how to implement them from scratch. This comprehensive guide covers a wide range of algorithms, from linear regression to deep learning.",
            date: "1 February, 2024",
            readTime: "12 mins",
            topics: ["tech"],
            comments: 8
        },
        {
            id: "post2",
            topic: "Web Dev",
            title: "The Power of Progressive Web Apps (PWAs)",
            description:
                "Unlock the potential of Progressive Web Apps (PWAs) and revolutionize your web development workflow. Discover how PWAs combine the best of web and mobile experiences, and learn how to build your own.",
            date: "5 February, 2024",
            readTime: "15 mins",
            topics: ["tech"],
            comments: 0
        },
        {
            id: "post3",
            topic: "Cloud",
            title: "The Future of Cloud Computing: Trends and Innovations",
            description:
                "Stay ahead of the curve with insights into the latest trends and innovations in cloud computing. Explore topics such as serverless architecture, multi-cloud strategies, and edge computing, and learn how they are shaping the future of technology.",
            date: "20 February, 2024",
            readTime: "10 mins",
            topics: ["tech"],
            comments: 3
        },
        {
            id: "post4",
            topic: "Architecture",
            title: "Building Scalable Web Applications with Microservices Architecture",
            description:
                "Learn how to design and implement scalable web applications using microservices architecture. Discover best practices for breaking down monolithic applications into smaller, more manageable services, and explore tools and techniques for orchestrating and deploying microservices.",
            date: "5 March, 2024",
            readTime: "15 mins",
            topics: ["tech", "architecture", "tutorial"],
            comments: 5
        },
    ];
}

function getFeaturedArticles(): FeaturedArticle[] {
    return [
        {
            id: "fpost1",
            topic: "Programming",
            title: "Demystifying React Hooks: A Comprehensive Guide",
            description:
                "Dive into the intricacies of React Hooks with our comprehensive guide, unraveling the mysteries behind these powerful tools for state and lifecycle management in React applications.",
            date: "15 Jan 2024",
            readTime: "8 mins",
            topics: ["tech", "tutorial"],
            comments: 20,
            image: "src/img/reactJS_logo.jpeg",
            rank: 1
        },
        {
            id: "fpost2",
            topic: "Design",
            title: "The Art of Minimalist Design: Less is More",
            description:
                "Explore the elegance and effectiveness of minimalist design principles in our insightful article, uncovering the transformative power of simplicity in creating sophisticated and user-friendly interfaces.",
            date: "10 Jan 2024",
            readTime: "10 mins",
            topics: ["tech", "architecture"],
            comments: 2,
            image: "src/img/reactJS_logo.jpeg",
            rank: 2
        },
        {
            id: "fpost3",
            topic: "AI",
            title: "Exploring the World of Artificial Intelligence: Applications and Ethics",
            description:
                "Dive into the fascinating realm of artificial intelligence as we navigate through its myriad applications and delve into the ethical considerations shaping its development and deployment in today's technological landscape.",
            date: "3 Apr 2024",
            readTime: "10 mins",
            topics: ["tech"],
            comments: 7,
            image: "src/img/reactJS_logo.jpeg",
            rank: 3
        },
        {
            id: "fpost4",
            topic: "Data Science",
            title: "Mastering Data Science: A Beginner's Guide to Python and Pandas",
            description:
                "Embark on your data science journey with this beginner's guide to Python and Pandas. Learn the fundamentals of data manipulation and analysis, setting the foundation for mastering the art of data science.",
            date: "20 May 2024",
            readTime: "10 mins",
            topics: ["tech", "tutorial"],
            comments: 12,
            image: "src/img/reactJS_logo.jpeg",
            rank: 4
        },
    ];
}

function getComments(): Comment[] {
    return [
        {
            id: "2",
            firstName: 'Anonymous',
            lastName: 'Cat',
            text: 'Great article! I found the explanation on how to use the useState hook really helpful. Looking forward to diving deeper into React hooks. Thanks for sharing!',
            date: '17 Mar 2024'
        },
        {
            id: "1",
            firstName: 'Frank',
            lastName: 'Potter',
            text: 'This article clarified a lot of things for me about React hooks. I particularly liked the section on custom hooks and how they can simplify code reuse. This article clarified a lot of things for me about React hooks. I particularly liked the section on custom hooks and how they can simplify code reuse.',
            date: '15 Jan 2024'
        }
    ];
}

export { getArticles, getFeaturedArticles, getComments };