import { NavLink } from "react-router-dom"
import css from "./Header.module.css"
import clsx from "clsx";
import { useTheme } from "../../utils/useTheme";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export default function Header() {

  const { theme, toggleTheme } = useTheme();

    return (
        <div className={css.headerWrapper}>
             <div className="container">
          <div className={css.header}>
              <NavLink to="/">
          <svg width="104" height="16" stroke="currentColor">
            <use href="/sprite.svg#icon-Logo" />
          </svg>
            </NavLink>

           
              <label className={css.themeSwitch}>
              <span className={css.labelText}>Light</span>
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
                aria-label="Toggle theme"
              />
              <span className={css.slider}>
                <span className={`${css.icon} ${css.sun}`}></span>
                <span className={`${css.icon} ${css.moon}`}></span>
              </span>
              <span className={`${css.labelText} ${css.labelTextDark}`}>Dark</span>
            </label>
            
            

            <nav className={css.nav}>
            <NavLink className={buildLinkClass} to="/">Home</NavLink>
              <NavLink className={buildLinkClass} to="/catalog">Catalog</NavLink>
              
        </nav>
            
            
        </div>
        </div>
        
        </div>
       
        
    )
}