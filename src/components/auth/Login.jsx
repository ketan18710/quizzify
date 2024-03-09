import React, { useState } from "react";
import { Button, Input } from "@mui/base";
import quizzifyLogo from "../Home/images/heroImg.svg";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from "../../utils";
//import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://quizzify-4.onrender.com/api/users/login",
        { email, password }
      );
      console.log('Login works');
      //console.log(response?.data?.message);
     // toast.success(response?.data?.message);
      const navigate = useNavigate();      
      navigate(APP_ROUTES.HOME);
       //history.push(APP_ROUTES.HOME); 

    } catch (error) {
     // console.log(error.response.data.message);
      toast.error(error?.response?.data?.message);
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="relative w-screen h-screen flex flex-col justify-items-start items-center bg-gradient-to-r from-white-900 to-white-500">     
      <div className="container mx-auto w-96 border-2 border-gray-500 rounded-xl p-8">
        <div className="max-w-md mx-auto my-10">
          <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200 text-center bg-[#B9FF66]">Quizzify</h1>
          <h4 className="my-1 text-1xl font-thin text-gray-700 dark:text-gray-200 text-center ">Login</h4>
          <div className="mb-2 flex justify-center py-2">
            {/* <Button
              variant="contained"
              color="primary"
              startIcon={<FcGoogle />}
              className="my-4"
              // onClick={handleGoogleLogin}
            >
              Login with Google
            </Button> */}
          </div>
          <hr className="w-[90%] m-auto h-[0.05rem] bg-gray-500 border-0" />
          <div className="m-7"background-color="#B9FF66">
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                value={email}
                required
                onChange={handleEmailChange}
                placeholder="you@company.com"
                fullwidth                
                className="mb-6"       
                style={{bgcolor: "#B9FF66" }}                         
              />
              <Input
                type="password"
                value={password}
                required
                onChange={handlePasswordChange}
                placeholder="Your Password"
                fullwidth
                className="mb-4"
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
              <p className="text-sm text-center text-gray-400 mt-4">
                Don't have an Account?{" "}
                <a href="http://localhost:5173/register" className="text-blue-800 underline">
                  Signup
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>   
      <ToastContainer />  
    </div>
  );
};

export default Login;