import React from "react";
import styles from "./Shop.module.scss";
// import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import img from "../../data/images/person.jpg";
import Card from "react-bootstrap/Card";
import img2 from "../../data/images/scrabble.jpg";

export default function Shop({ stripeToken }) {

    return (
        <>
            <a name="shop" />
            <div className={styles.shopWrapper}>
                <div className={styles.firstDiv}>first program</div>
                <div className={styles.secondDiv}>second program</div>

            </div>
        </>
    )

}