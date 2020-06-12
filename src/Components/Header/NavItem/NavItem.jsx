import React, { Component } from "react";
import "./NavItem";
import { Link } from "@reach/router";

export default class NavItem extends Component {
    render() {
        return (
            <>
                <Link to={this.props.route}>{this.props.name}</Link>
            </>
        );
    }
}