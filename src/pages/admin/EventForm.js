import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import Button from "../../atoms/button/Button";
import TextArea from "../../atoms/textarea/TextArea";
import Grid from "../../atoms/grid/index";
import React, { useState, useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { EventContext } from "../../context/EventContext";
import { useParams } from "react-router";
import moment from 'moment'
const dateConvert = (datetime)=>{

}
const EventForm = () => {
  const { id } = useParams();
  const [dataEvents, setdataEvents] = useContext(EventContext);
  const [event, setEvent] = useState(null);
  const defaultValues = {
    title: "a",
    description: "",
    location: "",
    code: "",
    password: "",
    speaker: ["Option 1"],
    startdate: "",
    enddate: "",
    // imagefile: "",
  };
  const { handleSubmit,  setValue, control } = useForm({ mode: 'onBlur' });

  useEffect(() => {
    if (window.location.href.includes("editevent") && event === null) {
      axios.get(`event/${id}`).then((res) => {
        console.log(res.data);
        const newData = res.data;
        setValue("title", newData.name);
        setValue("location", newData.location.location);
        setValue("code", newData.location.code);
        setValue("password", newData.location.password);
        setValue("description", newData.description);
        // setValue("startdate", new Date(newData.startDate));
        setValue("startdate", new Date("02/05/2021 10:40 AM"));
        setValue("enddate", new Date("02/05/2021 10:40 AM"));
        // new Date("02/05/2021 10:30 AM")
        // setGame(newData);
        // console.log(newData);
      });
    }
  });
  const options = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
    { id: 5, name: "Option 5" },
    { id: 6, name: "Option 6" },
  ];


  const onSubmit = (data) => {
    console.log(data);
    console.log(moment(data.startDate).format('DD/MM/YYYY h:mm:ss a'));
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
        {/* <Label text="Event Thumbnail" className="question" />
        <input
          id="imagefile"
          name="imagefile"
          type="file"
          // control={control}
          {...register("imagefile")}
        /> */}
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

        {/* <Label text="Speaker" className="question" />
        <Controller
          name="speaker"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                select
                name="speaker"
                variant="outlined"
                label="speaker"
                SelectProps={{
                  multiple: true,
                  value: defaultValues.speaker,
                  ...field,
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            );
          }}
        /> */}

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
               {...field}
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
                  // onChange={(e) => field.onChange(e)}
                  // selected={field.value}
                  {...field}
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
