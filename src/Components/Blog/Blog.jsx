import React, { Component } from "react";
import styles from "./Blog.module.scss";

export default class Blog extends Component {
    render() {
        return (
            <>
                <a name="blog" />
                <div className={styles.wrapper}>
                <div className={styles.firstContainer}></div>
                <div className={styles.secondContainer}>Blog</div>
            </div>
            </>
        )
    }
}