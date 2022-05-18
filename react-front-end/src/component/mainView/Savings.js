import React from 'react';
import ProgressCircle from './ProgressCircle';
import { getTotalAmount, getDaysTillGoal } from '../../helpers/helper_functions';

export default function Savings(props) {
  const savingsbyID = props.savings.filter((savings) => savings.user_id === props.userId);
  const savingsByCatId = savingsbyID.filter((categories) => categories.category_id === 8);
  const totalSaved = getTotalAmount(savingsByCatId);
  
  const goalByID = props.goals.filter((goal) => goal.user_id === props.userId);
  const totalGoal = getTotalAmount(goalByID);
  const totalDaysTillGoal = getDaysTillGoal(goalByID);

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
                  {goalByID[0].goal_name}
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                <h1>
                  ${(totalSaved / 100).toFixed(2)} / ${(totalGoal / 100).toFixed(2)}
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                {totalDaysTillGoal} days until {goalByID[0].goal_name}
              </td>
            </tr>
            </thead>
            </table>
            <ProgressCircle 
            total_saved={totalSaved} 
            goalTotal_cents={totalGoal}/>
        </div>
      </div>
    </div>
  );
}