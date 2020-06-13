import React, { Component } from "react";
import NavItem from "./NavItem/NavItem";
import styles from "./Header.module.scss";

class Header extends Component {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY >= 20) {
            document.querySelector("nav").classList.add(styles.floating);
        } else {
            document.querySelector("nav").classList.remove(styles.floating);
        }
    }
    render() {
        return (
            <header className={styles.header}>
                <h1><a href="/home">Victoria Fit</a></h1>
                <nav className={styles.Nav}>
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