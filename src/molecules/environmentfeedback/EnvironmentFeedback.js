import Label from "../../atoms/label/Label";
import RadioButton from "../../atoms/radiobutton/RadioButton";

import Button from "../../atoms/button/Button";
import Online from "./Online";
import Offline from "./Offline";
import Both from "./Both";
import React from "react";
const EnvironmentFeedback = (props) => {
  return (
    <>
      <Label text="ENVIRONMENT PLACE FEEDBACK" className="title" />
      <Label
        text="Apakah dilaksanakan secara On-Line/Off-Line ?"
        className="question"
      />
      <RadioButton
        buttonvalue={["online", "offline", "keduanya"]}
        buttonlabel={["online", "offline", "keduanya"]}
        groupname={"pelaksanaan"}
        groupvalue={props.valuepelaksanaan}
        onChange={props.onChange}
      />

      {props.valuepelaksanaan === "online" && (
        <Online
          onChange={props.onChange}
          valuekepuasan={props.valuekepuasan}
          valuekejelasan={props.valuekejelasan}
          masalah={props.masalah}
        />
      )}
      {props.valuepelaksanaan === "offline" && (
        <Offline
          onChange={props.onChange}
          ratepuas={props.ratepuas}
          rateterpenuhi={props.rateterpenuhi}
          ratesuasana={props.ratesuasana}
        />
      )}
      {props.valuepelaksanaan === "keduanya" && (
        <Both
          onChange={props.onChange}
          ratepuas={props.ratepuas}
          rateterpenuhi={props.rateterpenuhi}
          ratesuasana={props.ratesuasana}
          valuekepuasan={props.valuekepuasan}
          valuekejelasan={props.valuekejelasan}
          masalah={props.masalah}
        />
      )}
      <Button text="Prev" onClick={() => props.onChangePage(2)} />
    </>
  );
};
export default EnvironmentFeedback;
