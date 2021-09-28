import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import TextArea from "../../atoms/textarea/TextArea";
import Star from "../../atoms/star/Star";
import Button from "../../atoms/button/Button";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";

const TrainerFeedback = (props) => {
  const [active, setActive] = useState(0);
  const handleChangeForm = (index) => {
    setActive(index);
  };
  return (
    <>
      <Label text="TRAINER FEEDBACK" className="title" />
      {props.dataTrainer.map((data, index) => {
        return (
          <>
            <div style={{ display: "inline-block" }}>
              <Button
                text={`Form${index + 1}`}
                variant={active===index?"outlined":"contained"}
                type="delete"
                onClick={() => handleChangeForm(index)}
              ></Button>
              {index !== 0 && (
                <Button
                  className="delete"
                  color="secondary"
                  startIcon={<CloseIcon />}
                  onClick={() => {
                    handleChangeForm(index - 1);
                    props.onDelete(index);
                  }}
                />
              )}
            </div>
          </>
        );
      })}
      <Button
        startIcon={<AddIcon />}
        className="add"
        onClick={() => {
          props.onadd(handleChangeForm);
        }}
      ></Button>
      <br />
      <br />
      <TextField
        label="Nama Trainer"
        datatest={`namatrainer-${active}`}
        name={`namatrainer-${active}`}
        onChange={props.onChange}
        value={props.dataTrainer[active].namatrainer}
        className="trainer"
      />
      <br />
      <Label text="Bagaimana cara penyampaian materi ?" className="question" />
      <Star
        name={`ratepenyampaian-${active}`}
        value={props.dataTrainer[active].ratepenyampaian}
        onChange={props.onChange}
      />
      <br />

      <Label
        text="Apakah Trainer pada masing - masing segment menguasai materi ?"
        className="question"
      />
      <Star
        name={`ratepenguasaan-${active}`}
        value={props.dataTrainer[active].ratepenguasaan}
        onChange={props.onChange}
      />
      <br />
      <Label
        text="Bagaimana interaksi Trainer dengan peserta Coding Camp ?"
        className="question"
      />
      <Star
        name={`rateinteraksi-${active}`}
        value={props.dataTrainer[active].rateinteraksi}
        onChange={props.onChange}
      />
      <br />
      <Label
        text="Saran untuk Trainer"
        className="question"
      />
      <TextArea
        name={`sarantrainer-${active}`}
        value={props.dataTrainer[active].saran}
        onChange={props.onChange}
      />
      <br />

      <Button text="Prev" onClick={() => props.onChangePage(1)} />
      <Button text="Next" onClick={() => props.onChangePage(3)} />
    </>
  );
};

export default TrainerFeedback;
