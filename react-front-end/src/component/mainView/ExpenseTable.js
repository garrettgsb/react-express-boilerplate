import React from 'react';

export default function ExpenseTable(props) {

  return (
    <table className="table ">
      <thead className='table-info'>
        <tr className='d-flex justify-content-around'>
          <td scope="col">MONTH</td>
          <td scope="col">Category</td>
          <td scope="col">DESCRIPTION(OPTIONAL)</td>
          <td scope="col">Amount</td>
        </tr>
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