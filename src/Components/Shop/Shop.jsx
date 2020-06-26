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
                <div className={styles.firstContainer}>
                <Card className={styles.card}>
                        <Card.Img className={styles.Img} variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={styles.secondContainer}>
                    <Card className={styles.card}>
                        <Card.Img className={styles.Img} variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )

}