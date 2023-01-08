import data from "./data";
import "./services.css";
import Card from "../../components/Card";

const Services = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <p>지금까지 경험해본 기술들</p>
      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
