import React from 'react';
import SingleExpense from './SingleExpense';
import { getCategoryName, getExpenseById, filteredVacationExpenses, getGoalByID } from '../../helpers/helper_functions';
import "../../sass/signup.scss"

export default function ExpenseTable(props) {

  const vacation = getGoalByID(props.goals, props.userId)
  
  const filteredExpensesById =
    props.vacationMode ?
      filteredVacationExpenses(props.expenses, props.userId, vacation.start_date) :
      getExpenseById(props.expenses, props.userId);

  const expenses = filteredExpensesById.map(expense => {
    const categoryName = getCategoryName(expense.category_id);

    const classname = (prop) => {
      switch (prop) {
        case 'Income': return 'Income';
        case 'Savings': return 'Savings';
        default: return 'Expense';
      }
    };

    return (
      <SingleExpense
        key={expense.id}
        id={expense.id}
        created_at={expense.created_at}
        category_name={expense.category_name || categoryName}
        amount={expense.amount}
        classname={classname(expense.category_name || categoryName)}
        removeExpense={props.removeExpense}
        vacationMode={props.vacationMode}
      />
    )
  });


  return (
    <table className="table table-striped table-hover">
      <thead className='gradient-custom-4 fs-5 fw-bolder'>
        <tr className='d-flex justify-content-around'>
          <td>Date</td>
          <td>Category</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody id='expense-table' className='list-group infinite-scroll fw-bold'>
        {expenses}
      </tbody>
    </table>
  );
};