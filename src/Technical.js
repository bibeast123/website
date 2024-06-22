function Technical() {
    const technicalSkills = {
        codingLanguages: [
            "Java", "Python", "C/C++", "Kotlin", "TypeScript", "JavaScript", "HTML/CSS", "SQL"
        ],
        frameworksAndTools: [
            "React", "Angular", "Node.js", "Flask", "FastAPI", "GitHub", "Git", "Selenium", 
            "Microsoft Office", "Tableau", "JIRA", "Postman", "Docker", "Kubernetes", "Jupyter", 
            "Pandas", "PyTorch", "TensorFlow", "NumPy", "AWS", "Android Studio", "Azure Databricks"
        ]
    };

    return (
        <header className="header">
            <section id="technical" className="technical">
                <h2>Technical Skills</h2>
                <div className="skills-container">
                    <div className="skills-box">
                        <h3>Languages:</h3>
                        <ul className="skills-list">
                            {technicalSkills.codingLanguages.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="skills-box">
                        <h3>Frameworks and Tools:</h3>
                        <ul className="skills-list">
                            {technicalSkills.frameworksAndTools.map((tool, index) => (
                                <li key={index}>{tool}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Technical;
