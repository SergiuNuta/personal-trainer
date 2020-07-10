import React, { Component } from "react";
import NavItem from "./NavItem/NavItem";
import styles from "./Header.module.scss";
import { Link } from "@reach/router";

export default class Header extends Component {
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
                <h1>
                    <Link to="/home" className={styles.logo}>Victoria Fit</Link>
                </h1>
                <nav className={styles.Nav}>
                    <ul className={styles.navList}>
                        <NavItem route="shop" name="Shop" />
                        <NavItem route="about" name="About" />
                        <NavItem route="cart" name="My Cart" />
                    </ul>
                </nav>
            </header>
        )
    }
}