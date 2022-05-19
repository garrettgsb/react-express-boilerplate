import React, { useState } from 'react';
import "../../sass/profile.scss";
import useVisualMode from '../../hooks/useVisualMode';
import { getTotalAmount, getDaysTillGoal } from '../../helpers/helper_functions';
// import { updateGoals } from '../../hooks/';
import useApplicationData from '../../hooks/hook';

export default function Profile(props) {
  
  
  const { updateGoals } = useApplicationData();
  const EDIT = 'EDIT';
  const GOAL = 'GOAL';
  const { mode, transition, back } = useVisualMode(GOAL)

  const savingsbyID = props.savings.filter((savings) => savings.user_id === props.userId);
  const savingsByCatId = savingsbyID.filter((categories) => categories.category_id === 8);
  const totalSaved = getTotalAmount(savingsByCatId);
  const goalByID = props.goals.filter((goal) => goal.user_id === props.userId);
  const totalGoal = getTotalAmount(goalByID);
  const totalDaysTillGoal = getDaysTillGoal(goalByID);

  const [state, setState] = useState({
    user_id: props.userId,
    goal_name: goalByID[0].goal_name,
    totalGoal,
    date: goalByID[0].end_date
  })

  const onChange = function () {
    updateGoals(props.userId, state)
    transition(GOAL)
  }



  return (
    <section className="vw-100 row">
      <div className="container p-card">
        <div className="row d-flex justify-content-start align-items-center h-100">
          <div className="col-md-12 col-xl-4">

            <div className="card">
              <div className="card-body text-center">
                <div className="mt-3 mb-4 background">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle img-fluid" alt='animated-girl-with-glasses' />
                </div>
                <h4 className="mb-2">{savingsbyID.username}</h4>
                <p className="text-muted mb-4">@Programmer <span className="mx-2">|</span> <a
                  href="#!">Lighthouselabs</a></p>
                <div className="mb-4 pb-2">
                </div>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <p className="mb-2 h5">${(totalSaved / 100).toFixed(2)}</p>
                    <p className="text-muted mb-0">Total Saved</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {mode === EDIT &&
        <div className="card chart-align">
          <div className='card goal-container'>
            <div className='d-flex align-items-center justify-content-center text-center flex-column'>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <td>
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="goalName"
                          class="form-control align-items-center"
                          value={state.goal_name}
                          onChange={(event) => setState({...state, goal_name: event.target.value})}
                        />
                        <label class="form-label visually-hidden" htmlFor="goalName">
                          Goal Name
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="number"
                        id="goalAmount"
                        class="form-control align-items-center"
                        value={state.totalGoal}
                        onChange={(event) => setState({...state, totalGoal: event.target.value})}
                    />
                      <label class="form-label visually-hidden" htmlFor="goalAmount">
                        goalAmount
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="date" className='visually-hidden'>date</label>
                        <input
                          id="date"
                          className="form-control"
                          type="date"
                          value={state.date}
                          onChange={(event) => setState({...state, date: event.target.value})}
                        />
                        <span id="dateSelected"></span>
                      </div>
                    </td>
                  </tr>
                </thead>
              </table>
              <div>
                <button onClick={onChange}className='btn btn-primary m-2'>
                  Confirm
                </button>

                <button onClick={() => transition(GOAL)}className='btn btn-danger m-2'>
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
            <br />
            <br />
            <div className='d-flex align-items-center justify-content-center text-center flex-column'>
              <button onClick={() => transition(EDIT)}>EDIT</button>
              <table className="table table-bordered">
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
            </div>
          </div>
        </div>
      }
    </section>
  )
}