import React from 'react';
import SingleExpense from './SingleExpense';
export default function ExpenseTable(props) {

  // console.log('PROPS.EXPENSE:', props.expenses)

  const expenses = props.expenses.map(exp => {
      return (
        <SingleExpense
          key={exp.id}
          created_at={exp.created_at}
          category_id={exp.category_id}
          amount={exp.amount}
        />
      )
    });


  return (
    <table key={props.expenses.id} className="table">
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