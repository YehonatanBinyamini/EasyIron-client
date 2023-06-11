import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import "./footer.css";

function Footer(){
  const { y: scrollY } = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollY]);

  return (
    <footer className={`footer ${isVisible ? "visible" : ""}`}>
      <h4>EasyIron</h4>
      <p>כל הזכויות שמורות</p>
    </footer>
  );
};

export default Footer;
