import React, { useState } from "react";
import axios from "axios";
import { carsData, marks } from "../autoPosterData";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { comment } from "postcss";

// material ui

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select, TextField } from "@mui/material";

const Massange = () => {
  const [open, setOpen] = React.useState(0);
  const [link, setlink] = useState("https://auto-poster.netlify.app/");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mark, setmark] = useState("");
  const [model, setmodel] = useState("");
  const [massange, setmassange] = useState("");
  const [error, setError] = useState("");

  const faild = () =>
    toast.error("Malumotnomani toldiring 📌", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      text: "start",
    });

  const success = () =>
    toast.success("Malumot yuborildi 🚀", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      text: "start",
    });

  const [emailError, setemailerror] = useState(false);
  const [nameerror, setnameerror] = useState(false);
  const [coerror, setcoerror] = useState(false);
  const [markError, setmarkError] = useState(false);
  const [modelerror, setmodelerror] = useState(false);

  const modelArr = carsData.filter((e) => e.mark === mark);

  function setModelToArray(arr) {
    let models = new Set();
    arr.forEach((item) => {
      let model = item.name;
      models.add(model);
    });
    let ModelsArr = Array.from(models);
    return ModelsArr;
  }

  const models = setModelToArray(modelArr);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      mark === "" ||
      model === "" ||
      massange === ""
    ) {
      faild();
      // if (mark == "") {
      //   setmarkError(true);
      // }
      // if (model == "") {
      //   setmodelerror(true);
      // }
      // if (massange == "") {
      //   setcoerror(true);
      // }
      // if (name == "") {
      //   setnameerror(true);
      // } else {
      //   setnameerror(false);
      // }
      // if (email == "") {
      //   setemailerror(true);
      // }
    } else {
      success();
      const telegram_bot_id = "6385516963:AAFFX6rdrEn75OwlNSCR4Gkus-L3mVX0S5o";
      const chat_id = "6940337371";

      const telegramMessage = `
      ${link} rasmiy saytiga "${mark} ${model}" nomi automobil uchun kredit xujjatlashtirish uchun yangi foidalanuvchi sorov yubordi 📌\n\n foidalanuvchi Ismi: ${name}\n foidalanuvchi Email: ${email}\n\n foidalanuvhi izohi boyicha:\n ${massange}\n\n foidalanuvchini 👤 sorovini korib chiqish talab qilinadi ✅
      `;

      axios
        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setName("");
          setEmail("");
          setmark("");
          setmodel("");
          setmassange("");
        });
      // .catch((error) => {
      //   console.error(error);
      // });
    }
    if (!validateEmail(email)) {
      setError("Hatolik! Malumot email formatida emas");
      return;
    }
  };
  return (
    <div className=" w-full p-8 shadov rounded-lg text-center stick lg:w-[30%]">
      <h3 className="textStyle text-[24px] mb-4">Automobilga kredit olish</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormControl fullWidth>
          <InputLabel id="mark">Marka</InputLabel>
          <Select
            id="mark"
            labelId="mark"
            label="Marka"
            defaultValue={"marka"}
            className={`rounded-lg bg-gray-100 o2 text-start`}
            onChange={(e) => setmark(e.target.value)}
            value={mark}
          >
            {marks.map((car) => {
              return (
                <MenuItem key={car} value={car}>
                  {car}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="mark">Model</InputLabel>
          <Select
            id="model"
            labelId="model"
            label="Model"
            defaultValue={"marka"}
            className={`rounded-lg bg-gray-100 o2 text-start`}
            onChange={(e) => setmodel(e.target.value)}
            value={model}
          >
            {models.length === 0 && (
              <MenuItem disabled value="nothin">
                Marka Tanlang
              </MenuItem>
            )}
            {models.length !== 0 &&
              models.map((car) => {
                return (
                  <MenuItem key={car} value={car}>
                    {car}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <TextField
          className="w-full bg-gray-100 o2 text-start"
          id="outlined-basic"
          label="Izohingiz"
          onChange={(e) => setmassange(e.target.value)}
          value={massange}
        />
        <br />
        <h3 className="textStyle text-[18px] text-left mb-4">
          malumotingizni kiriting
        </h3>
        <TextField
          className="w-full bg-gray-100 o2 text-start"
          id="outlined-basic"
          label="toliq ismingizni kiriting"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          className="w-full bg-gray-100 o2 text-start"
          id="outlined-basic"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        {error}

        <button
          type="submit"
          className="py-3 bg-[#e70a32] w-full rounded-md text-white"
        >
          sorovni jonatish
        </button>
      </form>

      <br />
      <p className="fontStyle text-[12px] text-gray-500">
        Tugmani bosish orqali siz shaxsiy ma'lumotlarni qayta ishlashga rozilik
        bildirasiz
      </p>
      <ToastContainer />
    </div>
  );
};

export default Massange;
