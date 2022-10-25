import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.Header}>
            <h2 className={styles.Header__title}>Expense Tracker</h2>
        </div>
    );
};

export default Header;
