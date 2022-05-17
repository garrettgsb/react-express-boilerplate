import React from 'react';

export default function ExpenseTable(props) {

  // console.log('PROPS.EXPENSE:', props.expenses)

  const expenses = props.expenses.map(exp => {
    return (
      <tr key={exp.id} className="table-success d-flex justify-content-around">
        <td>{exp.created_at}</td>
        <td>{exp.category_id}</td>
        <td>{'$' + (exp.amount/100).toFixed(2)}</td>
      </tr>
    )
  })


  return (
    <table key={props.expenses.id} className="table ">
      <thead className='table-info'>
        <tr className='d-flex justify-content-around'>
          <td>Date</td>
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