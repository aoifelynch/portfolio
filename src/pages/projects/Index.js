import projectsJSON from "../../data/projects.json";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";

const Index = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON)
    const projectCards = projectsList.map((project, index) => {
        return (
            <ProjectCard key={index} project={project}/>
        );
    })

    return(
        <>
        <h1>Projects:</h1>
        {projectCards}
        </>
    );

};

export default Index;