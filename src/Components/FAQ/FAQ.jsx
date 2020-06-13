import React, { Component } from "react";
import styles from "./FAQ.module.scss";

export default class FAQ extends Component {
    render() {
        return (
            <>
            <a name="faq" />
            <div className={styles.wrapper}>
            <div className={styles.firstContainer}></div>
            <div className={styles.secondContainer}>FAQ</div>
            </div>
            </>
        )
    }
}