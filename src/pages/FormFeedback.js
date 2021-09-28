import React, { useState } from "react";
import CodingCampFeedback from "../molecules/codingcampfeedback/CodingCampFeedback";
import TrainerFeedback from "../molecules/trainerfeedback/TrainerFeedback";
import EnvironmentFeedback from "../molecules/environmentfeedback/EnvironmentFeedback";
import { Alert } from "../atoms/alert/Alert";
import Button from "../atoms/button/Button"

const FeedbackForm = () => {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState({
    kepuasan: "",
    kejelasan: "",
    rekomendasi: "",
    pelaksanaan: "",
    masalah: "",
    ratemembantu: 0,
    ratesesuai: 0,
    retemenarik: 0,
    ratedipahami: 0,
    ratepuas: 0,
    rateterpenuhi: 0,
    ratesuasana: 0,
    trainerFeedback: [
      {
        namatrainer: "",
        ratepenyampaian: 0,
        ratepenguasaan: 0,
        rateinteraksi: 0,
        saran: "",
      },
    ],
  });

  const onChangePage = (number) => {
    setPage(number);
  };

  const onAdd = (handleChangeForm) => {
    let newobject = {
      namatrainer: "",
      ratepenyampaian: 0,
      ratepenguasaan: 0,
      rateinteraksi: 0,
      saran: "",
    };

    const newArray = input.trainerFeedback.slice();
    newArray.push(newobject);
    setInput({ trainerFeedback: newArray });
    handleChangeForm(input.trainerFeedback.length);
  };
  const onDelete = (index) => {
    const newArray = input.trainerFeedback.slice();
    newArray.splice(index, 1);
    setInput({ trainerFeedback: newArray });
  };
  const onChange = (event) => {
    let value = event.target.value;
    let rawName = event.target.name;
    let name = rawName.split("-")[0];
    let index = parseInt(rawName.split("-")[1]);
    switch (name) {
      case "masalah": {
        setInput({ ...input, masalah: value });
        break;
      }
      case "kepuasan": {
        setInput({ ...input, kepuasan: value });
        break;
      }
      case "kejelasan": {
        setInput({ ...input, kejelasan: value });
        break;
      }
      case "rekomendasi": {
        setInput({ ...input, rekomendasi: value });
        break;
      }
      case "pelaksanaan": {
        setInput({ ...input, pelaksanaan: value });
        break;
      }
      case "ratemembantu": {
        console.log(typeof value);
        setInput({ ...input, ratemembantu: parseFloat(value) });
        break;
      }
      case "ratesesuai": {
        setInput({ ...input, ratesesuai: parseFloat(value) });
        break;
      }
      case "ratemenarik": {
        setInput({ ...input, ratemenarik: parseFloat(value) });
        break;
      }
      case "ratedipahami": {
        setInput({ ...input, ratedipahami: parseFloat(value) });
        break;
      }
      case "ratepuas": {
        setInput({ ...input, ratepuas: parseFloat(value) });
        break;
      }
      case "rateterpenuhi": {
        setInput({ ...input, rateterpenuhi: parseFloat(value) });
        break;
      }
      case "ratesuasana": {
        setInput({ ...input, ratesuasana: parseFloat(value) });
        break;
      }

      case "namatrainer": {
        let { trainerFeedback: newdata } = input;
        input.trainerFeedback[index] = {
          ...newdata[index],
          namatrainer: value,
        };
        setInput({ ...input, trainerFeedback: newdata });
        break;
      }
      case "ratepenyampaian": {
        let { trainerFeedback: newdata } = input;
        input.trainerFeedback[index] = {
          ...newdata[index],
          ratepenyampaian: parseFloat(value),
        };
        setInput({ ...input, trainerFeedback: newdata });
        break;
      }
      case "ratepenguasaan": {
        let { trainerFeedback: newdata } = input;
        input.trainerFeedback[index] = {
          ...newdata[index],
          ratepenguasaan: parseFloat(value),
        };
        setInput({ ...input, trainerFeedback: newdata });
        break;
      }
      case "rateinteraksi": {
        let { trainerFeedback: newdata } = input;
        input.trainerFeedback[index] = {
          ...newdata[index],
          rateinteraksi: parseFloat(value),
        };
        setInput({ ...input, trainerFeedback: newdata });
        break;
      }
      case "sarantrainer": {
        let { trainerFeedback: newdata } = input;
        input.trainerFeedback[index] = { ...newdata[index], saran: value };
        setInput({ ...input, trainerFeedback: newdata });
        break;
      }

      default: {
        break;
      }
    }
  };
  const onSubmit = () => console.log(input);

  return (
    <>
      <form>
        <Alert
          severity="info"
          text="This form is used to improve the quality of our services"
          className="formInfo"
        />
        {page === 1 && (
          <>
            <CodingCampFeedback
              onChangePage={onChangePage}
              onChange={onChange}
              valuerekomendasi={input.rekomendasi}
              ratemembantu={input.ratemembantu}
              ratesesuai={input.ratesesuai}
              ratedipahami={input.ratedipahami}
              ratemenarik={input.ratemenarik}
            />
          </>
        )}

        {page === 2 && (
          <TrainerFeedback
            dataTrainer={input.trainerFeedback}
            onChangePage={onChangePage}
            onDelete={onDelete}
            onChange={onChange}
            onadd={onAdd}
          />
        )}

        {page === 3 && (
          <EnvironmentFeedback
            onChangePage={onChangePage}
            onChange={onChange}
            valuepelaksanaan={input.pelaksanaan}
            valuekepuasan={input.kepuasan}
            valuekejelasan={input.kejelasan}
            ratepuas={input.ratepuas}
            rateterpenuhi={input.rateterpenuhi}
            ratesuasana={input.ratesuasana}
            masalah={input.masalah}
          />
        )}
        {page === 3 && (
          <Button
            onClick={onSubmit}
            datatest="submit"
            text="submit"
            type="submit"
          />
        )}
      </form>
    </>
  );
};

export default FeedbackForm;
