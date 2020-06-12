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
                        <NavItem route="shop" name="Shop" />
                        <NavItem route="blog" name="Blog" />
                        <NavItem route="about" name="About" />
                        <NavItem route="faq" name="FAQ" />
                        <NavItem route="cart" name="My Cart" />
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;