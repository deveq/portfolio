import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import "./about.css";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/Card";
import data from "./data";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <a href={item.link} rel="noopener noreferrer" target="_blank">
                  <span className="about__card-icon">{item.icon}</span>
                </a>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            안녕하세요 프론트엔드개발자 장진영입니다
            <br />
            리액트 네이티브 앱 개발을 시작으로 재직중인 직장에서는 바닐라js로 웹
            개발을 하고 있으며
            <br />
            사이드프로젝트로 리액트 네이티브로 앱 개발(책그릇)을 하고 있습니다.
            <br />
            감사합니다!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
