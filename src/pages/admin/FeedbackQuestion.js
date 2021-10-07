import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import Button from "../../atoms/button/Button";
// import { Alert } from "../../atoms/alert/Alert";
// import React from "react";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const FeedbackQuestion = () => {
  const defaultValues = {
    question1: "",
    question2: "",
    question3: "",
  };
  const { handleSubmit, register, control } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const [input, setInput] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const pertanyaan = [
    "Feedback Question 1",
    "Feedback Question 2",
    "Feedback Question 3",
  ];
  return (
    <div
      style={{
        marginTop: 25,
        marginBottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ textAlign: "center" }}>
          <Label text="FEEDBACK QUESTION" className="title" />
        </div>
        <br /> <br />{" "}
        {pertanyaan.map((question, index) => {
          return (
            <>
              <Label text={question} className="question" />
              <Controller
                render={({ field }) => (
                  <TextField
                    datatest={`${question}-${index}`}
                    name={`${question}-${index}`}
                    className="questionfeedback"
                    required
                  />
                )}
                control={control}
                name={`${question}-${index}`}
              />
            </>
          );
        })}
        <br /> <br /> <br />
        <Link
          to="/manageparticipantandfeedback"
          style={{ textDecoration: "none" }}
        >
          <Button datatest="submit" text="Back" color="error" />
        </Link>
        
        <Button
          datatest="submit"
          text="submit"
          type="submit"
          style={{ marginLeft: 10, backgroundColor: "#3f50b5" }}
        />
      </form>
    </div>
  );
};
export default FeedbackQuestion;
