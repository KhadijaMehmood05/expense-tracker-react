function TransactionList({ transactions, deleteTransaction }) {

  return (
    <div>

      <h2>Transactions</h2>


      {transactions.length === 0 ? (

        <p className="empty-message">
          No transactions yet. Start adding your income and expenses.
        </p>

      ) : (


        <ul>

          {transactions.map((transaction, index) => (


            <li
              key={index}
              className={
                transaction.type === "Income"
                  ? "income-transaction"
                  : "expense-transaction"
              }
            >


              <div className="transaction-info">


                <h3>

                  {transaction.type === "Income"
                    ? "💰"
                    : "💸"
                  }{" "}

                  {transaction.name}

                </h3>


                <p>
                  {transaction.type}
                </p>


              </div>



              <div className="transaction-right">


                <h3
                  className={
                    transaction.type === "Income"
                      ? "income-amount"
                      : "expense-amount"
                  }
                >

                  {transaction.type === "Income"
                    ? "+"
                    : "-"
                  } Rs. {transaction.amount.toLocaleString("en-PK")}

                </h3>



                <button
                  onClick={() => deleteTransaction(index)}
                >

                  Delete

                </button>


              </div>


            </li>


          ))}


        </ul>

      )}


    </div>
  );
}


export default TransactionList;