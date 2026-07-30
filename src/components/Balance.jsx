function Balance({ balance }) {

  const formattedBalance = balance.toLocaleString("en-PK");


  return (

    <div className="balance">

      <h2>Your Balance</h2>

      <h1>
        Rs. {formattedBalance}
      </h1>

    </div>

  );

}


export default Balance;