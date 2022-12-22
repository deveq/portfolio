import Card from "../../components/Card";
import ReactDOM from "react-dom";
import { useModalContext } from "../../context/ModalContext";
import { useProjectModal } from "../../context/ProjectModalContext";
import { IoIosClose } from "react-icons/io";
import "../../components/modal.css";

// const data = [
//   {
//     id: 1,
//     category: "uiux",
//     image: Image1,
//     title: "Project Title One (UIUX)",
//     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
//     demo: "http://egatortutorials.com",
//     github: "https://github.com/egattor",
//   },
// ]
const Modal = ({ className }) => {
  const { showProjectModal, setShowProjectModal, item } = useProjectModal();
  const closeModalHandler = () => {
    setShowProjectModal(false);
  };
  return (
    <>
      {showProjectModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}></section>
            <Card className={className}>
              <div className="close" onClick={closeModalHandler}>
                <IoIosClose />
              </div>
              <div className="portfolio__modal-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              {/* <h4>{item.category}</h4> */}
              <ul className="category">
                {item.category.map((category) => (
                  <li key={category}>
                    <span>{category}</span>
                  </li>
                ))}
                {item.skills.map((skill) => (
                  <li key={skill}>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <ul className="skills">
                {/* {item.skills.map((skill) => (
                  <li key={skill}>
                    <span>{skill}</span>
                  </li>
                ))} */}
              </ul>
              <div className="description">
                <h4>Description</h4>
                <p>
                  {item.desc}
                  <br />
                  {item.extra}
                </p>
              </div>
              <div className="role">
                <h4>Role</h4>
                <ul className="role-list">
                  {item.role.map((role, index) => (
                    <li key={index}>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="extra">
                <h4>What I Learned</h4>
                <p>{item.learned}</p>
              </div>

              <div className="portfolio__project-cta">
                <a
                  href={item.demo}
                  className={`btn sm ${item.demo ? "" : "disabled"}`}
                  target="_blank"
                  rel="noopenner noreferrer"
                >
                  Demo
                </a>
                <a
                  href={item.github}
                  className={`btn sm primary ${item.github ? "" : "disabled"}`}
                  target="_blank"
                  rel="noopenner noreferrer"
                >
                  Github
                </a>
              </div>
            </Card>
          </>,
          document.querySelector("#overlays"),
        )}
    </>
  );
};

export default Modal;
