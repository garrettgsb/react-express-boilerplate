import React from 'react';
import SingleExpense from './SingleExpense';
export default function ExpenseTable(props) {

  const expenses = props.expenses.map(expense => {
    let classname = '';
    switch (expense.category_id) {
      case 5: classname = 'Income';
        break;
      case 8: classname = 'Savings';
        break;
      default: classname = 'Expense';
        break;
    }
    return (
      <SingleExpense
        key={expense.id}
        created_at={expense.created_at}
        category_name={expense.category_name}
        amount={expense.amount}
        classname={classname}
      />
    )
  });


  return (
    <table className="table">
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