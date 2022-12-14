import { useEffect, useState } from "react";
import HeaderImage from "../../assets/header.jpg";
import AOS from "aos";
import data from "./data";
import "./header.css";
import "aos/dist/aos.css";
import useBuildDate from "../../hooks/useBuildDate";

const Header = () => {
  const buildDate = useBuildDate();

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
            Contact
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <div key={item.id}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
              >
                {item.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
      {buildDate && (
        <div className="header__build-date">
          <span>Last updated: {buildDate}</span>
        </div>
      )}
    </header>
  );
};
export default Header;
