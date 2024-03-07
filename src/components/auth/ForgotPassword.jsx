import React, { useState } from "react";
import { Button } from "@mui/base";
import { Input } from "@mui/base";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center" style={{ background: "linear-gradient(to right, #29000F, #00101C)" }}>
      <div className="container mx-auto w-96 border-2 border-gray-500 rounded-xl">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Forgot Password</h1>
          </div>

          <hr className="w-[90%] m-auto h-[0.05rem] bg-gray-500 border-0" />

          <div className="m-7">
            <form onSubmit={handleSubmit}>
              {/* Email input */}
              <div className="mb-6 mt-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  required
                  onChange={handleEmailChange}
                  placeholder="you@company.com"
                  fullWidth
                  className="mb-4 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-transparent dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>

              {/* Submit button */}
              <div className="mb-2" >
                <Button type="submit" variant="contained" color="primary"  fullWidth>
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;