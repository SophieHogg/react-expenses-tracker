import React, { useContext } from "react";
import styles from "./Balance.module.scss";
import { GlobalContext } from "../../context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const totalValue = transactions
        .map((transaction) => transaction.value)
        .reduce((partialSum, a) => partialSum + a, 0);
    const sign = totalValue >= 0 ? "" : "- ";
    return (
        <div className={styles.wrapper}>
            <div className={styles.Balance}>
                <h4 className={styles.Balance__title}>BALANCE</h4>
                <h1 id="balance" className={styles.Balance__value}>
                    {sign}${Math.abs(totalValue).toFixed(2)}
                </h1>
            </div>
        </div>
    );
};

export default Balance;
