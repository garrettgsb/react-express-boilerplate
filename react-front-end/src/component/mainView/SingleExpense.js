import React from 'react';
import classNames from 'classnames';
export default function SingleExpense(props) {


  const tableClass = classNames('d-flex justify-content-around', {
    'table-warning': props.savings,
    'table-danger': props.expense,
    'table-success': props.success
  });

  return (
    <tr className={tableClass}>
      <td>{props.created_at}</td>
      <td>{props.category_id}</td>
      <td>{'$' + (props.amount / 100).toFixed(2)}</td>
    </tr>
  )
};