import React from "react";
import styles from "./Balance.module.scss";

const Balance = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.Balance}>
                <h4 className={styles.Balance__title}>BALANCE</h4>
                <h1 id="balance" className={styles.Balance__value}>
                    $0.00
                </h1>
            </div>
        </div>
    );
};

export default Balance;
