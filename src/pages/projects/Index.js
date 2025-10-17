import projectsJSON from "../../data/projects.json";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import FilterProjects from '../../components/FilterProjects';

const Index = () => {
  // Sort projects by date (newest to oldest)
  const sortedProjects = [...projectsJSON].sort((a, b) => {
    // Convert DD/MM/YYYY format to Date objects for comparison
    const dateA = new Date(a.date.split('/').reverse().join('/'));
    const dateB = new Date(b.date.split('/').reverse().join('/'));
    return dateB - dateA; // Newest first
  });

  const [projectsList, setProjectsList] = useState(sortedProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState(sortedProjects);
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
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Web Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore my web development projects including React applications, responsive websites, 
              and full-stack solutions. Each project showcases different technologies and problem-solving approaches.
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-12">
            <FilterProjects setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCards}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
