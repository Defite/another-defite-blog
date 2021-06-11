import * as React from "react"
import { Link } from "gatsby";
import { header, logoLink } from "./styles.module.css";
import * as T from "./Header.types";
import Nav from "../Nav/Nav";

const Header: React.FunctionComponent<T.IHeader> = ({ title }) => {
    return (
        <header className={header}>
            <Link className={logoLink} to="/">{title}</Link>
            <Nav />
        </header>
    )
}

export default Header;