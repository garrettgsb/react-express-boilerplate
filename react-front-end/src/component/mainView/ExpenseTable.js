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
      <tr key={exp.id} className="table-success d-flex justify-content-around">
      <th scope="row">{exp.created_at.substring(0, 10)}</th>
      <td>{exp.category_name}</td>
      <td>{'$' + exp.amount.toFixed(2)/100}</td>
    </tr>
    )
  })
  

  return (
    <table className="table ">
      <thead className='table-info'>
        <tr className='d-flex justify-content-around'>
          <td>MONTH</td>
          <td>Category</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody id='expense-table' className='container list-group infinite-scroll'>
        {expenses}
      </tbody>
    </table>
  );
};