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
    <div className="breadcrumbs text-sm ml-2">
        <ul>
          <li>
            <a href="/" className="link link-hover">
              Home
            </a>
          </li>
          <li>
            <a href="/projects" className="link link-hover">
              Projects
            </a>
          </li>
          <li className="text-neutral">{slug}</li>
        </ul>
      </div>
    <div className="p-4 max-w-4xl mx-auto space-y-6">
      {/* Project Details */}
      <div className="card bg-base-200 shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold text-primary">{project.title}</h1>
        <p className="text-base">{project.description}</p>
        {project.links.map((link, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-xl font-bold text-primary">{link.title}</h4>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base underline "
            >
              {link.url}
            </a>
          </div>
        ))}
        <div>
          <h2 className="text-lg font-bold text-primary">
            Technologies Used:
          </h2>
          <div>{techBadges}</div>
        </div>
      </div>

      {/* Demo Section */}
      {project.demo ? (
        <div className="mt-6">
          <h2 className="text-center text-2xl font-bold text-accent mb-4">
            Demo
          </h2>
          <Suspense
            fallback={
              <div className="text-center text-secondary animate-pulse">
                Loading demo...
              </div>
            }
          >
            <Demo />
          </Suspense>
        </div>
      ) : (
        <div className="alert alert-warning">
          <p>No built-in demo available for this project, please see link above.</p>
        </div>
      )}
    </div>
    </>
  );
};

export default Show;
