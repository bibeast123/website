// Projects.js

function Projects() {
    const projects = [
        { 
            name: "Austin Wheels", 
            Description:"Austin Wheels is a project to serve the wheelchair-bound community in the Austin Area. Our site will provide information about wheelchair-accessible locations and transportation options in the Greater Austin Area for any wheelchair-bound individuals.",
            imageUrl: "logoaw.20f707dc47846cab4257.png", 
            repoUrl: "https://gitlab.com/Bidhan123/austin-wheels" 
        },
        { 
            name: "AI Data Optimizer", 
            Description:"Machine learning model with front end showing a Internet Usage recommender",
            imageUrl: "generative-ai-social-1600x627.png", 
            repoUrl: "https://github.com/bibeast123/AI-Data-optimizer" 
        },
        { 
            name: "Recell", 
            Description:"Full Stack website marketplace for people to list, discover and safely dispose of electronics.",
            imageUrl: "recell im2.png", 
            repoUrl: "https://github.com/bibeast123/Recell" 
        },
        { 
            name: "March Madness Predictor", 
            Description:"Machine learning project that aims to predict the outcome of a March Madness matchup using the data found on Kaggle",
            imageUrl: "download.png", 
            repoUrl: "https://github.com/bibeast123/march_madness_predictor" 
        },
        { 
            name: "AmazonPriceTracker", 
            Description:"Automation Web Scraper using Python and Selenium",
            imageUrl: "scraping.png", 
            repoUrl: "https://github.com/bibeast123/AmazonPriceTracker" 
        },
        { 
            name: "Tuner", 
            Description:"Takes in audio input from wav files and displays back what note is being played. Made using our own OS system",
            imageUrl: "1742600.webp", 
            repoUrl: "https://github.com/bibeast123/Tuner" 
        },
        // Add more projects as needed
    ];

    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.imageUrl} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p> {project.Description}</p>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
