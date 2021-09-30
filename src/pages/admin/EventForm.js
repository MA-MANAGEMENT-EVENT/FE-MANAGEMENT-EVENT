import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import Button from "../../atoms/button/Button";
import Paper from "@material-ui/core/Paper";
import { Alert } from "../../atoms/alert/Alert";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const EventForm = () => {
  const { register, handleSubmit } = useForm();
  let selectedFile = null;
  const [input, setInput] = useState({
    title: "",
    description: "",
    speaker: "",
    startdate: "",
    enddate: "",
    location: "",
    image_url: "",
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.set("image", data.imagefile[0]);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=e89f02c8622e737decf2b7a248bfd467",
        formData
      )
      .then((res) => console.log(res.data))
      .catch(console.error);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label text="Form Event" className="title" />
        <Label text="Event Thumbnail" className="question" />
        {/* {input.image_url && (
          <Paper variant="outlined">
            <img src={input.image_url} />
          </Paper>
        )} */}
        <input
          id="imagefile"
          name="imagefile"
          type="file"
          {...register("imagefile")}
        />
        {/* <button type="submit">Upload!</button> */}
        <Label text="Event Title" className="question" />
        <TextField
          datatest="title"
          name="title"
          //   onChange={props.onChange}
          value={input.title}
          className="root"
        />
         <Button
          datatest="submit"
          text="submit"
          type="submit"
        />
      </form>
    </>
  );
};
export default EventForm;
