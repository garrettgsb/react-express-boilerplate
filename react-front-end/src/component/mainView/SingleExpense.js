import React from 'react';

export default function SingleExpense(props) {

  return (
    <tr className="table-success d-flex justify-content-around">
          <td>{props.created_at}</td>
          <td>{props.category_id}</td>
          <td>{'$' + (props.amount / 100).toFixed(2)}</td>
        </tr>
  )
};