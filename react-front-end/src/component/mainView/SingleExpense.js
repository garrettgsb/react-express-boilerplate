import React from 'react';
import classNames from 'classnames';
import "../../sass/expenses.scss"
export default function SingleExpense(props) {

  const tableClass = classNames('d-flex justify-content-around position-relative', {
    'table-warning': props.classname === 'Savings',
    'table-danger': props.classname === 'Expense',
    'table-success': props.classname === 'Income'
  });

  const removeExpense = (id) => {
    props.removeExpense(id);
  }

  
  return (
    <tr key={props.id} id={props.id} className={tableClass}>
      <td className='textalign'>{props.created_at}</td>
      <td className='textalign'>{props.category_name}</td>
      <td className='textalign'>{'$' + (props.amount / 100).toFixed(2)}</td>
      <td
      data-id={props.id}
      className='expense-button'
      onClick={() => removeExpense(props.id)}
      >
        Remove
      </td>
    </tr>
  )
};