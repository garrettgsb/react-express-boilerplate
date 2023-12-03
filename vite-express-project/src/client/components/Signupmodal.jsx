import { useState } from "react";
import Overlay from "./Overlay";

const SignupModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const sendFormData = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        onClose(); // Close the modal after successful signup
      } else {
        if (response.status === 400) {
          const errorMessage = await response.text();
          console.error("Bad Request:", errorMessage);
          setError(true);
        }
        console.error("Signup failed with status:", response.status); // Log the status code
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    sendFormData(); // Call sendFormData

    if (!isOpen) {
      return null;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendFormData();
    }
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose}/>
      <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
        <div className="modal-box relative bg-base-100 p-8 rounded-3xl">
          <div className="flex justify-end">
            <button 
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
              onClick={() => {
                setError(false);
                onClose();
              }}>
              ✕
            </button>
          </div>
          <div className="text-2xl font-bold mb-6 font-heading tracking-wide">
            Sign Up
          </div>

          {error && (
            <div className="flex justify-center">
              <div role="alert" className="alert alert-warning m-5 max-w-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Registration failed. Please check your email and password</span>
            </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                className="input input-bordered w-full max-w-xs "
                value={email}
                onChange={handleEmailChange}
                onKeyDown={handleKeyPress}
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                className="input input-bordered w-full max-w-xs shadow-sm "
                value={password}
                onChange={handlePasswordChange}
                onKeyDown={handleKeyPress}
                placeholder="Password"
                required
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn btn-primary text-white">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    
  );
};

export default SignupModal;
