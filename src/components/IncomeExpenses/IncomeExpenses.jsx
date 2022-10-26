import React, { useContext } from "react";
import styles from "./IncomeExpenses.module.scss";
import { GlobalContext } from "../../context/GlobalState";

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const totalValue = transactions.map((transaction) => transaction.value);

    const income = totalValue
        .filter((item) => item > 0)
        .reduce((partialSum, a) => partialSum + a, 0)
        .toFixed(2);
    const expenses = totalValue
        .filter((item) => item < 0)
        .reduce((partialSum, a) => partialSum + a, 0);

    return (
        <div className={styles.IncomeExpenses}>
            <div className={styles.IncomeExpenses__income}>
                <h4 className={styles.IncomeExpenses__title}>INCOME</h4>
                <p className={styles.IncomeExpenses__value}>${income}</p>
            </div>
            <div className={styles.IncomeExpenses__expenses}>
                <h4 className={styles.IncomeExpenses__title}>EXPENSES</h4>
                <p className={styles.IncomeExpenses__value}>
                    -${Math.abs(expenses).toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default IncomeExpenses;
