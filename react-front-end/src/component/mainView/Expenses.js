import React, { useState } from 'react';
import LineGraph from './LineGraph';
import ExpenseTable from './ExpenseTable';
import useVisualMode from '../../hooks/useVisualMode';
import "../../sass/expenses.scss"
import { getCategoryName } from '../../helpers/helper_functions';

export default function Expenses(props) {
  const [state, setState] = useState({
    date: '',
    amount: 0,
    category_name: 'category',
    category_id: 0
  });

  const LINE = 'LINE';
  const EXPENSES = 'EXPENSES';

  const { mode, transition, back } = useVisualMode(EXPENSES);

  const submit = (user_id, created_at, amount, category_id, category_name) => {
    const expense = {
      user_id,
      created_at,
      amount,
      category_id,
      category_name
    };
    props.addExpense(expense);
  };

  return (
    <div>
      {mode === LINE &&
        <LineGraph
          key={props.userId}
          user={props.userId}
          goals={props.goals}
          expenses={props.expenses}
          back={back}
          />}
      {mode === EXPENSES &&
        <div id='user-expense-input'>
          <ExpenseTable
            key={props.expenses.length}
            expenses={props.expenses}
          />
          <div className='d-flex align-items-center justify-content-center text-center'>
            <form className="row row-cols-lg-auto g-3 align-items-center">
              <div className="col-lg-3 col-sm-6">
                <label htmlFor="date" className='visually-hidden'>date</label>
                <input
                  id="date"
                  className="form-control"
                  type="date"
                  value={state.date}
                  onChange={(event) =>
                    setState({ ...state, date: event.target.value })
                  }
                />
                <span id="dateSelected"></span>
              </div>
              <div className="col-12">
                <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Amount</label>
                <div className="input-group">
                  <div className="input-group-text">$</div>
                  <input
                    type="number"
                    imputmode='decimal'
                    min='0.01'
                    step='0.01'
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Amount"
                    onChange={(event) =>
                      setState({ ...state, amount: event.target.value * 100 })
                    }
                  />
                </div>
              </div>

              <div className="col-12">
                <label className="visually-hidden" htmlFor="inlineFormSelectPref">Category</label>
                <select
                  className="select"
                  value={state.category_id}
                  onChange={(event) => {
                    setState({ ...state, category_name: getCategoryName(event.target.value), category_id: parseInt(event.target.value)})
                  }}>
                  <option value="0" disabled>Category</option>
                  <option value="1">Eating Out</option>
                  <option value="2">Entertainment</option>
                  <option value="3">Fuel</option>
                  <option value="4">Groceries</option>
                  <option value="5">Income</option>
                  <option value="6">Insurance</option>
                  <option value="7">Rent</option>
                  <option value="8">Savings</option>
                  <option value="9">Shopping</option>
                  <option value="10">Other</option>
                </select>
              </div>

              <div className="col-12">
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault()
                    submit(props.userId, state.date, state.amount, state.category_id, state.category_name)
                  }
                }
                >Submit</button>
              </div>

              <div className="col-12" onClick={() => transition(LINE)}>
                <button type="submit" className="btn btn-primary">Line Graph</button>
              </div>

            </form>
          </div>
        </div>
      }
    </div>
  );
}