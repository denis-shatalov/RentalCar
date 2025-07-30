import { useState, useEffect } from "react";
import css from "./ScrollToTopButton.module.css";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    isVisible && (
      <button className={css.scrollToTop} onClick={scrollToTop}>
              <svg
                  className={css.icon}
                  width="26"
                  height="26"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
              >
                  <use href="/sprite.svg#icon-Vector" />
              </svg>

      </button>
    )
  );
}