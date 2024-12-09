import { useParams, Navigate } from "react-router-dom";
import projectsJSON from "../../data/projects.json";
import { useState, useEffect, lazy, Suspense } from "react";

const Show = () => {
  const [projectsList, setProjectsList] = useState(projectsJSON);
  const [project, setProject] = useState(null);
  const { slug } = useParams();

  const Demo = lazy(() => import(`./demos/${project.demo}/App`));

  useEffect(() => {
    const found = projectsList.find((project) => {
      return project.slug === slug;
    });
    setProject(found);
  }, []);

  if (project === null) return <h2>Loading...</h2>;
  if (project === undefined) return <Navigate to={`/projects/${slug}`} />;

  return (
    <>
      <div class="breadcrumbs text-sm">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>{`${slug}`}</li>
        </ul>
      </div>
      <h1>Title: {project.title}</h1>
      <p>{project.description}</p>
      <p>{project.technologies}</p>

      {project.demo ? (
        <Suspense fallback={"Loading..."}>
          <h2 className="font-bold underline">Demo</h2>
          <Demo />
        </Suspense>
      ) : (
        ""
      )}
    </>
  );
};

export default Show;
