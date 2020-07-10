import React, { Component } from "react";
import styles from "./Home.module.scss";
import Carousel from "react-bootstrap/Carousel";
import img from "../../data/images/dwayne.jpg";
import Button from "react-bootstrap/Button";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className={styles.wrapper}>
                    <div className={styles.firstDiv}>
                        <Carousel interval={3000} className={`${styles.carousel} ${styles.fade}`} controls={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    // alt="First slide"
                                    fluid
                                />
                                <Carousel.Caption>
                                    {/* <h3>First slide label</h3> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    // alt="Second slide"
                                    fluid
                                />

                                <Carousel.Caption>
                                    {/* <h3>Second slide label</h3> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    // alt="Third slide"
                                    fluid
                                />

                                <Carousel.Caption>
                                    {/* <h3>Third slide label</h3> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className={styles.secondDiv}>
                        <h1>Get</h1>
                        <h1>Victoria Fit Program.</h1>
                        <p>Step by step video workouts for home and gym to get fitter and stronger. </p>
                        <Button className={styles.button}>Click here</Button>
                    </div>
                </div>
            </>
        )
    }
}