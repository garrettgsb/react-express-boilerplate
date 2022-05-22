import React, { useState } from 'react';
import ProgressCircle from './ProgressCircle';
import '../../sass/savings.scss';
import {
	getTotalAmount,
	getDaysTillGoal,
	getGoalByID,
	getSavingsByID,
} from '../../helpers/helper_functions';
import classNames from 'classnames';
import useVisualMode from '../../hooks/useVisualMode';

export default function Savings(props) {
	// gets total amount of saved money
	const savingsbyID = getSavingsByID(props.savings, props.userId);
	const totalSaved = getTotalAmount(savingsbyID);
	// gets days until end date for goal
	const goalByID = getGoalByID(props.goals, props.userId);
	const totalGoal = getTotalAmount(goalByID);
	const totalDaysTillGoal = getDaysTillGoal(goalByID);
	const [state, setState] = useState({
		input: 'appear',
		switch: 'Off',
		day: false,
		week: false,
		month: false,
		year: false,
		vacation: '',
		goal_id: '',
    goal_name: '',
    totalGoals: '',
    date: '',
	});

	const onChange = newGoal => {
    props.updateGoals(goalByID.id, newGoal);
		setState({...state, vacation: ''}
		)
  };

	const dayClick = () => {
		setState({
			...state,
			day: !state.day,
			switch: !state.switch ? 'ON' : 'OFF',
		});
	};

	const weekClick = () => {
		setState({
			...state,
			week: !state.week,
			switch: !state.switch ? 'ON' : 'OFF',
		});
	};

	const monthClick = () => {
		setState({
			...state,
			month: !state.month,
			switch: !state.switch ? 'ON' : 'OFF',
		});
	};
	const yearClick = () => {
		setState({
			...state,
			year: !state.year,
			switch: !state.switch ? 'ON' : 'OFF',
		});
	};

	const piggyAppear = classNames('pig-image', {
		disappear: state.input === 'disappear',
	});

	const piggyBreak = classNames('pig-break', {
		disappear: state.input !== 'disappear',
	});


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
					{(totalSaved / totalGoal) <= 1 && (
						<div className="w-100 h-75 d-flex align-items-center justify-content-center text-center">
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
									{state.day && (
										<tr className="fw-bold">
											<td>You can save {moneyPerDayToGoal}/day</td>
										</tr>
									)}
									{state.week && (
										<tr className="fw-bold">
											<td>You can save {moneyPerWeekToGoal}/week</td>
										</tr>
									)}
									{state.month && (
										<tr className="fw-bold">
											<td>You can save {moneyPerMonthToGoal}/month</td>
										</tr>
									)}
									{state.year && (
										<tr className="fw-bold">
											<td>You can save {moneyPerYearToGoal}/year</td>
										</tr>
									)}
								</thead>
							</table>
							<div id="progress-circle">
								<ProgressCircle
									total_saved={totalSaved}
									goalTotal_cents={totalGoal}
								/>
							</div>
						</div>
					)}
					{(totalSaved / totalGoal) <= 1 && (
						<div className="w-100 d-flex justify-content-space-evenly">
							<div
								id="switch"
								className="d-flex h-25 mb-3 align-items-center justify-content-center"
							>
								<div className="m-1">
									<div className="form-check form-switch">
										<input
											className="form-check-input"
											type="checkbox"
											aria-checked="false"
											role="switch"
											id="day-switch"
											onChange={() => dayClick()}
										/>
										<label className="form-check-label" htmlFor="day-switch">
											Day
										</label>
									</div>
								</div>
								<div className="m-1">
									<div className="form-check form-switch">
										<input
											className="form-check-input"
											type="checkbox"
											aria-checked="false"
											role="switch"
											id="week-switch"
											onChange={() => weekClick()}
										/>
										<label className="form-check-label" htmlFor="week-switch">
											Week
										</label>
									</div>
								</div>
								<div className="m-1">
									<div className="form-check form-switch">
										<input
											className="form-check-input"
											type="checkbox"
											aria-checked="false"
											role="switch"
											id="month-switch"
											onChange={() => monthClick()}
										/>
										<label className="form-check-label" htmlFor="month-switch">
											Month
										</label>
									</div>
								</div>
								<div className="m-1">
									<div className="form-check form-switch">
										<input
											className="form-check-input"
											type="checkbox"
											aria-checked="false"
											role="switch"
											id="year-switch"
											onChange={() => yearClick()}
										/>
										<label className="form-check-label" htmlFor="year-switch">
											Year
										</label>
									</div>
								</div>
								<div id="switch-right"></div>
							</div>
						</div>
					)}

					<div>
						{(totalSaved / totalGoal) >= 1 && (
							<div className="wrap">
								<button className="button-vac">VACATION MODE</button>
								<button
									className={piggyAppear}
									onClick={() => {
										setState({ ...state, input: 'disappear' });
									}}
								>
									<img src="../../../pig2-NO-bg.png" alt="piggy bank break" />
								</button>
								<img
									className={piggyBreak}
									src="https://c.tenor.com/SoiNuY5rLrQAAAAC/sailor-moon-pig.gif"
									alt="piggy bank broken"
								/>
							</div>
						)}
					</div>

					<img
						id="piggy-animation"
						src="https://c.tenor.com/k_giby7nsyIAAAAC/money-piggy-bank.gif"
						alt="piggy animation"
					/>
				</div>
			</div>
			{state.vacation === 'edit' &&
				<div className="chart-align">
					<div className='goal-container'>
						<div className='m-5 card d-flex align-items-center justify-content-center text-center flex-column'>
							<table className="table table-bordered">
								<thead>
									<tr>
										<td className='d-flex justify-content-center w-100'>
											<div className="form-outline w-75">
												<input
													type="text"
													id="goalName"
													className="form-control align-items-center fw-bolder text-center"
													value={state.goal_name}
													onChange={(event) => setState({ ...state, goal_name: event.target.value })}
												/>
												<label className="form-label visually-hidden" htmlFor="goalName">
													Goal Name
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<td className='d-flex justify-content-center w-100'>
											<div className='w-50'>
												<input
													type="number"
													imputmode="decimal"
													min="0.01"
													step="0.01"
													id="goalAmount"
													className="form-control align-items-center"
													value={state.totalGoals}
													onChange={event =>
														setState({
															...state,
															totalGoals: event.target.value,
														})
													}
												/>
											</div>
											<label className="form-label visually-hidden" htmlFor="goalAmount">
												goalAmount
											</label>
										</td>
									</tr>
									<tr>
										<td className='d-flex justify-content-center w-100'>
											<div className="w-50 col-lg-3 justify-content-center col-sm-6">
												<label htmlFor="date" className='visually-hidden'>date</label>
												<input
													id="date"
													className="form-control"
													type="date"
													value={state.date}
													onChange={(event) => setState({ ...state, date: event.target.value })}
												/>
												<span id="dateSelected"></span>
											</div>
										</td>
									</tr>
								</thead>
							</table>
							<div>
								<button onClick={() => onChange(state)} className='btn btn-primary mb-3 m-1'>
									Confirm
								</button>
							</div>
						</div>
					</div>
				</div>}
		</div>
	);
}
