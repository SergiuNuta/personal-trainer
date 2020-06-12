import React, { Component } from "react";
import styles from "./Blog.module.scss";

export default class Blog extends Component {
    render() {
        return (
            <>
                <a name="Blog" />
                <div className={styles.wrapper}>
                    Blog
            </div>
            </>
        )
    }
}