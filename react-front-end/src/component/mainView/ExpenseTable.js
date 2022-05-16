import React from 'react';

export default function ExpenseTable(props) {

  return (
    <table className="table">
      <thead className='table-info'>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Category</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-success">
          <th scope="row">DATE</th>
          <td>INCOME</td>
          <td>$AMOUNT</td>
        </tr>
        <tr className="table-danger">
          <th scope="row">DATE</th>
          <td>EXPENSES</td>
          <td>$AMOUNT</td>
        </tr>
        <tr className="table-warning">
          <th scope="row">DATE</th>
          <td>SAVINGS</td>
          <td>$AMOUNT</td>
        </tr>
      </tbody>
    </table>
  );
};