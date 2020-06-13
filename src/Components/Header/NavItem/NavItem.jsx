import React, { Component } from "react";
import "./NavItem";
// import { Link } from "@reach/router";
import { Link, animateScroll as scroll } from "react-scroll"

export default class NavItem extends Component {
    render() {
        return (
            <>
                <Link
                    activeClass="active"
                    to={this.props.route}
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={700}
                >
                    {this.props.name}</Link>
            </>
        );
    }
}
