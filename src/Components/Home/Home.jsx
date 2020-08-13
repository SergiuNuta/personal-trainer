import React, { Component } from "react";
import styles from "./Home.module.scss";
import Carousel from "react-bootstrap/Carousel";
import img from "../../data/images/dwayne.jpg";
import fitness from "../../data/images/fitness.png";
import scale from "../../data/images/smart-scale.png";
import calm from "../../data/images/calm.png";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className={styles.wrapper}>
                    <div className={styles.firstDiv}>
                        <Carousel
                            interval={3000}
                            className={`${styles.carousel} ${styles.fade}`}
                            fade={true}
                            pause={"hover"}
                            slide={true}
                            touch={true}
                            controls={false}>
                            <Carousel.Item className={styles.transition}>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    // alt="Gym guide"
                                    fluid
                                />
                                <Carousel.Caption className={styles.transition}>
                                    <h3>Gym guide</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className={styles.transition}>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    // alt="Second slide"
                                    fluid
                                />

                                <Carousel.Caption className={styles.transition}>
                                    <h3>Home guide</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className={styles.transition}>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    // alt="Third slide"
                                    fluid
                                />

                                <Carousel.Caption className={styles.transition}>
                                    {/* <h3>Third slide label</h3> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className={styles.testDiv}>
                        <div>
                            <h3>EAT</h3>
                            <svg
                                width="89"
                                height="69"
                                viewBox="0 0 89 69"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.8857 64.4733C-12.9882 55.103 4.28788 25.3301 22.5238 5.00771C96.1028 -16.2222 89.7661 36.08 88.1303 49.5808L88.109 49.7571C86.5094 62.9717 47.4782 76.1863 13.8857 64.4733Z"
                                    fill="#7ED1FF"
                                />
                            </svg>
                            <img src={fitness} alt="" />
                        </div>
                        <div>
                            <h3>SLEEP</h3>
                            <svg
                                width="105"
                                height="80"
                                viewBox="0 0 105 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.382 74.7517C-15.3232 63.8875 5.05873 29.3683 26.573 5.80604C113.38 -18.8084 105.904 41.8318 103.974 57.485L103.949 57.6894C102.062 73.0106 56.0136 88.3319 16.382 74.7517Z"
                                    fill="#F5DC56"
                                />
                            </svg>
                            <img src={scale} alt="" />
                        </div>
                        <div>
                            <h3>TRAIN</h3>
                            <svg
                                width="92"
                                height="80"
                                viewBox="0 0 92 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.137 67.4921C-11.5682 56.628 -1.37721 26.365 20.137 2.80276C92 -14.1221 92 50.4298 92 67.4921C92 84.5545 59.7685 81.0723 20.137 67.4921Z"
                                    fill="#FC9D5D"
                                />
                            </svg>
                            <img src={calm} alt="" />
                        </div>
                    </div>
                    {/* <div className={styles.secondDiv}>
                        <h1>Get</h1>
                        <h1>Victoria Fit Program.</h1>
                        <p>Step by step video workouts for home and gym to get fitter and stronger. </p>
                        <Button className={styles.button}>Click here</Button>
                    </div> */}
                </div>
            </>
        )
    }
}