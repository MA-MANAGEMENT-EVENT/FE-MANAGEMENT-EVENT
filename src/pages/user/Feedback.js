import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import Button from "../../atoms/button/Button";
import { Alert } from "../../atoms/alert/Alert";
import React, { useState } from "react";
const Feedback = () => {
  const [input, setInput] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });
  const pertanyaan = [
    "question1",
    "question2",
    "question3",
    "question4",
    "question5",
  ];
  return (
    <>
      <form>
        <Alert
          severity="info"
          text="This form is used to improve the quality of our services"
          className="formInfo"
        />
        <Label text="TRAINER FEEDBACK" className="title" />
        {pertanyaan.map((question, index) => {
          return (
            <>
              <Label text={question} className="question" />
              <TextField
                datatest={`${question}-${index}`}
                name={`${question}-${index}`}
                //   onChange={props.onChange}
                value={input[question]}
                className="root"
              />
            </>
          );
        })}
        <br />{" "}
        <Button
          // onClick={onSubmit}
          datatest="submit"
          text="submit"
          type="submit"
        />
      </form>
    </>
  );
};
export default Feedback;
