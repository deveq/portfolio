import Card from "./../../components/Card";

const Project = ({ project, clickHandler }) => {
  return (
    <Card
      className="portfolio__project"
      onClick={() => {
        clickHandler(project);
      }}
    >
      <div className="portfolio__project-image">
        <img src={project.image} alt="Portfolio Project" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      {/* <div className="portfolio__project-cta">
        <a
          href={project.demo}
          className="btn sm"
          target="_blank"
          rel="noopenner noreferrer"
        >
          Demo
        </a>
        <a
          href={project.github}
          className="btn sm primary"
          target="_blank"
          rel="noopenner noreferrer"
        >
          Github
        </a>
      </div> */}
    </Card>
  );
};

export default Project;
