import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import Button from "../../atoms/button/Button";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Axios from "axios";
import Loading from "react-loading-animation";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const FeedbackQuestion = () => {
  const [questionField, setQuestionField] = useState(null);
  let history = useHistory();
  const { handleSubmit, control, setValue } = useForm({
  });

  useEffect(() => {
    window.scrollTo(0, 0)
    if (questionField === null) {
      Axios.get(`question-feedback`).then((res) => {
        let newArray = res.data.map((obj) => ({
          id: obj.id,
          isi: obj.question,
        }));
        setQuestionField(newArray);
      });
      if (window.location.href.includes("question")) {
        Axios.get(`question-feedback`).then((res) => {
          const newData = res.data;

          for (let i = 0; i < 4; i++) {
            setValue("question" + i, newData[i].question);
          }
        });
      }
    }
  });

  const onSubmit = (data) => {

    const newdata = [
      data.question0,
      data.question1,
      data.question2,
      data.question3,
    ];

    if (window.location.href.includes("question")) {
      questionField.forEach((data, index) => {
        Axios({
          url: `question-feedback/${data.id}`,
          method: "put",
          data: { question: newdata[index] },
        }).then((res) => {
          if (res.status === 200) {
            Swal.fire("Success", "Edit Feedback Questions Success ", "success");
            history.push("/manageevent");
          }
        });
      });
    }
  };

  const pertanyaan = [
    "Feedback Question 1",
    "Feedback Question 2",
    "Feedback Question 3",
    "Feedback Question 4",
  ];

  return (
    <div style={{ marginBottom: 100 }}>
      {questionField === null && (
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      )}
      {questionField && (
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
                      <TextField {...field} className="questionfeedback" required/>
                    )}
                    control={control}
                    datatest={`question${index}`}
                    name={`question${index}`}
                  />
                </>
              );
            })}
            <br /> <br />
            <Button
              datatest="submit"
              text="Back"
              color="error"
              onClick={() => history.push(`/manageevent`)}
            />
            <Button
              datatest="submit"
              text="submit"
              type="submit"
              style={{ marginLeft: 10, backgroundColor: "#3f50b5" }}
            />
          </form>
        </div>
      )}
    </div>
  );
};
export default FeedbackQuestion;
