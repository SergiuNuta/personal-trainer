import React from "react";
import styles from "./Shop.module.scss";

import img1 from "../../data/images/IMG_9210.jpg";
import img2 from "../../data/images/IMG_9212.jpg";



export default function Shop({ stripeToken }) {

    return (
        <>
            <a name="shop" />
            <div className={styles.shopWrapper}>
                <div className={styles.firstProgram}>
                    <img src={img1} alt="" className={styles.image} />
                    <h3>Loose fat</h3>
                    <section className={styles.priceTag}>
                        <h4>£29.99</h4>
                        <input type="button" value="add to cart" className={styles.button} />
                    </section>
                </div>
                <div className={styles.secondProgram}>
                    <img src={img2} alt="" className={styles.image} />
                    <h3>Build muscles</h3>
                    <section className={styles.priceTag}>
                        <h4>£29.99</h4>
                        <input type="button" value="add to cart" className={styles.button} />
                    </section>
                </div>

            </div>
        </>
    )

}