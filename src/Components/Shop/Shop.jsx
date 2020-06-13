import React, { Component } from "react";
import styles from "./Shop.module.scss";

export default class Shop extends Component {
    render() {
        return (
            <>
            <a name="shop" />
            <div className={styles.wrapper}>
            <div className={styles.firstContainer}></div>
            <div className={styles.secondContainer}>Shop</div>
            </div>
            </>
        )
    }
}