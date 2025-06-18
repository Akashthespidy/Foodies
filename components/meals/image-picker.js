"use client";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [selectedImage, setSelectedImage] = useState(null);

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setSelectedImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {!selectedImage && <p>No pic is selected</p>}
          {selectedImage && (
            <Image src={selectedImage} alt="Selected by user " fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/jpeg,image/png"
          required
          ref={imageInput}
          onChange={handleImageChange}
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
