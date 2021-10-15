import React, {  useState, useEffect } from "react";
import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import Button from "../../atoms/button/Button";
import Axios from "axios";
import { Alert } from "../../atoms/alert/Alert";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
const Feedback = () => {
  let history = useHistory();
  let { regis } = useParams();
  const { control, handleSubmit } = useForm();
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    if (question === null) {
      Axios.get(`question-feedback`).then((res) => {
        setQuestion(res.data);
      });
    }
  });
  const onSubmit = (data) => {
    if (data.question1 && data.question2 && data.question3 && data.question4) {
      Axios({
        url: "/feedback",
        method: "post",
        data: [
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
        ],
      }).then((res) => {
        if (res.status === 200) {
          Swal.fire("Success", "Success Submit Feedback", "success");
          history.push("/home");
        } else {
          Swal.fire("Error", "Failed Submit Feedback ", "error");
        }
      });
    } else {
      Swal.fire("Error", "Failed Submit Feedback ", "error");
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
                </>
              );
            })}
            <br />
            <br />

            <Button
              color="primary"
              text="submit"
              type="submit"
              style={{
                backgroundColor: "#3f50b5",
              }}
            />
          </form>
        </>
      )}
    </>
  );
};
export default Feedback;
