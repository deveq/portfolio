import { createContext, useContext, useState } from "react";
import projectData from "../sections/portfolio/data";

const ProjectModalContext = createContext();

export const ProjectModalProvider = ({ children }) => {
  const [item, setItem] = useState(projectData[0]);
  const [showProjectModal, setShowProjectModal] = useState(false);
  return (
    <ProjectModalContext.Provider
      value={{
        setShowProjectModal,
        showProjectModal,
        item,
        setItem,
      }}
    >
      {children}
    </ProjectModalContext.Provider>
  );
};

export const useProjectModal = () => {
  return useContext(ProjectModalContext);
};
