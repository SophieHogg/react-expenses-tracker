import styles from "./App.module.scss";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import Balance from "./components/Balance/Balance";
import Header from "./components/Header/Header";
import IncomeExpenses from "./components/IncomeExpenses/IncomeExpenses";
import TransactionList from "./components/TransactionList/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <div className={styles.body}>
                <Header />
                <div className={styles.body__app}>
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;
