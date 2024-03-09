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
    <div className="relative w-screen h-screen flex flex-col justify-items-start items-center  bg-gradient-to-r from-white-900 to-white-500">
      <div className="container mx-auto w-96 border-2 border-gray-500 rounded-xl p-8">
        <div className="max-w-md mx-auto my-10">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200 text-center bg-[#B9FF66]">Quizzify</h1>
            <h4 className="my-1 text-1xl font-thin text-gray-700 dark:text-gray-200 text-center ">Sign Up</h4>          
            <div className="mb-2 flex justify-center py-2"></div>
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
                <button type="submit" className="w-full px-3 py-4 text-black bg-green rounded-xl focus:bg-lime-600 focus:outline-none">Register</button>
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
