import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import Button from "../../atoms/button/Button";
import TextArea from "../../atoms/textarea/TextArea";
import React, { useState } from "react";
import ReactSelect from "react-select";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

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
    imagefile: "",
  };
  const { handleSubmit, register, reset, setValue, control } = useForm({ defaultValues });

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
        <input
          id="imagefile"
          name="imagefile"
          type="file"
         // control={control}
         {...register("imagefile")}
        />
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Label text="Event Title" className="question" />
            <Controller
              render={({ field }) => <TextField {...field} />}
              control={control}
              name="title"
              datatest="title"
              className="root"
            />
          </Grid>
          <Grid item xs={3}>
            <Label text="Location" className="question" />
            <Controller
              render={({ field }) => <TextField {...field} />}
              control={control}
              datatest="location"
              name="location"
              className="root"
            />
          </Grid>
          <Grid item xs={3}>
            <Label text="Code" className="question" />
            <Controller
              render={({ field }) => <TextField {...field} />}
              control={control}
              datatest="code"
              name="code"
              className="root"
            />
          </Grid>
          <Grid item xs={3}>
            <Label text="Password" className="question" />
            <Controller
              render={({ field }) => <TextField {...field} />}
              control={control}
              datatest="password"
              name="password"
              className="root"
            />
          </Grid>
        </Grid>

        <Label text="Event Description" className="question" />
        <Controller
          render={({ field }) => (
            <TextArea {...field} style={{ width: "100%" }} />
          )}
          control={control}
          name="description"
          datatest="title"
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

        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Label text="Start Date" className="question" />
            <Controller
              control={control}
              name="startdate"
              render={({ field }) => (
                <DateTimePickerComponent
                  className="input"
                  placeholderText="Start date"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                />
              )}
            />
          </Grid>

          <Grid item xs={4}>
            <Label text="End Date" className="question" />
            <Controller
              control={control}
              name="enddate"
              render={({ field }) => (
                <DateTimePickerComponent
                  className="input"
                  placeholderText="Start date"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                />
              )}
            />
          </Grid>
        </Grid>
        <Label text="Feedback Question 1" className="question" />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              datatest="question1"
              className="questionfeedback"
            />
          )}
          control={control}
          name="question1"
        />
        <Label text="Feedback Question 2" className="question" />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              datatest="question2"
              className="questionfeedback"
            />
          )}
          control={control}
          name="question2"
        />
        <Label text="Feedback Question 3" className="question" />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              datatest="question3"
              className="questionfeedback"
            />
          )}
          control={control}
          name="question3"
        />
        <Label text="Feedback Question 4" className="question" />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              datatest="question4"
              className="questionfeedback"
            />
          )}
          control={control}
          name="question4"
        />
        <Label text="Feedback Question 5" className="question" />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              datatest="question5"
              className="questionfeedback"
            />
          )}
          name="question5"
          control={control}
        />
        <br />

        <Button datatest="submit" text="submit" type="submit" />
      </form>
    </>
  );
};
export default EventForm;
