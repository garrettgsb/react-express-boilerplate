import React from 'react';
import ProgressCircle from './ProgressCircle';
import '../../sass/savings.scss';
import {
	getTotalAmount,
	getDaysTillGoal,
	getGoalByID,
	getSavingsByID,
} from '../../helpers/helper_functions';

export default function Savings(props) {
	// gets total amount of saved money
	const savingsbyID = getSavingsByID(props.savings, props.userId);
	const totalSaved = getTotalAmount(savingsbyID);
	// gets days until end date for goal
	const goalByID = getGoalByID(props.goals, props.userId);
	const totalGoal = getTotalAmount(goalByID);
	const totalDaysTillGoal = getDaysTillGoal(goalByID);


	// const [state, setState] = useState({
	//   goal: goalByID[0].goal_name
	// })

	// if state.goal === 'Vacation' && (props.totalSaved >= props.totalGoal)
	//  transition('VACATION')

	// gets money per day/week/month/year
	const moneyTillGoal = totalGoal - totalSaved;
	const moneyPerDayToGoal =
		'$' + (moneyTillGoal / totalDaysTillGoal / 100).toFixed(2);
	const moneyPerWeekToGoal =
		'$' + (moneyTillGoal / (totalDaysTillGoal / 7) / 100).toFixed(2);
	const moneyPerMonthToGoal =
		'$' + (moneyTillGoal / (totalDaysTillGoal / 31) / 100).toFixed(2);
	const moneyPerYearToGoal =
		'$' + (moneyTillGoal / (totalDaysTillGoal / 365) / 100).toFixed(2);

	return (
		<div>
			<div className="goal-container d-flex flex-column align-items-center justify-content-center h-50 mt-5 text-center">
				<br />
				<br />
				<div className="d-flex w-50 flex-column align-items-center justify-content-center text-center">
					<div className='w-100 h-75 d-flex align-items-center justify-content-center text-center'>
						<table>
							<thead>
								<tr>
									<td>
										<h1>{goalByID.goal_name}</h1>
									</td>
								</tr>
								<tr>
									<td>
										<h1>
											${(totalSaved / 100).toFixed(2)} / $
											{(totalGoal / 100).toFixed(2)}
										</h1>
									</td>
								</tr>
								<tr>
									<td>
										{totalDaysTillGoal} days until {goalByID.end_date}
									</td>
								</tr>
								<tr>
									<td>You can save {moneyPerDayToGoal}/day</td>
								</tr>
								<tr>
									<td>You can save {moneyPerWeekToGoal}/week</td>
								</tr>
								<tr>
									<td>You can save {moneyPerMonthToGoal}/month</td>
								</tr>
								<tr>
									<td>You can save {moneyPerYearToGoal}/year</td>
								</tr>
							</thead>
						</table>
						<div id="progress-circle">
							<ProgressCircle
								total_saved={totalSaved}
								goalTotal_cents={totalGoal}
							/>
						</div>
					</div>
					<div className='w-100 d-flex justify-content-space-evenly'>
					<div id='switch' className='d-flex h-25 mb-3 align-items-center justify-content-center'>
						<div className='m-1'>
							<div class="form-check form-switch">
								<input class="form-check-input" type="checkbox" aria-checked="false" role="switch" id="day-switch" />
								<label class="form-check-label" htmlFor="day-switch">Day</label>
							</div>
						</div>
						<div className='m-1'>
							<div class="form-check form-switch">
								<input class="form-check-input" type="checkbox"aria-checked="false" role="switch" id="week-switch" />
								<label class="form-check-label" htmlFor="week-switch">Week</label>
							</div>
						</div>
						<div className='m-1'>
							<div class="form-check form-switch">
								<input class="form-check-input" type="checkbox"aria-checked="false" role="switch" id="month-switch" />
								<label class="form-check-label" htmlFor="month-switch">Month</label>
							</div>
						</div>
						<div className='m-1'>
							<div class="form-check form-switch">
								<input class="form-check-input" type="checkbox"aria-checked="false" role="switch" id="year-switch" />
								<label class="form-check-label" htmlFor="year-switch">Year</label>
							</div>
						</div>
					</div>
					<div id='switch-right'>
					</div>
					</div>
				</div>

				<div>
					<div className="wrap">
						<button className="button-vac">VACATION MODE</button>
					</div>
					<button className="pig-image">
						<img src="../../../pig2-NO-bg.png" alt="piggy bank break" />
					</button>
					<button className="pig-break">
						<img src="https://c.tenor.com/SoiNuY5rLrQAAAAC/sailor-moon-pig.gif" alt="piggy bank broken" />
					</button>
				</div>

				<img
					id="piggy-animation"
					src="https://c.tenor.com/k_giby7nsyIAAAAC/money-piggy-bank.gif"
					alt="piggy animation"
				/>
			</div>
		</div>
	);
}
