import Logo from "../../assets/logo.jpg";
import data from "./data";
import { IoIosColorPalette } from "react-icons/io";
import "./navbar.css";
import { useModalContext } from "../../context/ModalContext";

// 큰 디바이스용 Navbar
const Navbar = () => {
  const { showModalHandler } = useModalContext();
  return (
    <nav>
      <div className="container nav__container">
        <a href="/" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={showModalHandler}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
