import * as React from "react";
import { Link } from "gatsby";
import { navList, navItem, navLink } from "./nav.module.css";

const Nav: React.FunctionComponent = () => {
    return (
        <nav>
            <ul className={navList}>
                <li className={navItem}><Link className={navLink} to="/">Home</Link></li>
                <li className={navItem}><Link className={navLink} to="/blog">Blog</Link></li>
                <li className={navItem}><Link className={navLink} to="/projects">Projects</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;