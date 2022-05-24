import React, { useState } from 'react';
import "../sass/login.scss";

export default function Login(props) {

  const [state, setState] = useState({
    id: '',
    email: '',
    password: ''
  });

  const login = (email, password) => {
    props.loginUser(email, password)
    .then(() => props.transition('SHOW'))
  };
  
  const validate = (email, password) => {
    setState(prev=>{
      return {...prev,
        id: '',
        email: '',
        password: ''
      }
    })
    login(email, password);
    props.transition('SIGNUP');
  };

  return (
    <section className="h-100 gradient-form banner">
      <div className="container p-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src="../../piggy-logo.png"
                        alt="logo" className="image" />
                      <h4 className="danger mt-1 mb-5 pb-1">We are The Piggy Team</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          value={state.email}
                          onChange={(event) => {
                            setState({ ...state, email: event.target.value });
                          }}
                        />
                        <label
                          className="form-label"
                          htmlFor="email">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          value={state.password}
                          onChange={(event) => {
                            setState({...state, password: event.target.value});
                          }}
                          />
                        <label
                          className="form-label"
                          htmlFor="password"
                        >Password</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-4 mb-3 text-dark"
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            validate(state.email, state.password);
                          }}>Log in</button>
                        <a className="text-muted" href="/">Forgot password?</a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() =>
                            props.transition('SIGNUP')}>Create new</button>
                      </div>
                    </form>

                  </div>
                </div>
                <div className="col-lg-6 rounded-3 d-flex align-items-center gradient-custom-4">
                  <div className="text-dark px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4"><strong>Piggy Break </strong>is here to help!</h4>
                    <p className="small mb-0">Having troubles saving money? Have secret saving goals that you don't want your significant other to find out about?
                      Then look no further, Piggy Break is here to help you save and reach your goals!
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

