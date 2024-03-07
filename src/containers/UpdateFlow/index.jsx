import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/CreateMode/Sidebar";
import Header from "../../components/Header";
import QuestionsList from "../../components/CreateMode/QuestionsList";
import { useDispatch, useSelector } from "react-redux";
import { updateQuizAction } from "../../redux/actions";

const UpdateFlow = (props) => {
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const quizSelector = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(createQuizAction("data"));
  // }, []);
  console.log(quizSelector, "quizSelector");
  console.log(questions, "questions");
  const updateQuiz = () => {
    const data = {
      id: "123e4567-e89b-12d3-a456-42665544032025",
      title: "Sample Quiz",
      status: "Active",
      createdBy: "65e1a64cda28e17235ae66e7",
      lastUpdatedBy: "65e1a64cda28e17235ae66e7",
      persistQuestions: false,
      questions: [
        {
          question_title: "What is the capital of France?",
          options: ["France", "London", "Berlin","Vara"],
          correct_answer: "Berlin",
          question_type: "mCQ",
        },
        {
          question_title: "What is the largest planet in our solar system?",
          options: ["Mars", "Jupiter", "Venus", "Saturn"],
          correct_answer: "Saturn",
          question_type: "mCQ",
        },
        {
          question_title: "Do you like this quiz?",
          options: ["Yes", "No"],
          correct_answer: "",
          question_type: "poll",
        },
      ],
    };

    dispatch(updateQuizAction(data));
  };
  return (
    <>
      <Header />
      <div className="container mt-10 h-[86vh] py-4 flex flex-row gap-8 bg-green-300 box-border">
        <div className="container w-1/2">
          <Sidebar addQuestion={addQuestion} {...props} />
        </div>
        <div className=" w-1/2 overflow-y-auto py-3 box-border rounded-lg  shadow-lg pl-2">
          {/* <Sidebar {...props} /> */}
          <QuestionsList
            updateQuiz={updateQuiz}
            questions={questions}
            {...props}
          />
        </div>
      </div>
    </>
  );
};

export default UpdateFlow;
