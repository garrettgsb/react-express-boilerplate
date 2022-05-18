import React from 'react';
import "../../sass/profile.scss";
import useVisualMode from '../../hooks/useVisualMode';
import { getTotalAmount, getDaysTillGoal } from '../../helpers/helper_functions';

export default function Profile(props) {
  const EDIT = 'EDIT';
  const GOAL = 'GOAL';
  const { mode, transition, back } = useVisualMode(GOAL)


  const savingsbyID = props.savings.filter((savings) => savings.user_id === props.userId);
  const totalSaved = getTotalAmount(savingsbyID);
  const goalByID = props.goals.filter((goal) => goal.user_id === props.userId);
  const totalGoal = getTotalAmount(goalByID);
  const totalDaysTillGoal = getDaysTillGoal(goalByID);

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
      <form>
        <div class="row g-3">
          <div class="col-sm-7">
            <div class="form-outline">
              <input type="text" id="form10Example1" class="form-control" />
              <label class="form-label" for="form10Example1">Name</label>
            </div>
          </div>
          <div class="col-sm">
            <div class="form-outline">
              <input type="text" id="form10Example2" class="form-control" />
              <label class="form-label" for="form10Example2">Name</label>
            </div>
          </div>
          <div class="col-sm">
            <div class="form-outline">
              <input type="text" id="form10Example3" class="form-control" />
              <label class="form-label" for="form10Example3">Name</label>
            </div>
          </div>
        </div>
      </form>
      }
      {mode === GOAL &&
        <div className="chart-align">
          <div className='goal-container'>
            <br />
            <br />
            <div className='d-flex align-items-center justify-content-center text-center flex-column'>
              <button>EDIT</button>
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