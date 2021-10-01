import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import Button from "../../atoms/button/Button";
import Paper from "@material-ui/core/Paper";
import { Alert } from "../../atoms/alert/Alert";
import React, { useState } from "react";
import ReactSelect from "react-select";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import Grid from "@material-ui/core/Grid";
import "react-datepicker/dist/react-datepicker.css";
import TextArea from "../../atoms/textarea/TextArea";
const EventForm = () => {
  const defaultValues = {
    title: "",
    description: "",
    location: "",
    code: "",
    password: "",
    speaker: "",
    startdate: "",
    enddate: "",
    image_url: "",
  };
  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.set("image", data.imagefile[0]);
    // axios
    //   .post(
    //     "https://api.imgbb.com/1/upload?key=e89f02c8622e737decf2b7a248bfd467",
    //     formData
    //   )
    //   .then((res) => console.log(res.data))
    //   .catch(console.error);
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
          //  {...register("imagefile")}
        />
        {/* <button type="submit">Upload!</button> */}
        <Label text="Event Title" className="question" />
        <Controller
          render={({ field }) => <TextField {...field} />}
          control={control}
          name="title"
          datatest="title"
          className="root"
        />
        {/* <TextField
          datatest="title"
          name="title"
          className="root"
          value={input.title}
          {...register("title")}
        /> */}
        <Label text="Event Description" className="question" />
        <Controller
          render={({ field }) => <TextArea {...field} />}
          control={control}
          name="description"
          datatest="title"
        />

        <Label text="Location" className="question" />
        <Controller
          render={({ field }) => <TextField {...field} />}
          control={control}
          datatest="location"
          name="location"
          className="root"
        />
        <Label text="Code" className="question" />
        <Controller
          render={({ field }) => <TextField {...field} />}
          control={control}
          datatest="code"
          name="code"
          className="root"
        />
        <Label text="Password" className="question" />
        <Controller
          render={({ field }) => <TextField {...field} />}
          control={control}
          datatest="password"
          name="password"
          className="root"
        />
        <Label text="Speaker" className="question" />
        <Controller
          name="ReactSelect"
          isClearable
          control={control}
          render={({ field }) => (
            <div style={{ width: "300px" }}>
              <ReactSelect
                {...field}
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
              />
            </div>
          )}
        />
        <Label text="Date" className="question" />
      
        
         
       <Grid container>
        <Grid item xs={2}>
        <Controller
            control={control}
            name="startdate"
            render={({ field }) => (
              <ReactDatePicker
                className="input"
                placeholderText="Start date"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
        <Controller
            control={control}
            name="enddate"
            render={({ field }) => (
              <ReactDatePicker
                className="input"
                placeholderText="End date"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
              />
            )}
          />
        </Grid>
      </Grid>
        
        <br />

        <Button datatest="submit" text="submit" type="submit" />
      </form>
    </>
  );
};
export default EventForm;
