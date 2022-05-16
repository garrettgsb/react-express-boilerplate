import React from 'react';

export default function ExpenseTable(props) {

  let expense = [
    {
      id: 1,
      user_id: 1,
      created_at: "2021-12-29T08:00:00.000Z",
      amount: 9928,
      category_id: 6,
    },
    {
      id: 2,
      user_id: 1,
      created_at: "2022-03-31T07:00:00.000Z",
      amount: 190,
      category_id: 10,
    },
    {
      id: 3,
      user_id: 1,
      created_at: "2021-11-16T08:00:00.000Z",
      amount: 4257,
      category_id: 5,
    }
  ];

  const expenses = expense.map(exp => {
    return (
      <tr className="table-success d-flex justify-content-around">
      <th scope="row">{exp.created_at}</th>
      <td>{exp.category_id}</td>
      <td>{exp.amount}</td>
    </tr>
    )
  })
  

  return (
    <table className="table ">
      <thead className='table-info'>
        <th className='d-flex justify-content-around'>
          <th scope="col">MONTH</th>
          <th scope="col">Category</th>
          <th scope="col">Amount</th>
        </th>
      </thead>
      <tbody id='expense-table' className='container list-group infinite-scroll'>
        {expenses}
      </tbody>
    </table>
  );
};