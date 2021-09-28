import Label from "../../atoms/label/Label";
import RadioButton from "../../atoms/radiobutton/RadioButton";
import TextArea from "../../atoms/textarea/TextArea";
import Star from "../../atoms/star/Star";
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
      <TextArea
        name="masalah"
        onChange={props.onChange}
        value={props.masalah}
      />
        <Label text="OFFLINE" className="title" />
      <Label
        text="Apakah anda puas dengan lingkungan pekerjaan di PT. Mitra Integrasi Informatika ?"
        className="question"
      />
      <Star name="ratepuas" value={props.ratepuas} onChange={props.onChange} />
      <br />
      <Label
        text="Apakah keperluan belajar (Papan Tulis, Projector, Alat Tulis, Meja, dll) sudah terpenuhi pada saat pembelajaran ?"
        className="question"
      />
      <Star
        name="rateterpenuhi"
        value={props.rateterpenuhi}
        onChange={props.onChange}
      />
      <br />
      <Label
        text="Apakah suasana ruangan sudah memenuhi kriteria untuk suasana belajar ?"
        className="question"
      />
      <Star
        name="ratesuasana"
        value={props.ratesuasana}
        onChange={props.onChange}
      />
      <br />
    
    </div>
  );
};
export default Online;
