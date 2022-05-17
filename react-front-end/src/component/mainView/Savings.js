import React from 'react';
import ProgressCircle from './ProgressCircle';
import { getTotalIncome } from '../../helpers/helper_functions';

export default function Savings(props) {

  console.log('PROPS>INCOME', props.incomes)
  const getIncomebyID = props.incomes.filter((expenses) => expenses.user_id == props.userId);
  console.log('props.userId', props.userId)
  const total = getTotalIncome(getIncomebyID);

  const hardProps = {
    goal: 'A GOAT',
    // saved_cents: 2500,
    goalTotal_cents: 500000,
    days: 25
  }

  return (
    <div>
      <div className='goal-container'>
        <br />
        <br />
        <div className='d-flex align-items-center justify-content-center text-center'>
          <table>
            <thead>
            <tr>
              <td>
                <h1>
                  {hardProps.goal}
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                <h1>
                  {total} / {hardProps.goalTotal_cents}
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                {hardProps.days} days until {hardProps.goal}
              </td>
            </tr>
            </thead>
            <ProgressCircle 
            total_saved={total} 
            goalTotal_cents={hardProps.goalTotal_cents}/>
          </table>
        </div>
      </div>
    </div>
  );
}