import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { Link, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setLogin(true);
    if (email && password) history.push("/");
  };

  const { url } = useRouteMatch();

  useEffect(() => {
    setTitle(url === "/login" ? "Login" : "Register");
  }, [url]);

  const toggle = url === "/login" ? "register" : "login";

  return (
    <div>
      <h1>{title}</h1>

      <form noValidate onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button variant="outlined" component={Link} to={`/${toggle}`}>
        {toggle}
      </Button>
    </div>
  );
};

export default Login;
