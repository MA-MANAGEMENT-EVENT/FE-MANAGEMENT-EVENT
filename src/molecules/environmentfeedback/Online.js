import Label from "../../atoms/label/Label";
import RadioButton from "../../atoms/radiobutton/RadioButton";
import TextArea from "../../atoms/textarea/TextArea";
import React from "react";
const Online = (props) => {
 
  return (
    <div>
    <Label text="ONLINE" className="title" />
    <Label
      text="Apakah anda puas dengan aplikasi conference yang digunakan ?"
      className="question"
    />
    <RadioButton
      buttonvalue={["ya", "tidak"]}
      buttonlabel={["ya", "tidak"]}
      groupname={"kepuasan"}
      groupvalue={props.valuekepuasan}
      onChange={props.onChange}
    />

    <Label
      text="Apakah anda melihat dan mendengar presentasi dengan jelas ?"
      className="question"
    />
    <RadioButton
      buttonvalue={["ya", "tidak", "terkadang"]}
      buttonlabel={["ya", "tidak", "terkadang"]}
      groupname={"kejelasan"}
      groupvalue={props.valuekejelasan}
      onChange={props.onChange}
    />

    <Label
      text="Masalah apa yang anda temui pada aplikasi yang digunakan untuk conference call ?"
      className="question"
    />
    <TextArea name="masalah" onChange={props.onChange} value={props.masalah}/>
  </div>

  );
};
export default Online;
