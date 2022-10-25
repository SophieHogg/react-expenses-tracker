import React from "react";
import styles from "./IncomeExpenses.module.scss";

const IncomeExpenses = () => {
    return (
        <div className={styles.IncomeExpenses}>
            <div className={styles.IncomeExpenses__income}>
                <h4 className={styles.IncomeExpenses__title}>INCOME</h4>
                <p className={styles.IncomeExpenses__value}>$0.00</p>
            </div>
            <div className={styles.IncomeExpenses__expenses}>
                <h4 className={styles.IncomeExpenses__title}>EXPENSES</h4>
                <p className={styles.IncomeExpenses__value}>$0.00</p>
            </div>
        </div>
    );
};

export default IncomeExpenses;
