import projectsJSON from "../../data/projects.json";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";

const Index = () => {
  const [projectsList, setProjectsList] = useState(projectsJSON);
  const projectCards = projectsList.map((project, index) => {
    return <ProjectCard key={index} project={project} />;
  });

  return (
    <>
          <div class="breadcrumbs text-sm">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/projects">Projects</a></li>
  </ul>
</div>
      <div class="container mx-auto px-4 py-12">

        <h2 class="text-3xl font-bold mb-4">My Projects</h2>
        <div class="grid grid-flow-col auto-cols-max grid-rows-2 gap-6">{projectCards}</div>
      </div>
    </>
  );
};

export default Index;
