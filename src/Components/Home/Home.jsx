import React, { Component } from "react";
import styles from "./Home.module.scss";

export default class Home extends Component {
    render() {
        return (
            <>
            <div className={styles.wrapper}>
            <div className={styles.firstDiv}></div>
            <div className={styles.secondDiv}>
                <h2>Buy my products!</h2>
            </div>
            </div>
            </>
        )
    }
}