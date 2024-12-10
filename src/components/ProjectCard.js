import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
  // let project = props.project;

  let techBadges = project.technologies.map((technology, i) => {
    return <div class="badge badge-outline bg-secondary" key={i}>{technology}</div>
});

return (
  <div>
    <div className="card lg:card-side shadow-xl relative">
      {project.images && project.images.length > 0 && (
        <div
          className="absolute inset-0 bg-cover bg-center rounded"
          style={{
            backgroundImage: `url(${require(`../images/${project.images[0].url}`)})`,
            opacity: 0.4, 
          }}
        ></div>
      )}

      <div className="card-body relative z-10 text-black">
        <h2 className="card-title">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>{" "}
        </h2>
        <p>{project.description}</p>

        <div>{techBadges}</div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/projects/${project.slug}`}>View</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
);

};

export default ProjectCard;
