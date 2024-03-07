import React, { useState } from "react";
import { Input } from "@mui/base";
//import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center" style={{ background: "linear-gradient(to right, white, white)" }}>
       <img
        src={quizzifyLogo}
        alt="Logo"
        className="absolute top-0 left-0 m-4 max-w-full h-auto w-24  md:w-44 lg:w-48 xl:w-64"
      />
      <div className="container mx-auto w-96 border-2 border-gray-500 rounded-xl">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-green-700 dark:text-green-200">Sign Up</h1>
            <div className="mb-2 flex justify-center py-2">
              {/* <button type="submit" className="px-10 py-1 my-4 flex items-center justify-center text-white bg-blue-600 rounded-full focus:bg-blue-700 focus:outline-none">
                <FcGoogle />
              </button> */}
            </div>
          </div>

          <hr className="w-[90%] m-auto h-[0.05rem] bg-gray-500 border-0" />

          <div className="m-7">
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-6 mt-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                <Input
                  id="email"
                  value={email}
                  required
                  onChange={handleEmailChange}
                  placeholder="you@company.com"
                  fullWidth
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  required
                  onChange={handlePasswordChange}
                  placeholder="Your Password"
                  fullWidth
                />
              </div>

              {/* Register Button */}
              <div className="mb-2">
                <button type="submit" className="w-full px-3 py-4 text-white bg-lime-300 rounded-xl focus:bg-violet-800 focus:outline-none">Register</button>
              </div>

              {/* Login Link */}
              <p className="text-sm text-center text-gray-400">
                Already have an account?{" "}
                <a href="https://quizzify.netlify.app/login" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Log in</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
