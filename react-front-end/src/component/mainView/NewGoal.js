import React from "react";
import '../../sass/profile.scss';

export default function NewGoal(props) {
	return (
		<div className="chart-align">
          <div className='goal-container'>
            <div className='m-5 card d-flex align-items-center justify-content-center text-center flex-column'>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <td className='d-flex justify-content-center w-100'>
                      <span className='fs-3 fw-2 text-success'>
                        New Piggy Bank?
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center w-100'>
                      <button
                        className="new-pig"
                        onClick={() => props.transition(props.editMode)}
                      >
                        <i
                          id='new-pig'
                          className="logo fa-solid fa-piggy-bank new-pig"
                          height="15"
                          alt="pig logo"
                          loading="lazy"
                        />
                      </button>
                    </td>
                  </tr>
                </thead>
              </table>
              <div>
              </div>
            </div>
          </div>
        </div>
	)
}
