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
            document.querySelector("section").classList.add(styles.floating);
        } else {
            document.querySelector("section").classList.remove(styles.floating);
        }
    }

    openNav(event) {
        event.preventDefault()
        document.getElementById('myNav').style.width = "100%";
    }

    closeNav(event) {
        event.preventDefault()
        document.getElementById('myNav').style.width = "0%";
    }
    render() {
        return (
            <header className={styles.header}>
                <section>
                <div className={styles.menu} onClick={this.openNav}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>
                <h1>
                    <Link to="/home" className={styles.logo}>VN</Link>
                </h1>
                <div className={styles.shoppingBag}>
                    <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-bag" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z" />
                        <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
                    </svg>
                </div>
                </section>
                <nav className={styles.Nav} id="myNav">
                    <a className={styles.closebtn} onClick={this.closeNav}><span>&times;</span></a>
                    <ul className={styles.navList}>
                        <NavItem route="shop" name="Shop" customClickEvent={this.closeNav.bind(this)} />
                        <NavItem route="about" name="About" customClickEvent={this.closeNav.bind(this)} />
                        <NavItem route="cart" name="My Cart" customClickEvent={this.closeNav.bind(this)} />
                    </ul>
                </nav>
            </header>
        )
    }
}