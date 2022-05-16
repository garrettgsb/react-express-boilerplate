import React from 'react';

export default function ExpenseTable(props) {

  return (
    <table className="table ">
      <thead className='table-info'>
        <th className='d-flex justify-content-around'>
          <th scope="col">MONTH</th>
          <th scope="col">Category</th>
          <th scope="col">DESCRIPTION(OPTIONAL)</th>
          <th scope="col">Amount</th>
        </th>
      </thead>
      <tbody id='expense-table' className='container list-group infinite-scroll'>
        <tr className="table-success d-flex justify-content-around">
          <th scope="row">MONTH</th>
          <td>INCOME</td>
          <td>DESCRIPTION</td>
          <td>$AMOUNT</td>
        </tr>
        <tr className="table-danger d-flex justify-content-around">
          <th scope="row">MONTH</th>
          <td>EXPENSES</td>
          <td>DESCRIPTION</td>
          <td>$AMOUNT</td>
        </tr>
        <tr className="table-danger d-flex justify-content-around">
          <th scope="row">MONTH</th>
          <td>EXPENSES</td>
          <td>DESCRIPTION</td>
          <td>$AMOUNT</td>
        </tr>
        <tr className="table-danger d-flex justify-content-around">
          <th scope="row">MONTH</th>
          <td>EXPENSES</td>
          <td>DESCRIPTION</td>
          <td>$AMOUNT</td>
        </tr>
        <tr className="table-danger d-flex justify-content-around">
          <th scope="row">MONTH</th>
          <td>EXPENSES</td>
          <td>DESCRIPTION</td>
          <td>$AMOUNT</td>
        </tr>
        <tr className="table-danger d-flex justify-content-around">
          <th scope="row">MONTH</th>
          <td>EXPENSES</td>
          <td>DESCRIPTION</td>
          <td>$AMOUNT</td>
        </tr>
        <tr className="table-danger d-flex justify-content-around">
          <th scope="row">MONTH</th>
          <td>EXPENSES</td>
          <td>DESCRIPTION</td>
          <td>$AMOUNT</td>
        </tr>
        <tr className="table-danger d-flex justify-content-around">
          <th scope="row">MONTH</th>
          <td>EXPENSES</td>
          <td>DESCRIPTION</td>
          <td>$AMOUNT</td>
        </tr>
        <tr className="table-warning d-flex justify-content-around">
          <th scope="row">MONTH</th>
          <td>SAVINGS</td>
          <td>DESCRIPTION</td>
          <td>$AMOUNT</td>
        </tr>
      </tbody>
    </table>
  );
};