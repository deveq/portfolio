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
          프론트엔드 개발자를 희망하고 있습니다. 배운 모든 것을 기록하고
          공유하는 것을 좋아합니다. 공유의 중요성을 잘 알기에 항상 새기고
          실천하려고 노력합니다
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
