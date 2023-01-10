import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { forwardRef, useState } from "react";
import { useProjectModal } from "../../context/ProjectModalContext";
import ProjectsModal from "./ProjectsModal";

const Portfolio = (props, ref) => {
  const [projects, setProjects] = useState(data);
  const categories = data.map((item) => item.category).flat();
  const uniqueCategories = ["all", ...new Set(categories)];
  const { setShowProjectModal, setItem } = useProjectModal();
  const openProjectModal = (item) => {
    setItem(item);
    setShowProjectModal(true);
  };

  const filterProjectsHandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }
    const filteredProjects = data.filter((project) =>
      project.category.includes(category),
    );
    setProjects(filteredProjects);
  };
  return (
    <section id="portfolio" ref={ref}>
      <h2>Projects</h2>
      {/* <p>
        Check out some of the projects I recently worked on for my clients. Use
        the buttons to toggle the different categories.
      </p> */}
      <div className="container portfolio__container">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={filterProjectsHandler}
        />
        <Projects projects={projects} clickHandler={openProjectModal} />
      </div>
      <ProjectsModal className="portfolio__projects-modal" />
    </section>
  );
};

export default forwardRef(Portfolio);
// export default Portfolio;
