"use client";
import classes from "./image-picker.module.css";
import { useRef } from "react";
export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/*"
          required
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Choose Image
        </button>
      </div>
    </div>
  );
}
