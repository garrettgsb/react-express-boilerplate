import React from 'react';
import './LoginUser.scss';

const LoginUser = () => {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
<<<<<<< bb1511c74770290892fdb7e91eaf9f94362300ba
export default RegisterUser;
=======
export default LoginUser; 
>>>>>>> Make changes for user authentication
