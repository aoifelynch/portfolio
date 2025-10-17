import { useParams, Navigate } from "react-router-dom";
import projectsJSON from "../../data/projects.json";
import { useState, useEffect, lazy, Suspense } from "react";

const Show = () => {
  const [projectsList, setProjectsList] = useState(projectsJSON);
  const [project, setProject] = useState(null);
  const { slug } = useParams();

  const Demo = lazy(() => import(`./demos/${project?.demo}/App`));

  useEffect(() => {
    const found = projectsList.find((project) => project.slug === slug);
    setProject(found);
  }, [projectsList, slug]);

  if (project === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-lg font-semibold animate-pulse text-secondary">
          Loading...
        </h2>
      </div>
    );
  }

  let techBadges = project.technologies.map((technology, i) => {
    return <div class="badge badge-outline bg-secondary" key={i}>{technology}</div>
  });

  if (project === undefined) {
    return <Navigate to={`/projects/${slug}`} />;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <div className="text-sm breadcrumbs">
              <ul className="flex space-x-2 text-gray-600">
                <li>
                  <a href="/" className="hover:text-purple-600 transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-purple-600 transition-colors duration-300">
                    Projects
                  </a>
                </li>
                <li className="text-gray-800 font-medium">{project.title}</li>
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Project Header */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    {project.title}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="space-y-3">
                    {project.links.map((link, index) => (
                      <div key={index}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View {link.title}
                        </a>
                      </div>
                    ))}
                    {project.github && project.github !== "N/A" && (
                      <div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View GitHub
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Image */}
                <div className="order-first lg:order-last">
                  {project.images && project.images.length > 0 && (
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={require(`../../images/${project.images[0].url}`)}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Demo Section */}
            {project.demo && (
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Interactive Demo
                </h2>
                <div className="border-4 border-dashed border-purple-300 rounded-lg p-4">
                  <Suspense
                    fallback={
                      <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                        <p className="mt-4 text-gray-600">Loading demo...</p>
                      </div>
                    }
                  >
                    <Demo />
                  </Suspense>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
