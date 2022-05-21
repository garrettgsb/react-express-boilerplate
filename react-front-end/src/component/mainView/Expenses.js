import React, { useState } from 'react';
import LineGraph from './LineGraph';
import ExpenseTable from './ExpenseTable';
import useVisualMode from '../../hooks/useVisualMode';
import '../../sass/expenses.scss';
import { getCategoryName } from '../../helpers/helper_functions';
import classNames from 'classnames';

export default function Expenses(props) {
	const [state, setState] = useState({
		date: '',
		amount: 0,
		category_name: 'category',
		category_id: 0,
		input: 'disappear',
		goal_name: 'Mexico',
	});

	const expenseInput = classNames('vw-50  align-items-center', {
		'disappear': state.input === 'disappear',
		'card': state.input !== 'disappear'
	});

	const blur = classNames('', {
		'blur': state.input !== 'disappear'
	});

	const removeIncomeButton = classNames('w-25', {
		'disappear': state.input !== 'disappear',
		'btn btn-primary': state.input === 'disappear',
		'graph-thumbnail': state.input === 'appear'
	});

	const removeMapview = classNames('text-center w-50', {
		'disappear': state.input !== 'disappear',
		'btn card': state.input === 'disappear'
	})

	const LINE = 'LINE';
	const EXPENSES = 'EXPENSES';

	const { mode, transition, back } = useVisualMode(EXPENSES);

	const submit = (user_id, created_at, amount, category_id, category_name, goal_name) => {
		const expense = {
			user_id,
			created_at,
			amount,
			category_id,
			category_name,
			goal_name,
		};
		props.addExpense(expense);
	};

	return (
		<div id='expenses-page'>
			{mode === LINE && (
				<LineGraph
					key={props.userId}
					user={props.userId}
					goals={props.goals}
					dataPoints={props.dataPoints}
					expenses={props.expenses}
					back={back}
				/>
			)}
			{mode === EXPENSES && (
				<div id="user-expense-input">
					<ExpenseTable
						key={props.expenses.length}
						expenses={props.expenses}
						userId={props.userId}
						removeExpense={props.removeExpense}
					/>
					<div id='input-card' className={expenseInput}>
						<form className="d-flex justify-content-around row row-cols-lg-auto g-3 align-items-center p-3">
							<div className="col-lg-3 col-sm-6">
								<label htmlFor="date" className="visually-hidden">
									date
								</label>
								<input
									id="date"
									className="form-control"
									type="date"
									value={state.date}
									onChange={event =>
										setState({ ...state, date: event.target.value })
									}
								/>

								<span id="dateSelected"></span>
							</div>
							<div className="col-12">
								<label
									className="visually-hidden"
									htmlFor="inlineFormInputGroupUsername"
								>
									Amount
								</label>
								<div className="input-group">
									<div className="input-group-text">$</div>
									<input
										type="number"
										imputmode="decimal"
										min="0.01"
										step="0.01"
										className="form-control"
										id="inlineFormInputGroupUsername"
										placeholder="Amount"
										onChange={event =>
											setState({
												...state,
												amount: event.target.value * 100,
											})
										}
									/>
								</div>
							</div>
							<div className="col-12">
								<label
									className="visually-hidden"
									htmlFor="inlineFormSelectPref"
								>
									Category
								</label>
								<select
									className="select"
									value={state.category_id}
									onChange={event => {
										setState({
											...state,
											category_name: getCategoryName(event.target.value),
											category_id: parseInt(event.target.value),
										});
									}}
								>
									<option value="0" disabled>
										Category
									</option>
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
							<div className="col-12 d-flex align-items-center">
								<button
									type="submit"
									className="btn btn-primary m-1"
									onClick={e => {
										e.preventDefault();
										submit(
											props.userId,
											state.date,
											state.amount,
											state.category_id,
											state.category_name,
											state.goal_name
										);
									}}
								>
									Submit
								</button>
								<button
									onClick={(e) => {
										e.preventDefault()
										setState({ ...state, input: 'disappear' })
									}}
									className='btn btn-danger m-1'>
									Cancel
								</button>
							</div>
						</form>
					</div>
					<div className={blur}>
					</div>
					<div className="">
						<div className="d-flex column align-items-center justify-content-center text-center">
							<div className='d-flex row justify-content-center align-items-center w-75'>
								<button
									type="submit"
									className={removeIncomeButton}
									onClick={() => {
										setState({ ...state, input: 'appear' });
									}}
								>
									Add New
								</button>
								<div className='w-50 d-flex justify-content-center'>
									<button
										name='graph-thumbnail'
										className={removeMapview}>
										<img 
										onClick={() => transition(LINE)}
										id='graph-thumbnail' src='../../../graph_thumbnail.png' alt='graph thumbnail' />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
