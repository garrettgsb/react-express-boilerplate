import React from 'react';
import LineGraph from './LineGraph';
import ExpenseTable from './ExpenseTable';
import useVisualMode from '../../hooks/useVisualMode';
import "../../sass/expenses.scss"

export default function Expenses(props) {

  const LINE = 'LINE';
  const EXPENSES = 'EXPENSES';

  const { mode/*, transition, back */ } = useVisualMode(EXPENSES);

  return (
    <div>
      {mode === LINE && <LineGraph />}
      {mode === EXPENSES &&

        <div id='user-expense-input'>
          <ExpenseTable />
          <div className='d-flex align-items-center justify-content-center text-center'>
            <form className="row row-cols-lg-auto g-3 align-items-center">
              <div className="col-12">
                <label className="visually-hidden" htmlFor="inlineFormSelectPref">Category</label>
                <select className="select select-dropdown">
                  <option value="month" disabled>Month</option>
                  <option value="1">January</option>
                  <option value="2">Febrary</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
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
                    placeholder="Amount" />
                </div>
              </div>

              <div className="col-12">
                <label className="visually-hidden" htmlFor="inlineFormSelectPref">Category</label>
                <select className="select">
                  <option value="category" disabled>Category</option>
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
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
}