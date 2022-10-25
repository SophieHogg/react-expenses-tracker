import React from "react";
import styles from "./TransactionList.module.scss";

const TransactionList = () => {
    return (
        <div className={styles.TransactionList}>
            <h3 className={styles.TransactionList__title}>History</h3>
            <ul>
                <li className={styles.TransactionList__element}>
                    Cash <span>-$400</span>
                    {/* will be transaction component, therefore am not styling this element */}
                </li>
            </ul>
        </div>
    );
};

export default TransactionList;
