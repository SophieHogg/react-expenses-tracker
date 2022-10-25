import React from "react";
import styles from "./AddTransaction.module.scss";

const AddTransaction = () => {
    return (
        <div className={styles.AddTransaction}>
            <h3 className={styles.AddTransaction__title}>
                Add new transaction
            </h3>
            <form className={styles.AddTransaction__form}>
                <label
                    for="text"
                    className={styles.AddTransaction__form__label}
                >
                    Title
                </label>
                <input
                    type="text"
                    id="text"
                    placeholder="Enter name"
                    className={styles.AddTransaction__form__input}
                />
                <label
                    for="amount"
                    className={styles.AddTransaction__form__label}
                >
                    Amount
                </label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Enter amount ($)"
                    className={styles.AddTransaction__form__input}
                />
                <div className={styles.AddTransaction__form__buttonwrapper}>
                    <button className={styles.AddTransaction__form__button}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTransaction;
