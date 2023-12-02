import { useAuth } from "../hooks/AuthContext";

const LoginModal = () => {
  const {
    handleLogin,
    setEmail,
    email,
    password,
    setPassword,
    error,
    resetError,
  } = useAuth();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
    }
  };

  return (
    /* Login Modal */
    <dialog id="login_modal" className="modal">
      <div className="modal-box flex flex-col items-center justify-center">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
            onClick={() => resetError()}
          >
            ✕
          </button>
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
              resetError();
            }}
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
              resetError();
            }}
            onKeyUp={handleKeyPress}
          />
        </div>
        <button
          onClick={() => handleLogin()}
          // className="font-subHeading bg-button hover:bg-buttonHover text-white font-bold py-2 px-4 rounded-sm"
          className="btn btn-primary text-white"
        >
          Log in
        </button>
      </div>
    </dialog>
  );
};

export default LoginModal;
