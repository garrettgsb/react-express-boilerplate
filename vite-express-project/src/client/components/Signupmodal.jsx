import { useState } from "react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    }; // Closing bracket for sendFormData function

    sendFormData(); // Call sendFormData

    if (!isOpen) {
      return null;
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      {/* <div className="fixed inset-0 backdrop-filter backdrop-blur-sm backdrop-brightness-50 backdrop-saturate-150 "></div> */}
      <div className="modal-box relative bg-base-100 p-8 rounded-md">
        <div className="flex justify-end">
          <button onClick={()=> {
            setError(false);
            onClose();
            }}>
            Close
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
            {/* <label className="block text-sm font-bodyFont text-neutral m-2">
              Email
            </label> */}
            <input
              type="email"
              id="email"
              // className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              className="input input-bordered w-full max-w-xs "
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            {/* <label
              htmlFor="password"
              className="block text-sm font-medium text-neutral m-2"
            >
              Password
            </label> */}
            <input
              type="password"
              id="password"
              // className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              className="input input-bordered w-full max-w-xs shadow-sm "
              value={password}
              onChange={handlePasswordChange}
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
  );
};

export default SignupModal;
