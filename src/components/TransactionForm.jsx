import { useState } from "react";

function TransactionForm({ addTransaction }) {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");

  const [error, setError] = useState("");


  function handleSubmit(e) {

    e.preventDefault();


    if (name.trim() === "") {

      setError("Please enter transaction name");

      return;

    }


    if (amount === "" || Number(amount) <= 0) {

      setError("Please enter a valid amount");

      return;

    }


    const transaction = {

      name: name,

      amount: Number(amount),

      type: type

    };


    addTransaction(transaction);


    setName("");

    setAmount("");

    setType("Expense");

    setError("");

  }



  return (

    <div>

      <h2 className="form-heading">Add Transaction</h2>


      {error && (

        <p className="error-message">
          {error}
        </p>

      )}



      <form onSubmit={handleSubmit}>


        <input

          type="text"

          placeholder="Enter transaction name"

          value={name}

          onChange={(e) => setName(e.target.value)}

        />



        <input

          type="number"

          placeholder="Enter amount"

          value={amount}

          onChange={(e) => setAmount(e.target.value)}

        />



        <select

          value={type}

          onChange={(e) => setType(e.target.value)}

        >

          <option value="Income">
            Income
          </option>


          <option value="Expense">
            Expense
          </option>


        </select>



        <button type="submit">

          Add

        </button>


      </form>


    </div>

  );

}


export default TransactionForm;