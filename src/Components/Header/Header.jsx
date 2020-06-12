import React, { Component } from "react";
import NavItem from "./NavItem/NavItem";
import styles from "./Header.module.scss";

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <h1><a href="/home">Victoria Fit</a></h1>
                <nav>
                    <ul className={styles.navList}>
                        <NavItem  route="/home" name="Home" />
                        <NavItem route="shop" name="shop" />
                        <NavItem route="blog" name="blog" />
                        <NavItem route="about" name="about" />
                        <NavItem route="faq" name="FAQ" />
                        {/* <NavItem  route="/private/mycabinet" name="Cabinet" /> */}
                        {/* <NavItem  route="/login" name="Login" /> */}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;