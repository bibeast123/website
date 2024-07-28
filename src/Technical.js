import React from 'react';
import './App.css';

function Technical() {
    const technicalSkills = {
        languages: ["Java", "Python", "C/C++", "Kotlin", "TypeScript", "JavaScript", "HTML/CSS", "SQL"],
        frameworksAndLibraries: ["React", "Angular", "Node.js", "Flask", "FastAPI", "Selenium", "TensorFlow", "pandas", "NumPy", "Matplotlib"],
        tools: ["Git", "Docker", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse", "Jupyter", "Postman"],
        platformsAndServices: ["AWS", "Azure Databricks", "Kubernetes", "Microsoft Office", "Tableau", "JIRA", "Android Studio"]
    };

    return (
        <section id="technical" className="technical-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="technical-box">
                <div className="skills-list">
                    <p><strong>Languages:</strong> {technicalSkills.languages.join(', ')}</p>
                    <p><strong>Frameworks & Libraries:</strong> {technicalSkills.frameworksAndLibraries.join(', ')}</p>
                    <p><strong>Tools:</strong> {technicalSkills.tools.join(', ')}</p>
                    <p><strong>Platforms & Services:</strong> {technicalSkills.platformsAndServices.join(', ')}</p>
                </div>
            </div>
        </section>
    );
}

export default Technical;
