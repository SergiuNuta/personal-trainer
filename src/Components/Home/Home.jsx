import React, { Component } from "react";
import styles from "./Home.module.scss";

export default class Home extends Component {
    render() {
        return (
            <>
            <div className={styles.wrapper}>
            <div className={styles.firstDiv}></div>
            <div className={styles.secondDiv}>
                <h1>Get</h1>
                <h1>Victoria Fit Program.</h1>
            </div>
            </div>
            </>
        )
    }
}