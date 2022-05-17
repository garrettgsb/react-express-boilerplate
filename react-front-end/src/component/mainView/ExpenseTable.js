import React from 'react';

export default function ExpenseTable(props) {

  console.log('PROPS.EXPENSE:', props.expenses)

  const expenses = props.expenses.map(exp => {
    return (
      <tr key={exp.id} className="table-success d-flex justify-content-around">
      <th scope="row">{exp.created_at.substring(0, 10)}</th>
      <td>{exp.category}</td>
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