import React, { useContext, useState } from "react";
import styles from "./AddTransaction.module.scss";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [value, setValue] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        if (value === false || value === isNaN || text === "") {
        } else {
            const newTransaction = {
                id: uuidv4(),
                text,
                value: parseFloat(value),
            };
            addTransaction(newTransaction);
        }
    };

    return (
        <div className={styles.AddTransaction}>
            <h3 className={styles.AddTransaction__title}>
                Add new transaction
            </h3>
            <form className={styles.AddTransaction__form} onSubmit={onSubmit}>
                <label
                    htmlFor="text"
                    className={styles.AddTransaction__form__label}
                >
                    Title
                </label>
                <input
                    type="text"
                    id="text"
                    placeholder="Enter name"
                    className={styles.AddTransaction__form__input}
                    defaultValue={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {text === "" ? (
                    <p className={styles.AddTransaction__form__prompt}>
                        Please enter your text here.
                    </p>
                ) : (
                    ""
                )}
                <label
                    htmlFor="amount"
                    className={styles.AddTransaction__form__label}
                >
                    Amount
                </label>
                <input
                    type="number"
                    id="value"
                    placeholder="Enter amount ($)"
                    className={styles.AddTransaction__form__input}
                    defaultValue={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                {value === 0 || value === isNaN ? (
                    <p className={styles.AddTransaction__form__prompt}>
                        Please ensure you enter a non-zero number.
                    </p>
                ) : (
                    ""
                )}
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
