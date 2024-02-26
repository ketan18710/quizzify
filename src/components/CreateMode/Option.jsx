import { Input } from "@mui/base";
import React from "react";

const Option = ({ option, onChange, onClick, isCorrect }) => {
  //   console.log({ option, isCorrect }, "option");
  return (
    <Input
      value={option}
      //   onClick={onClick}
      className={`shadow-lg  box-border  h-10 `}
      slotProps={{
        input: {
          className: `w-full text-sm ${
            isCorrect && "bg-green"
          } font-sans h-10 box-border p-2  font-normal leading-5 m-0 rounded-lg shadow-lg shadow-slate-100 focus-visible:outline-0`,
        },
      }}
      aria-label="Question"
      placeholder="Enter Option"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Option;