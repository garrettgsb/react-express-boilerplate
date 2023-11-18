// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

const LoginModal = () => {
  const { handleLogin, setEmail, email } = useAuth();
  // const [email, setEmail] = useState('');
  // const navigate = useNavigate();
  
  // password state is required to use pw to login
  // const [password, setpassword] = useState('');

  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       // password is not in db hence has not been passed in here
  //       body: JSON.stringify({ email }),
  //     });

  //     if (response.ok) {
  //       const userData = await response.json();
  //       login(userData);
  //       console.log('success');

  //       // Redirect to MyProfile route
  //       navigate('/myprofile');
  //     } else {
  //       console.error('Login failed');
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //   }
  // };

  return (
    /* Login Modal */
    <dialog id="login_modal" className="modal">
      <div className="modal-box flex flex-col items-center justify-center">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg font-heading">Welcome Back!</h3>
        <div className="form-control w-full max-w-xs m-4">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control w-full max-w-xs m-4">
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs" />
        </div>
        {/* <button
          onClick={() => login()}
          className="font-subHeading bg-button hover:bg-buttonHover text-white font-bold py-2 px-4 rounded-sm"
        >
          Log in
        </button> */}
        <button
          onClick={() => handleLogin()}
          className="font-subHeading bg-button hover:bg-buttonHover text-white font-bold py-2 px-4 rounded-sm"
        >
          Log in
        </button>
      </div>
    </dialog>
  );
};

export default LoginModal;