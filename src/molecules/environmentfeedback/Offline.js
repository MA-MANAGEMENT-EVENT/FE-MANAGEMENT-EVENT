import Label from "../../atoms/label/Label";
import Star from "../../atoms/star/Star";
import React from "react";
const Online = (props) => {
  return (
    <div>
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
