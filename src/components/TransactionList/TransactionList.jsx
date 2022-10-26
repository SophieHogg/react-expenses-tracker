import React, { useContext } from "react";
import styles from "./TransactionList.module.scss";
import { GlobalContext } from "../../context/GlobalState";
import Transaction from "../Transaction/Transaction";

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div className={styles.TransactionList}>
            <h3 className={styles.TransactionList__title}>History</h3>
            {transactions.length === 0 ? (
                <div className={styles.TransactionList__noTransactions}>
                    <h4
                        className={
                            styles.TransactionList__noTransactions__header
                        }
                    >
                        No transactions to display.
                    </h4>
                    <p className={styles.TransactionList__noTransactions__p}>
                        You can get started by entering a transaction below.
                    </p>
                </div>
            ) : (
                <ul>
                    {transactions.map((transaction) => (
                        <Transaction
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TransactionList;
