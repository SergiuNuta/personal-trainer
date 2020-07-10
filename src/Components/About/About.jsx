import React, { Component } from "react";
import styles from "./About.module.scss";

export default class About extends Component {
    render() {
        return (
            <>
                <a name="about" />
                <div className={styles.wrapper}>
                    About
                </div>

            </>
        )
    }
}