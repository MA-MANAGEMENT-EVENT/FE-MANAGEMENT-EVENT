import React, { useContext, useState, useEffect } from "react";
import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import Button from "../../atoms/button/Button";
import Axios from "axios";
import { Alert } from "../../atoms/alert/Alert";
import { useForm, Controller } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";
const Feedback = () => {
  let { id, regis } = useParams();
  const { control, register, handleSubmit } = useForm();
  const [User, setUser] = useContext(UserContext);
  const [question, setQuestion] = useState(null);
  const [input, setInput] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });
  useEffect(() => {
    if (question === null) {
      Axios.get(`question-feedback`).then((res) => {
        setQuestion(res.data);
      });
    }
  });
  const onSubmit = (data) => {
    console.log(regis)
    if (data.question1 && data.question2 && data.question3 && data.question4) {
      Axios({
        url: '/feedback',
        method: 'post',
        data:[
          {
            answer: data.question1,
            question: question[0].id,
            registration: regis,
          },
          {
            answer: data.question2,
            question: question[1].id,
            registration: regis,
          },
          {
            answer: data.question3,
            question: question[2].id,
            registration: regis,
          },
          {
            answer: data.question4,
            question: question[3].id,
            registration: regis,
          },
        ]
      }).then((res)=>{
        if(res.status == 200){
          console.log("success")
        }
      })
    }
  };

  return (
    <>
      {question && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Alert
              severity="info"
              text="This form is used to improve the quality of our services"
              className="formInfo"
            />
            <Label text="FEEDBACK" className="title" />
            {question.map((q, index) => {
              return (
                <>
                  <Label text={q.question} className="question" />
                  <Controller
                    render={({ field }) => <TextField {...field} />}
                    control={control}
                    name={`question${index + 1}`}
                    className="root"
                  />
                  {/* <TextField
                datatest={`${question}-${index}`}
                name={`${question}-${index}`}
                //   onChange={props.onChange}
                value={input[question]}
                className="root"
              /> */}
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
      )}
    </>
  );
};
export default Feedback;
