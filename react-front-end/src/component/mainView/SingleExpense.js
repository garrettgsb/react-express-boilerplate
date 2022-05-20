import React from 'react';
import classNames from 'classnames';
import "../../sass/expenses.scss"
export default function SingleExpense(props) {

  const tableClass = classNames('d-flex justify-content-around', {
    'table-warning': props.classname === 'Savings',
    'table-danger': props.classname === 'Expense',
    'table-success': props.classname === 'Income'
  });

  

  return (
    <tr className={tableClass}>
      <td className='textalign'>{props.created_at}</td>
      <td className='textalign'>{props.category_name}</td>
      <td className='textalign'>{'$' + (props.amount / 100).toFixed(2)}</td>
    </tr>
  )
};