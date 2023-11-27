import { useAuth } from "../hooks/AuthContext";
import { useEffect } from "react";

const LoginModal = () => {
  const { handleLogin, setEmail, email, password, setPassword, error, resetError } = useAuth();
  
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleLogin();
      }
    };

    const loginModalElement = document.getElementById('login_modal');
    
    //mount event listner keypress to login with enter
    if (loginModalElement) {
      loginModalElement.addEventListener('keypress', handleKeyPress);
    }
    
    //cleanup the event listner to avoid memory leaks
    return () => {
      if (loginModalElement) {
        loginModalElement.removeEventListener('keypress', handleKeyPress);
      }
    };
  }, [handleLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    /* Login Modal */
    <dialog id="login_modal" className="modal">
      <div className="modal-box flex flex-col items-center justify-center">
        <form method="dialog" onSubmit={handleSubmit}>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => resetError()}>✕</button>
        </form>
        <h3 className="font-bold text-xl font-heading">Welcome Back!</h3>
        {error && <div className="text-error font-subHeading">{error}</div>}
        <div className="form-control w-full max-w-xs m-4">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              resetError();}}
          />
        </div>
        <div className="form-control w-full max-w-xs m-4">
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              resetError();}} />
        </div>
        <button
          // onClick={() => handleLogin()}
          type="submit"
          className="btn btn-primary text-white"
        >
          Log in
        </button>
      </div>
    </dialog>
  );
};

export default LoginModal;