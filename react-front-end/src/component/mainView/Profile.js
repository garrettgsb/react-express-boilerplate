import React, { useState } from 'react';
import '../../sass/profile.scss';
import useVisualMode from '../../hooks/useVisualMode';
import {
  getTotalAmount,
  getGoalByID,
  getSavingsByID,
  getUserByID,
  getAvatarByID
} from '../../helpers/helper_functions';
import NewGoal from './NewGoal';


export default function Profile(props) {
  const EDIT = 'EDIT';
  const GOAL = 'GOAL';
  const EMPTY = 'EMPTY';
  const CREATE = 'CREATE';
  const REMOVE = 'REMOVE';
  const { mode, transition, back } = useVisualMode(GOAL);

  const savingsbyID = getSavingsByID(props.savings, props.userId);
  const totalSaved = getTotalAmount(savingsbyID);
  const goalByID = getGoalByID(props.goals, props.userId);
  const username = getUserByID(props.users, props.userId).username;

  const [state, setState] = useState({
    goal_id: goalByID.id,
    goal_name: goalByID.goal_name,
    totalGoals: goalByID.amount / 100,
    start_date: goalByID.start_date,
    end_date: goalByID.end_date,
  });

  const onChange = newGoal => {
    props.updateGoals(goalByID.id, newGoal);
    transition(GOAL);
  };

  const removeGoal = (id) => {
    props.removeGoal(id)
    transition(EMPTY)
  }

  const photo = getAvatarByID(props.userId)
  
  return (
    <section id='profile' className="vw-100 m-0 row">
      <div className="container p-card">
        <div className="row d-flex justify-content-center h-100">
          <div className="w-50 col-md-12 col-xl-4 m-4">
            <div className="card">
              <div className="card-body text-center">
                <div className="mt-3 mb-4 background">
                  <img src={photo}
                    className="rounded-circle img-fluid" alt='man in suit' />
                </div>
                <h4 className="mb-2">{username}</h4>
                <p className="job-name mb-4">@Programmer <span className="mx-2">|</span> <a
                  href="#!">Lighthouselabs</a></p>
                <div className="mb-4 pb-2">
                </div>
                <div className="d-flex justify-content-center text-center mt-5 mb-2">
                  <div>
                    <p className="mb-2 h5 total-saved-amount">${(totalSaved / 100).toFixed(2)}</p>
                    <p className="total-saved-text mb-0">Total Saved</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {mode === EMPTY &&
        <NewGoal
          transition={transition}
          editMode={EDIT}
        />
      }
      {mode === CREATE &&
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

                <button onClick={() => back()} className='btn btn-danger mb-3 m-1'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      }
      {mode === EDIT &&
        <div className="chart-align">
          <div className='goal-container'>
            <div className='m-5 card d-flex align-items-center justify-content-center text-center flex-column'>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <td className='d-flex justify-content-center w-100'>
                      <div className="w-50">
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
                          onChange={(event) => setState({ ...state, end_date: event.target.value })}
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
                <button onClick={() => transition(REMOVE)} className="btn btn-danger mb-3 m-1">
                  Delete
                </button>
                <button onClick={() => back()} className='btn mb-3 m-1'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      }
      {mode === GOAL &&
        <div className="chart-align">
          <div className='goal-container'>
            <div className='m-5 card d-flex align-items-center justify-content-center text-center flex-column'>
              <table className="table">
                <thead>
                  <tr>
                    <td>
                      <h3>
                        {props.vacationMode ?
                          <span>Location: </span> :
                          <span>Saving for: </span>}
                        <span className='fw-bold'>{goalByID.goal_name}</span>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>
                        {props.vacationMode ?
                          <span>Starting Budget: </span> :
                          <span>Aiming for: </span>}
                        <span className='fw-bold'>{(Number(state.totalGoals) * props.exchangeRates.rates[props.currentCurrency]).toFixed(2)} {props.currentCurrency} </span>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>
                        {props.vacationMode ?
                          <span>Home Time:</span> :
                          <span>Current Deadline:</span>}
                        <br />
                        <span className='fw-bold'>
                          {goalByID.end_date}
                        </span>
                      </h3>
                    </td>
                  </tr>
                </thead>
              </table>
              <div className='mb-3 d-flex align-items-center justify-content-center text-center'>
                <button
                  className='btn btn-info m-1'
                  onClick={() => transition(EDIT)}
                >
                  EDIT
                </button>
              </div>
            </div>
          </div>
        </div>
      }

      {mode === REMOVE &&
        <div className="chart-align">
          <div className='goal-container'>
            <div className='m-5 card d-flex align-items-center justify-content-center text-center flex-column'>
              <table>
                <thead>
                  <tr>
                    <td className='d-flex justify-content-center w-100'>
                      <h1 className='text--semi-bold'>
                        Do you actually wish to give up on this dream?
                      </h1>
                    </td>
                  </tr>
                </thead>
              </table>
              <div className='mb-2'>
                <button
                  className='m-1 btn btn-danger'
                  onClick={() => {
                    removeGoal(goalByID.id)
                  }}
                >
                  Confirm
                </button>
                <button
                  onClick={() => back()}
                  className='m-1 btn'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>}
    </section>
  )
}
