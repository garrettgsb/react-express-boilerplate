import React from 'react';
import LineGraph from './LineGraph';
import ExpenseTable from './ExpenseTable';
import useVisualMode from '../../hooks/useVisualMode';
import "../../sass/spending.scss"

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
          <div>


            <form class="row row-cols-lg-auto g-3 align-items-center">
              <div class="col-12">
                <label class="visually-hidden" for="inlineFormInputGroupUsername">Amount</label>
                <div class="input-group">
                  <div class="input-group-text">$</div>
                  <input
                    type="number"
                    imputmode='decimal'
                    min='0.01'
                    step='0.01'
                    class="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Amount" />
                </div>
              </div>

              <div class="col-12">
                <label class="visually-hidden" for="inlineFormSelectPref">Category</label>
                <select class="select">
                  <option value="1">Clothes</option>
                  <option value="2">Eating Out</option>
                  <option value="3">Entertainment</option>
                  <option value="4">Fuel</option>
                  <option value="5">Gifts</option>
                  <option value="6">Groceries</option>
                  <option value="7">Insurance</option>
                  <option value="8">Rent</option>
                  <option value="9">Shopping</option>
                  <option value="10">Other</option>
                </select>
              </div>

              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                  <label class="form-check-label" for="inlineFormCheck">
                    Income
                  </label>
                </div>
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>

            </form>
            {/* <select class="form-select">
              <option selected>Default Form Select</option>
              <option value="1">Web Designing</option>
              <option value="2">Web Development</option>
              <option value="3">Graphic Design</option>
              <option value="4">WordPress Website</option>
            </select> */}

            {/* <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                  Category
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">

              </ul>
              <div className="form-outline">
                <input type="number" id="typeNumber" className="form-control" />
                <label className="form-label" for="typeNumber">Amount</label>
              </div>
            </div> */}
          </div>
        </div>
      }
    </div>
  );
}