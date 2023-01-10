import { useRef, useState, useEffect, useCallback } from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/ThemeContext";
import { useProjectModal } from "./context/ProjectModalContext";
import projectData from "./sections/portfolio/data";
import { getQueryString } from "./utils/utils";

const App = () => {
  const mainRef = useRef();
  const portfolioRef = useRef();
  const { themeState } = useThemeContext();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);
  const { setShowProjectModal, setItem } = useProjectModal();

  useEffect(() => {
    if (location.search) {
      setTimeout(() => {
        const qs = getQueryString(location.search);
        if (
          qs.num &&
          !isNaN(parseInt(qs.num)) &&
          projectData.length > qs.num &&
          qs.num >= 0
        ) {
          portfolioRef.current?.scrollIntoView({
            behavior: "smooth",
          });
          setItem(projectData[qs.num]);
          setShowProjectModal(true);
        }
      }, 500);
    }
  }, [location]);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  const floatingNavToggleHandler = () => {
    // 20px 이상 스크롤 할 경우
    if (
      siteYPosition < mainRef?.current.getBoundingClientRect().y - 20 ||
      siteYPosition < mainRef?.current.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);
    return () => {
      clearInterval(checkYPosition);
    };
  }, [siteYPosition]);

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio ref={portfolioRef} />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
      {/* <Thumbnail /> */}
    </main>
  );
};

export default App;
