import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import Button from "../../atoms/button/Button";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Axios from "axios";

const FeedbackQuestion = () => {
  const [field, setfield] = useState(null);

  const defaultValues = {
    field
    // question1: "",
    // question2: "",
    // question3: "",
    // question4: "",
  };
  const { handleSubmit, register, control, setValue } = useForm({
    // defaultValues,
    // mode: "onBlur",
  });

  useEffect(() => {
    if (field === null) {
      Axios.get(`question-feedback`).then((res) => {
        console.log(res);

        let newArray = res.data.map((obj) => ({
          id: obj.id,
          isi: obj.question,
        }));

        setfield(newArray);
      });
      if (window.location.href.includes("question")) {
        Axios.get(`question-feedback`).then((res) => {
          const newData = res.data;
          console.log(newData);
          console.log("----------------------");

          for(let i=0; i<4; i++){
          setValue("question" + (i+1) , newData[i].question);}
        });
      }
    }
  });
  console.log(field)

  const onSubmit = (data) => {
    console.log(data);

    // const newdata = {
    //   question1: data.question[0],
    //   question2: data.question[1],
    //   question3: data.question[2],
    //   question4: data.question[3],
    // };

    // if (window.location.href.includes("question")) {
    //   Axios({
    //     // url: `question-feedback/${id}`,
    //     method: "put",
    //     data: newdata,
    //   }).then((res) => {
    //     if (res.status == 200) {
    //       // let singleEvent = dataEvents.find((el) => el.id === id);
    //       // singleEvent = { id: id, ...newdata };
    //       // setdataEvents([...dataEvents]);
    //       // Swal.fire("Success", "Edit Event Success ", "success");
    //       // history.push("/manageevent");
    //     }
    //   });
    // } else {
    //   console.log("========")
    //   delete newdata.status;
    //   console.log(newdata)
      
    //   Axios({
    //     url: `event`,
    //     method: "post",
    //     data: newdata,
    //   }).then((res) => {
    //     console.log(res);
    //     if (res.status == 200) {
    //       console.log("success");
    //     }
    //   });
    // }
  };

  const pertanyaan = [
    "Feedback Question 1",
    "Feedback Question 2",
    "Feedback Question 3",
    "Feedback Question 4",
  ];

  return (
    <>
      {field && (
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
                      <TextField {...field} />
                      // <TextField
                      //
                      //   name={`${question}-${index}`}
                      //   className="questionfeedback"
                      // required
                      // />
                    )}
                    control={control}
                    datatest={`${question}-${index}`}
                    name={`"question"${index + 1}`}
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
      )}
    </>
  );
};
export default FeedbackQuestion;
