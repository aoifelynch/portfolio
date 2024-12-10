import projectsJSON from "../../data/projects.json";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import FilterProjects from '../../components/FilterProjects';

const Index = () => {
  const [projectsList, setProjectsList] = useState(projectsJSON);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState(projectsJSON);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredList(projectsList);
    } else if (searchTerm.length > 1) {
      const result = projectsList.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredList(result);
    }
  }, [searchTerm, projectsList]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredList(projectsList);
    } else {
      const result = projectsList.filter((project) =>
        project.categories.includes(selectedCategory)
      );
      setFilteredList(result);
    }
  }, [selectedCategory, projectsList]);

  const projectCards = filteredList.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ));

  return (
    <>
      <div className="breadcrumbs text-sm ml-2">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="gap-4 mb-6">
        <FilterProjects setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCards}
        </div>
      </div>
    </>
  );
};

export default Index;
