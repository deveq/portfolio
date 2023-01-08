import data from "./data";
import Scrollspy from "react-scrollspy";
import "./floating-nav.css";
import Nav from "./Nav";

// 태블릿, 모바일용 navbar
const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy
        className="scrollspy"
        items={["header", "about", "skills", "portfolio", "contact"]}
        currentClassName="active"
        offset={-200}
      >
        {data.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
