//Experience.js
import React from 'react';
import './App.css'; // Ensure you have this CSS file

function Experience() {
    const experiences = [
        {
            company: "AT&T",
            position: "Software Engineer Intern",
            date: "06/2024 - Present",
            descriptions: [
                "• Developed and implemented a Generative AI automation tool using React, Azure, Databricks, and FastAPI, streamlining audit tax request processing by 35%, and presenting to the CEO and board of directors",
                "• Engineered an innovative call center solution integrating Python, Flask, and React, augmented with a custom language model for instantaneous transcription, and boosting response time by 55% (patent pending)",
                "• Directed the creation of an Audit Tax Summarizer UI, reducing manual processing time by 45% and enhancing team efficiency by streamlining audit report generation for a 20% increase in productivity",
            ]
        },
        {
            company: "AT&T",
            position: "Software Engineer Intern",
            date: "06/2023 - 08/2023",
            descriptions: [
                "• Developed an AI Data Usage Optimizer using Flask, Python, and HTML/CSS for proactive data plan adjustments, increasing customer retention and satisfaction by 33% (patent pending)",
                "• Enhanced TOM application using Angular, Java, SQL, and REST APIs, significantly improving functionality and user experience, leading to increased user satisfaction by 50% for 2,000 weekly unique users",
                "• Implemented a scalable bug-tracking system using JIRA, which improved issue resolution time by 30% and contributed to a $10,000 cost saving",
            ]
        },
        {
            company: "Federal Aviation Administration",
            position: "Data Analyst Intern",
            date: "06/2022 - 05/2023",
            descriptions: [
                "• Maintain monthly reports on clearance activity for all FAA ASH employees utilizing Excel and Tableau to support the Department of Security and Hazardous Materials Safety",
                "• Created a Python script to web scrape FAA’s external documents, identifying over 3,000 instances of exclusive language, aiding in policy recommendations.",
                "• Developed a policy recommendation to change the language use in all of FAA's policies to inclusive language, which will affect all of the agency's 45,000 employees",
            ]
        },
        // Add more experiences as needed
    ];

    return (
        <section id="experience" className="experience">
            <h2>Professional Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-item-header">
                            <h3>{exp.company}</h3>
                            <p><strong>{exp.position}</strong></p>
                            <p className="timeline-date">{exp.date}</p>
                        </div>
                        <div className="timeline-item-description">
                            {exp.descriptions.map((desc, descIndex) => (
                                <p key={descIndex}>{desc}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
