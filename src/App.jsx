import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";


function App() {

  const [transactions, setTransactions] = useState(() => {

    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [];

  });


  useEffect(() => {

    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );

  }, [transactions]);



  function addTransaction(transaction) {

    setTransactions([
      ...transactions,
      transaction
    ]);

  }



  function deleteTransaction(index) {

    const updatedTransactions = transactions.filter(
      (transaction, i) => i !== index
    );

    setTransactions(updatedTransactions);

  }



  const income = transactions
    .filter((transaction) => transaction.type === "Income")
    .reduce(
      (total, transaction) =>
        total + transaction.amount,
      0
    );


  const expense = transactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce(
      (total, transaction) =>
        total + transaction.amount,
      0
    );


  const balance = income - expense;



  return (

    <div className="container">

      <Header />


      <p className="subtitle">
        Manage your income and expenses easily
      </p>


      <Balance balance={balance} />


      <IncomeExpense
        income={income}
        expense={expense}
      />


      <TransactionForm
        addTransaction={addTransaction}
      />


      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />


    </div>

  );

}


export default App;