import React, { Component } from "react";
import { Redirect } from "@reach/router";
import Shop from "../Components/Shop/Shop.jsx";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Footer from "../Components/Footer/Footer.jsx";



const NotFound = () => (<h2>Not Found</h2>);

export default class Routes extends Component {

    render() {
        return (
            <>
            <Redirect noThrow from="/" to="home" />
            <Home path="home" />
            <Shop path="shop" name="shop" />
            {/* <About path="about" name="about" /> */}
            <Footer />
            </>
        );
    }
}