import React from 'react';
import SingleExpense from './SingleExpense';
import { getCategoryName, getExpenseById } from '../../helpers/helper_functions';
export default function ExpenseTable(props) {

  const filteredExpensesById = getExpenseById(props.expenses, props.userId);
  const expenses = filteredExpensesById.map(expense => {
    const categoryName = getCategoryName(expense.category_id);
    const classname = (prop) => {
      switch (prop) {
        case 'income': return 'Income';
        case 'savings': return 'Savings';
        default: return 'Expense';
      }
    };

    return (
      <SingleExpense
        key={expense.id}
        created_at={expense.created_at}
        category_name={expense.category_name || categoryName}
        amount={expense.amount}
        classname={classname(expense.category_name || categoryName)}
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
      <tbody id='expense-table' className='list-group infinite-scroll'>
        {expenses}
      </tbody>
    </table>
  );
};