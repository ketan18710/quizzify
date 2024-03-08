import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";

const AttendeeFlow = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [quizNumber, setQuizNumber] = useState("");

  // Simulated API data
  useEffect(() => {
    // Simulated API call to fetch mentor and quiz details
    // Replace this with actual API call in your application
    const fetchAPIData = async () => {
      // Simulated data response
      const mentorData = { name: "User#1" };
      const quizData = { number: "9090" };

      setMentorName(mentorData.name);
      setQuizNumber(quizData.number);
    };

    fetchAPIData();
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Add logic here to handle form submission (e.g., sending data to backend)
    console.log("Username:", username);
    console.log("Email:", email);
    // You can dispatch actions or perform any necessary operations here
  };

  return (
    <>
      {/* Header Div */}
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">Quizzify</div>
        <div className="text-xl">
          Welcome to Quizzify <span role="img" aria-label="wave">👋</span>
        </div>
      </div>
      {/* Header Div ends here*/}
      <div className="h-screen flex flex-col justify-between">
        <div style={{ flex: "1" }}></div> {/* Empty div for equal spacing */}
        <div className="flex flex-col items-center">
          <p className="text-lg text-center mb-4">
            Your mentor {mentorName} has invited you to take Quiz#{quizNumber}
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
              className="p-2 m-2 border border-gray-300 rounded"
            />
            <button onClick={handleSubmit} className="p-2 bg-green-500 text-black rounded" style={{ backgroundColor: '#B9FF66', color: 'black' }}>
              Proceed
            </button>
          </div>
        </div>
        <div style={{ flex: "1" }}></div> {/* Empty div for equal spacing */}
      </div>
    </>
  );
};

export default AttendeeFlow;
