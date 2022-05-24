import React, { useState } from 'react';
import LineGraph from './LineGraph';
import ExpenseTable from './ExpenseTable';
import useVisualMode from '../../hooks/useVisualMode';
import '../../sass/expenses.scss';
import '../../sass/login.scss';
import { getCategoryName, getCurrenciesOptions } from '../../helpers/helper_functions';
import classNames from 'classnames';

export default function Expenses(props) {
	const [state, setState] = useState({
		date: '',
		amount: 0,
		category_name: 'category',
		category_id: 0,
		input: 'disappear',
		goal_name: 'Vacation: Iceland',
		goal_amount: 3000000
	});

	const expenseInput = classNames('vw-50  align-items-center', {
		'disappear': state.input === 'disappear',
		'card': state.input !== 'disappear'
	});

	const blur = classNames('', {
		'blur': state.input !== 'disappear'
	});

	const removeIncomeButton = classNames('w-25 gradient-custom-4 text-dark', {
		'disappear': state.input !== 'disappear',
		'graph-thumbnail': state.input === 'appear',
		'card vw-50  align-items-center': state.input !== 'appear'
	});

	const removeMapview = classNames('text-center w-50', {
		'disappear': state.input !== 'disappear',
		'btn card': state.input === 'disappear'
	});


	const LINE = 'LINE';
	const EXPENSES = 'EXPENSES';

	const { mode, transition, back } = useVisualMode(EXPENSES);

	const expenseID = props.expenses.find(expense => !Array.isArray(expense))
	const currencies = getCurrenciesOptions(props.currencySymbols)

	const submit = (id, user_id, created_at, amount, category_id, category_name, goal_name, goal_amount) => {
		const expense = {
			id,
			user_id,
			created_at,
			amount,
			category_id,
			category_name,
			goal_name,
			goal_amount: (goal_amount / props.exchangeRates.rates.USD),
			currency: props.currentCurrency || 'USD',
			exchangeRate: props.exchangeRates.rates[props.currentCurrency]
		};
		props.addExpense(expense);
	};

	return (
		<div id='expenses-page'>
			{mode === LINE && (
				<LineGraph
					key='savingGraph'
					user={props.userId}
					goals={props.goals}
					dataPoints={props.dataPoints}
					expenses={props.expenses}
					back={back}
					vacationMode={props.vacationMode}
					vacationData={props.vacationData}
					currencySymbols={props.currencySymbols}
					currentCurrency={props.state.currentCurrency}
					changeCurrency={props.changeCurrency}
					exchangeRates={props.state.exchangeRates}
				/>
			)}
			{mode === EXPENSES && (
				<div id="user-expense-input">
					<ExpenseTable
						key='expenseTable'
						expenses={props.expenses}
						userId={props.userId}
						removeExpense={props.removeExpense}
						goals={props.goals}
						vacationMode={props.vacationMode}
					/>
					<div id='input-card' className={expenseInput}>
						<form className={"d-flex justify-content-around row row-cols-lg-auto g-3 align-items-center p-3"}>
							<div className="col-lg-3 col-sm-6 expense-input-date">
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
									className="visually-hidden form-select-lg"
									htmlFor="inlineFormInputGroupUsername"
								>
									Amount
								</label>
								<div className="input-group">
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
									<div className="expense-currency-input input-group-text w-50 form-select-sm">
										<input
											className="form-control form-control-sm w-100"
											list="datalistOptions"
											id="exchange-search"
											value={props.currentCurrency}
											onChange={e => {
												e.persist();
												console.log(e.target.value)
												props.changeCurrency(e.target.value)
												setState(prev => {
													return { ...prev, currency: e.target.value, exchangeRate: props.exchangeRates.rates[e.target.value] }
												})
											}}
										/>
										<datalist id="datalistOptions">
											{currencies}
										</datalist></div>
								</div>

							</div>

							<div className="col-12 expense-input-category">
								<label
									className="visually-hidden"
									htmlFor="inlineFormSelectPref"
								>
									Category
								</label>
								<select
									className="select form-select-lg"
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
									className="btn btn-primary submit text-dark m-1 gradient-custom-3"
									onClick={e => {
										e.preventDefault();
										setState({ ...state, input: 'disappear' });
										submit(
											expenseID.id + 1 || props.expenses.length + 1,
											props.userId,
											state.date,
											state.amount,
											state.category_id,
											state.category_name,
											state.goal_name,
											state.goal_amount
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
									className='btn btn-danger m-1 cancel'>
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
									id='add-expense'
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
