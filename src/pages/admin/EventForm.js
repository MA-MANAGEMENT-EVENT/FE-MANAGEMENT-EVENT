import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import Button from "../../atoms/button/Button";
import TextArea from "../../atoms/textarea/TextArea";
import Grid from "../../atoms/grid/index";
import React, { useState, useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import Axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "react-select";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { EventContext } from "../../context/EventContext";
import { useParams } from "react-router";
import moment from "moment";
import ReactSelect from "react-select";
import Multiselect from "multiselect-react-dropdown";
const dateConvert = (datetime) => {};
const EventForm = () => {
  const { id } = useParams();
  const [dataEvents, setdataEvents] = useContext(EventContext);
  const [event, setEvent] = useState(null);
  const [speakerOptions, setSpeakerOptions] = useState(null);
  //const [statusOptions,setStatusOptions]= useState(null)
  const defaultValues = {
    title: "a",
    description: "",
    location: "",
    code: "",
    password: "",
    speaker: [],
    status: "",
    startdate: "",
    enddate: "",
    // imagefile: "",
  };
  const { handleSubmit, setValue, control } = useForm({ mode: "onBlur" });

  useEffect(() => {
    if (speakerOptions === null) {
      Axios.get(`speaker`).then((res) => {
        console.log(res)
        
        let newArray = res.data.map((speaker) => ({
          value: speaker.id,
          label: speaker.name,
        }));

        setSpeakerOptions(newArray);

      });
      if (window.location.href.includes("editevent")) {
        Axios.get(`event/${id}`).then((res) => {
          const newData = res.data;
          console.log(newData)
          console.log("----------------------")
          //  let selectedSpeaker = newData.speaker.map((speaker) => speaker.id);
          let selectedSpeaker = newData.speaker.map((speaker) => ({
            value: speaker.id,
            label: speaker.name,
          }));
        
          setValue("title", newData.name);
          setValue("location", newData.location.location);
          setValue("code", newData.location.code);
          setValue("password", newData.location.password);
          setValue("description", newData.description);
          // setValue("startdate", new Date(newData.startDate));
          setValue("startdate", new Date("02/05/2021 10:40 AM"));
          setValue("enddate", new Date("02/05/2021 10:40 AM"));

          setValue("opendate", new Date("02/05/2021 10:40 AM"));
          setValue("closedate", new Date("02/05/2021 10:40 AM"));
          setValue(
            "status",
            options.find((c) => c.label === newData.status.name)
          );
          setValue(
            "platform",
            platformOptions.find((c) => c.label === newData.location.platform.name)
          );

          // speakerOptions.filter((speaker)=>{
          //   return  newArraySpeaker.includes()
          // })
          setValue("speaker", selectedSpeaker);

          // new Date("02/05/2021 10:30 AM")
          // setGame(newData);
        });
      }
    }
  });
  const options = [
    { value: "1", label: "Publish" },
    { value: "2", label: "Draft" },
    { value: "3", label: "Cancel" },
  ];
  const platformOptions = [

    { value: "PE001", label: "offline" },
    { value: "PE002", label: "Google Meet" },
    { value: "PE003", label: "Zoom" },
    { value: "PE004", label: "Microsoft Teams" },
  ];

  const onSubmit = (data) => {
  
    const startdate= moment(data.startdate).format("DD/MM/YYYY h:mm a").toString();
    const enddate= moment(data.enddate).format("DD/MM/YYYY h:mm a").toString();
    const opendate= moment(data.opendate).format("DD/MM/YYYY h:mm a").toString();
    const closedate= moment(data.closedate).format("DD/MM/YYYY h:mm a").toString();
    const speaker = data.speaker.map((speaker)=>({"id" : speaker.value}))
    // console.log("==============")
 // console.log(data.speaker.map((speaker)=> speaker.value))
    // console.log(closedate)
    // console.log(data.code)
    // console.log(data.description)
    // console.log(enddate)
    // console.log(data.location)
    // console.log(data.title)
    // console.log(opendate)
    // console.log(data.password)
    // console.log(data.platform.value)
    // console.log(speaker)
    // console.log(startdate)
    // console.log(data.status.value)
    if(window.location.href.includes("editevent")){
     // const speaker = data.speaker.map((speaker)=>({"id" : speaker.value}))
      Axios({
        url: `event/${id}`,
        method: 'put',
        data:{
          "closeRegistration": closedate,
          "code": data.code,
          "description": data.description,
          "endDate": enddate,
          "location": data.location,
          "name": data.title,
          "openRegistration": opendate,
          "password": data.password,
          "platform": data.platform.value,
          "speakers": speaker,
          "startDate": startdate,
          "status": data.status.value
        }
      }).then((res)=>{
        console.log(res)
        if(res.status == 200){
          console.log("success")
        }
      })
    }else{
      console.log(speaker)
     
      Axios({
        url: `event`,
        method: 'post',
        data:{
          "closeRegistration": closedate,
          "code": data.code,
          "description": data.description,
          "endDate": enddate,
          "location": data.location,
          "name": data.title,
          "openRegistration": opendate,
          "password": data.password,
          "platform": data.platform.value,
          "speakers": speaker,
          "startDate": startdate,
          "status": data.status.value
        }
      }).then((res)=>{
        console.log(res)
        if(res.status == 200){
          console.log("success")
        }
      })
    }
  
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
      {speakerOptions && (
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
            <Label text="Status" className="question" />
            <Controller
              name="status"
              control={control}
              render={({ field }) => {
                return (
                  <>
                    <ReactSelect
                      isClearable
                      {...field}
                      options={options}
                    />
                  </>
                );
              }}
            />
             <Label text="Platform" className="question" />
            <Controller
              name="platform"
              control={control}
              render={({ field }) => {
                return (
                  <>
                    <ReactSelect
                      isClearable
                      {...field}
                      options={platformOptions}
                    />
                  </>
                );
              }}
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
              control={control}
              name="speaker"
              render={({ field }) => (
                <Select isClearable  isMulti options={speakerOptions} {...field} />
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

            <Grid container spacing={4}>
            <Grid item xs={4}>
                <Label text="Open Registration" className="question" />
                <Controller
                  control={control}
                  name="opendate"
                  render={({ field }) => (
                    <DateTimePickerComponent
                      className="input"
                      placeholderText="Open date"
                      // onChange={(e) => field.onChange(e)}
                      // selected={field.value}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Label text="Close Registration" className="question" />
                <Controller
                  control={control}
                  name="closedate"
                  render={({ field }) => (
                    <DateTimePickerComponent
                      className="input"
                      placeholderText="Close date"
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
      )}
    </>
  );
};
export default EventForm;
