//where we create context - in larger apps, we would need more state files
// in this size of application, this is fine.
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: [
        { id: 1, text: "Sushi", value: -20 },
        { id: 2, text: "Fortnightly pay", value: 800 },
        { id: 3, text: "Language book", value: -80 },
        { id: 4, text: "Selling lemonade", value: 23 },
    ],
};

//passing GlobalContext to elements wrapped in provider
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        });
    }
    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
