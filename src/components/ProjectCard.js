import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  let project = props.project;

  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title"><Link to={`/projects/${project.slug}`}>{project.title}</Link>{" "}</h2>
          <p>{project.description}{" "}</p>

            <div class="badge badge-outline bg-secondary">{project.technologies}</div>
          
          <div class="card-actions justify-end">
            <button class="btn btn-primary"><Link to={`/projects/${project.slug}`}>View</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
