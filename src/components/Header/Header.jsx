import { NavLink } from "react-router-dom"
import css from "./Header.module.css"
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export default function Header() {
    return (
        <div className={css.headerWrapper}>
             <div className="container">
            <div className={css.header}>
            <NavLink to="/">
          <svg width="104" height="16" stroke="currentColor" style={{ cursor: "pointer" }}>
            <use href="/sprite.svg#icon-Logo" />
          </svg>
        </NavLink>
            <nav className={css.nav}>
            <NavLink className={buildLinkClass} to="/">Home</NavLink>
            <NavLink className={buildLinkClass} to ="/catalog">Catalog</NavLink>
        </nav>
        </div>
        </div>
        
        </div>
       
        
    )
}