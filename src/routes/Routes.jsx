import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Shop from "../Components/Shop/Shop.jsx";
import About from "../Components/About/About";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import styles from "./Routes.module.scss";
import Footer from "../Components/Footer/Footer.jsx";



const NotFound = () => (<h2>Not Found</h2>);

export default class Routes extends Component {

    render() {
        return (
            <>
            <Router className={styles.wrapper}>
                {/* <Redirect noThrow from="/" to="home" /> */}
                {/* <NotFound default /> */}
            </Router>
            <Redirect noThrow from="/" to="home" />
            <Home path="home" />
            <Shop path="shop" name="shop" />
            <About path="about" name="about" />
            <FAQ path="faq" name="faq" />
            <Footer />
            </>
        );
    }
}