import { useAuth } from "../hooks/AuthContext";

const LoginModal = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    /* Login Modal */
    <dialog id="login_modal" className="modal">
      <div className="modal-box flex flex-col items-center justify-center">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg font-heading">Welcome Back!</h3>
        <div className="form-control w-full max-w-xs m-4">
          <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs m-4">
          <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
        </div>
        <button
          onClick={() => login()}
          className="font-subHeading bg-button hover:bg-buttonHover text-white font-bold py-2 px-4 rounded-sm"
        >
          Log in
        </button>
      </div>
    </dialog>
  );
};

export default LoginModal;