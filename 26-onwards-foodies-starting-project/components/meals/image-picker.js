"use client";

import { useRef, useState } from "react";

import css from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [chosenImage, setChosenImage] = useState();
  const inputRef = useRef();

  function clickHandler() {
    inputRef.current.click();
  }

  function chooseImageHandler(event) {
    const file = event.target.files[0];
    if (!file) {
      setChosenImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = function () {
      setChosenImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={css.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={css.controls}>
        <div className={css.preview}>
          {!chosenImage && <p>No image chosen.</p>}
          {chosenImage && <Image src={chosenImage} alt="Preview" fill />}
        </div>
        <input
          className={css.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
          onChange={chooseImageHandler}
          required
        />
        <button className={css.button} type="button" onClick={clickHandler}>
          Choose Image
        </button>
      </div>
    </div>
  );
}
