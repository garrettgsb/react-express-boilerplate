import { useState } from "react";

const SignupModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <button onClick={onClose}>Close</button>
        </div>
        <div className="text-2xl font-bold mb-6 font-heading tracking-wide">Sign Up</div>
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
