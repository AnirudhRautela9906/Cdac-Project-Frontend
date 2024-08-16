import React, { useEffect, useState } from 'react';
import './TransactionTable.scss';
import { useSelector } from 'react-redux';
const TransactionTable = () => {
  const { user } = useSelector( state => state.user );
  const [transactions, setTransaction ] = useState();


  
 useEffect(()=>{
  
    setTransaction(user?.transactions);
    console.log(user?.transactions);
  
 },[user])
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Transaction Code</th>
          <th>Job Title</th>
          <th>Amounts</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions?.map((transaction, index) => {
  // Convert the transactionTime to a Date object
  const date = new Date(transaction.transactionTime);

  // Options for formatting the date
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  // Format the date
  const formattedDate = date.toLocaleString('en-US', options);

  // Determine the color based on the price value
  const priceColor = transaction.price < 0 ? 'red' : 'green';

  return (
    <tr key={index}>
      <td>{transaction.transactionCode}</td>
      <td>{transaction.job.title}</td>
      <td style={{ color: priceColor }}>{transaction.price}</td> {/* Apply the color here */}
      <td>{formattedDate}</td> {/* Use the formatted date here */}
    </tr>
  );
})}

      </tbody>
    </table>
  );
};

export default TransactionTable;
