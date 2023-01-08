import { useEffect } from "react";
import HeaderImage from "../../assets/header.jpg";
import AOS from "aos";
import data from "./data";
import "./header.css";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3 data-aos="fade-up">Frontend Developer devEQ</h3>
        <p data-aos="fade-up">
          호기심 많은 프론트엔드 개발자입니다.
          <br />
          늘 다양한것을 경험해보려 노력하고있습니다.
          <br />
          경험의 중요성을 잘 알기에 항상 도전하고 있습니다.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;
