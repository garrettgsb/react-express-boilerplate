import React from 'react';
import { getTotalExpensesForUser } from '../../helpers/helper_functions';

export default function ExpenseTable(props) {
  const state = {
    user: "Kevin",
    expenses: [
    {
      "id": 6,
      "user_id": 1,
      "created_at": "2021-12-29T07:00:00.000Z",
      "amount": 9928,
      "category_id": 6,
      "username": "Alvin",
      "email": "alvintest@hotmail.com",
      "password": "test123",
      "name": "insurance",
      "category_name": "insurance"
    },
    {
      "id": 10,
      "user_id": 3,
      "created_at": "2022-03-31T06:00:00.000Z",
      "amount": 190,
      "category_id": 10,
      "username": "Kevin",
      "email": "kevin3test@hotmail.com",
      "password": "test123",
      "name": "other",
      "category_name": "other"
    },
    {
      "id": 9,
      "user_id": 3,
      "created_at": "2021-06-29T06:00:00.000Z",
      "amount": 9048,
      "category_id": 9,
      "username": "Kevin",
      "email": "kevin3test@hotmail.com",
      "password": "test123",
      "name": "shopping",
      "category_name": "shopping"
    },
    {
      "id": 3,
      "user_id": 1,
      "created_at": "2021-03-22T06:00:00.000Z",
      "amount": 8329,
      "category_id": 3,
      "username": "Alvin",
      "email": "alvintest@hotmail.com",
      "password": "test123",
      "name": "fuel",
      "category_name": "fuel"
    },
    {
      "id": 3,
      "user_id": 3,
      "created_at": "2021-06-05T06:00:00.000Z",
      "amount": 6810,
      "category_id": 3,
      "username": "Kevin",
      "email": "kevin3test@hotmail.com",
      "password": "test123",
      "name": "fuel",
      "category_name": "fuel"
    },
    {
      "id": 8,
      "user_id": 1,
      "created_at": "2021-08-27T06:00:00.000Z",
      "amount": 6745,
      "category_id": 8,
      "username": "Alvin",
      "email": "alvintest@hotmail.com",
      "password": "test123",
      "name": "savings",
      "category_name": "savings"
    }
  ]
  };

  const total = getTotalExpensesForUser(state, state.user);

  const expenses = state.expenses.map(exp => {
    return (
      <tr className="table-success d-flex justify-content-around">
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