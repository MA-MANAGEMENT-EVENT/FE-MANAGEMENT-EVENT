import React, { useState } from "react";
import Label from "../../atoms/label/Label";
import RadioButton from "../../atoms/radiobutton/RadioButton";
import Star from "../../atoms/star/Star";
import Button from "../../atoms/button/Button";
import { Alert } from "../../atoms/alert/Alert";

const CodingCampFeedback = (props) => {
  const valid = () => {
    props.ratemembantu !== 0 &&
    props.ratesesuai !== 0 &&
    props.menarik !== 0 &&
    props.ratedipahami !== 0 &&
    props.valuerekomendasi !== null
      ? props.onChangePage(2)
      : seterror(true);
  };

  const [error, seterror] = useState(false);

  return (
    <>
      {error && (
        <Alert
          severity="error"
          text={`Error — Please fill all field`}
          className="formInfo"
        />
      )}
      <Label text="CODING CAMP FEEDBACK" className="title" />
      <Label
        text="Seberapakah membantu pelatihan Coding Camp ini untuk anda ? "
        className="question"
      />
      <Star
        name="ratemembantu"
        value={props.ratemembantu}
        onChange={props.onChange}
        datatest="ratemembantu"
      />
      <br />
      <Label
        text="Apakah materi yang diberikan sudah sesuai untuk menjadi seorang Developer ?"
        className="question"
      />
      <Star
        name="ratesesuai"
        value={props.ratesesuai}
        onChange={props.onChange}
      />
      <br />
      <Label
        text="Apakah materi pelatihan Coding Camp ini menarik ?"
        className="question"
      />
      <Star
        name="ratemenarik"
        value={props.ratemenarik}
        onChange={props.onChange}
      />
      <br />
      <Label
        text="Apakah materi pelatihan Coding Camp ini mudah dipahami ?"
        className="question"
      />
      <Star
        name="ratedipahami"
        value={props.ratedipahami}
        onChange={props.onChange}
      />
      <br />

      <Label
        text="Apakah anda ingin merekomendasikan pelatihan ini ke teman ? "
        className="question"
      />
      <RadioButton
        buttonvalue={["ya", "tidak", "mungkin"]}
        buttonlabel={["ya", "tidak", "mungkin"]}
        groupname={"rekomendasi"}
        groupvalue={props.valuerekomendasi}
        onChange={props.onChange}
      />

      <Button
        text="Next"
        onClick={() => {
          valid();
        }}
      />
    </>
  );
};
export default CodingCampFeedback;
