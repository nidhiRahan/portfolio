import React from "react";

import styles from "./project.module.css";
import projectCoverImg from "../asset/project-cover10.png";
import ProjectItem from "./ProjectItem";
import ProjectsData from "../../Data/ProjectsData";
import SocialData from "../../Data/SocialData";
import Button from "../UI/Button";

import ProgrammingSkills from "../Professional Skillset/ProgrammingSkills";
import { useSelector } from "react-redux";

const Projects = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    let projects = ProjectsData.DUMMY_PROJECTS;
    return (
        <div id="projects">
            <div className={styles.projects}>
                <section className={styles.projectImg}>
                    <img src={projectCoverImg} alt="" />
                </section>
                <section className={styles.projectHeader}>
                    <h1>
                        <span style={{ color: nonThemeColor }}>My Recent </span>
                        <span style={{ color: uiColor }}> Work – Java Developer</span>
                    </h1>

                    <div>
                        Developed and maintained scalable backend applications using Java, Spring Boot, and Microservices architecture.
                    </div>

                    <div>
                        Designed and implemented RESTful APIs to support business workflows and seamless frontend integration.
                    </div>

                    <div>
                        Worked extensively with Hibernate and JPA to optimize database queries and improve application performance.
                    </div>

                    <div>
                        Implemented secure authentication and authorization mechanisms using Spring Security and JWT.
                    </div>

                    <div>
                        Built and enhanced modular microservices to improve system scalability, maintainability, and deployment efficiency.
                    </div>

                    <div>
                        Integrated relational databases such as MySQL and PostgreSQL, ensuring data consistency and efficient transactions.
                    </div>

                    <div>
                        Actively collaborated with cross-functional teams in an Agile (Scrum) environment and resolved production issues through root cause analysis.
                    </div>
                </section>

            </div>
            <ProgrammingSkills />
            <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>My Projects</h1>
            <div className={styles.projectList}>
                {projects.map((item, index) => {
                    return <ProjectItem key={index} project={item} />
                })}
            </div>
            <div className={styles.moreProject}>
                <a target="_blank" rel="noreferrer" href={`${SocialData.githubLink}?tab=repositories`}>
                    <Button className={styles.moreProjectBtn}>More Projects</Button>
                </a>
            </div>
        </div>
    )
};

export default Projects;