function IncomeExpense({ income, expense }) {


  return (

    <div className="summary">


      <div className="income-box">

        <h3>Income</h3>

        <h2>
          Rs. {income.toLocaleString("en-PK")}
        </h2>

      </div>



      <div className="expense-box">

        <h3>Expense</h3>

        <h2>
          Rs. {expense.toLocaleString("en-PK")}
        </h2>

      </div>


    </div>

  );

}


export default IncomeExpense;