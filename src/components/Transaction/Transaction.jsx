import React, { useContext } from "react";
import styles from "./Transaction.module.scss";
import { GlobalContext } from "../../context/GlobalState";

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.value < 0 ? "-" : "+";
    const currency = "$";
    return (
        <li className={styles.Transaction}>
            <button
                className={styles.Transaction__delete}
                onClick={() => deleteTransaction(transaction.id)}
            >
                x
            </button>
            <div className={styles.Transaction__element}>
                {transaction.text}
                <span>
                    {sign} {currency}
                    {Math.abs(transaction.value)}
                </span>
            </div>
            <div
                className={
                    sign === "-"
                        ? styles.Transaction__line__minus
                        : styles.Transaction__line__plus
                }
            ></div>
        </li>
    );
};

export default Transaction;
