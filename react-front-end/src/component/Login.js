import React from 'react';
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
import "../sass/login.scss";


export default function Login() {

  return (
    <section className="h-100 gradient-form banner">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src="../docs/piggy-logo.png"
                        alt="logo" className="image" />
                      <h4 className="mt-1 mb-5 pb-1">We are The Piggy Team</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example11" className="form-control"
                          placeholder="Phone number or email address" />
                        <label className="form-label" htmlFor="form2Example11">Username</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example22" className="form-control" />
                        <label className="form-label" htmlFor="form2Example22"
                        >Password</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                          in</button>
                        <a className="text-muted" href="#!">Forgot password?</a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button type="button" className="btn btn-outline-danger">Create new</button>
                      </div>

                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Piggy Financial is here to help!</h4>
                    <p className="small mb-0">Having troubles saving money? Have secret saving goals that you don't want your significant other to find out about?
                      Then look no further, Piggy Financial is here to help you save and reach your goals!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

