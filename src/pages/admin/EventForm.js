import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import Button from "../../atoms/button/Button";
import TextArea from "../../atoms/textarea/TextArea";
import Grid from "../../atoms/grid/index";
import React, { useState, useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import Axios from "axios";
import Select from "react-select";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { EventContext } from "../../context/EventContext";
import { useParams } from "react-router";
import moment from "moment";
import ReactSelect from "react-select";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
const EventForm = () => {
  const { id } = useParams();
  let history = useHistory();
  const [dataEvents, setdataEvents] = useContext(EventContext);
  const [event, setEvent] = useState(null);
  const [speakerOptions, setSpeakerOptions] = useState(null);
  const { handleSubmit, setValue, control } = useForm({ mode: "onBlur" });

  useEffect(() => {
    if (speakerOptions === null) {
      Axios.get(`speaker`).then((res) => {
        console.log(res);

        let newArray = res.data.map((speaker) => ({
          value: speaker.id,
          label: speaker.name,
        }));

        setSpeakerOptions(newArray);
      });
      if (window.location.href.includes("editevent")) {
        Axios.get(`event/${id}`).then((res) => {
          const newData = res.data;
          console.log(newData);
          console.log("----------------------");

          let selectedSpeaker = newData.speaker.map((speaker) => ({
            value: speaker.id,
            label: speaker.name,
          }));

          setValue("title", newData.name);
          setValue("location", newData.location.location);
          setValue("code", newData.location.code);
          setValue("password", newData.location.password);
          setValue("description", newData.description);
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
            platformOptions.find(
              (c) => c.label === newData.location.platform.name
            )
          );
          setValue("speaker", selectedSpeaker);
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
    const startdate = moment(data.startdate)
      .format("DD/MM/YYYY h:mm:ss")
      .toString();
    const enddate = moment(data.enddate).format("DD/MM/YYYY h:mm:ss").toString();
    const opendate = moment(data.opendate)
      .format("DD/MM/YYYY h:mm:ss")
      .toString();
    const closedate = moment(data.closedate)
      .format("DD/MM/YYYY h:mm:ss")
      .toString();
    const speaker = data.speaker.map((speaker) => ({ id: speaker.value }));
    const newdata = {
      closeRegistration: closedate,
      code: data.code,
      description: data.description,
      endDate: enddate,
      location: data.location,
      name: data.title,
      openRegistration: opendate,
      password: data.password,
      platform: data.platform.value,
      speakers: speaker,
      startDate: startdate,
      status: data.status.value,
    };
    if (window.location.href.includes("editevent")) {
      Axios({
        url: `event/${id}`,
        method: "put",
        data: newdata,
      }).then((res) => {
        if (res.status == 200) {
          let singleEvent = dataEvents.find((el) => el.id === id);
          singleEvent = { id: id, ...newdata };
          setdataEvents([...dataEvents]);
          Swal.fire("Success", "Edit Event Success ", "success");
          history.push("/manageevent");
        }
      });
    } else {
      console.log("========")
      delete newdata.status;
      console.log(newdata)
      
      Axios({
        url: `event`,
        method: "post",
        data: newdata,
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          console.log("success");
        }
      });
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
            <div style={{width: '300px'}}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => {
                return (
                  <>
                    <ReactSelect style={{width:10}} isClearable {...field} options={options} />
                  </>
                );
              }}
            />
            </div>
            <Label text="Platform" className="question" />
            <div style={{width: '300px'}}>
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
            </div>
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
              //   <Editor
              //   {...field}
                
              // //  onEditorChange={onChange}
              //   init={{
              //     height: 200,
              //     menubar: false,
              //     plugins: [
              //       "advlist autolink lists link image charmap print preview anchor",
              //       "searchreplace visualblocks code fullscreen",
              //       "insertdatetime media table paste code help wordcount"
              //     ],
              //     toolbar:
              //       "undo redo | formatselect | " +
              //       "bold italic backcolor | alignleft aligncenter " +
              //       "alignright alignjustify | bullist numlist outdent indent | " +
              //       "removeformat | help",
              //     content_style:
              //       "body { font-family:Helvetica,Arial,sans-serif; font-size:14px, }"
              //    }}
              //   apiKey='i4496zrtz8ycpdqrnwfw7sbrnhqyih23uqh54sm3fvzncig6'
              
              // />
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
                <Select
                  isClearable
                  isMulti
                  options={speakerOptions}
                  {...field}
                />
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
            <Button
          
              text="submit"
         
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
export default EventForm;
