import React from 'react';
import "../../sass/profile.scss";
import useVisualMode from '../../hooks/useVisualMode';




export default function Profile(props) {

  const EDIT = 'EDIT';
  const GOAL = 'GOAL';

  const { mode, transition, back } = useVisualMode(GOAL)



  const hardProps = {
    goal: 'A GOAT',
    saved_cents: 100000,
    goalTotal_cents: 500000,
    days: 25
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
                <h4 className="mb-2">Julie L. Arsenault</h4>
                <p className="text-muted mb-4">@Programmer <span className="mx-2">|</span> <a
                  href="#!">Lighthouselabs</a></p>
                <div className="mb-4 pb-2">
                </div>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <p className="mb-2 h5">1333337</p>
                    <p className="text-muted mb-0">Total Saved</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
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
                      {hardProps.goal}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1>
                      {hardProps.saved_cents} / {hardProps.goalTotal_cents}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    {hardProps.days} days until {hardProps.goal}
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      
      
      
      
      </div>
      }
      {mode === EDIT && <div>Edit</div>
      // <Form
      //                   goals={hardProps.goal}
      //                   total={hardProps.goalTotal_cents}
      //                   daysUntil={hardProps.days}
      //                   />
      }

    </section>
  )
}