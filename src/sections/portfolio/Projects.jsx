import Project from "./Project";

const Projects = ({ projects, clickHandler }) => {
  return (
    <div className="portfolio__projects" data-aos="fade-up">
      {projects.map((project, index) => (
        <Project
          key={project.id}
          project={project}
          clickHandler={clickHandler}
          index={index}
        />
      ))}
    </div>
  );
};

export default Projects;
