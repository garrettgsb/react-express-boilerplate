import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "./UI/Card/Card";
import classes from "./LoginPage.module.css";
import Button from "./UI/Button/Button";
import Axios from "axios";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

function RegistrationPage(props) {
  let navigate = useNavigate();

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:8080/register", {
      email: emailState.value,
      pw: passwordState.value,
    }).then((response) => {
      console.log(response);
    });
    props.onLogin(emailState.value, passwordState.value);
    navigate("/");
  };

  return (
    <React.Fragment>
      {!props.isLoggedIn && (
        <Card className={classes.login}>
          <form onSubmit={submitHandler}>
            <div
              className={`${classes.control} ${
                emailState.isValid === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="email">E-Mail</label>
              <input
                type="text"
                id="email"
                value={emailState.value}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                name="email"
              />
            </div>
            <div
              className={`${classes.control} ${
                passwordState.isValid === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={passwordState.value}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                name="password"
              />
            </div>
            <div className={classes.actions}>
              <Button
                type="submit"
                className={classes.btn}
                disabled={!formIsValid}
                onSubmit={submitHandler}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </Card>
      )}
      {props.isLoggedIn && <h1>Welcome Back</h1>}
    </React.Fragment>
  );
}

export default RegistrationPage;
