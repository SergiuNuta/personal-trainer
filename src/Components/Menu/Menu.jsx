import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
    render() {
        return (
            <>
            <nav className="menu">
                <ul>shop</ul>
                <ul>blog</ul>
                <ul>about</ul>
                <ul>FAQ</ul>
                <ul>Shoping card</ul>
            </nav>
            </>
        )
    }
}
