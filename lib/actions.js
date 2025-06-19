"use server";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
export async function shareMeal(prevState, formData) {
  function isInvalidText(text) {
    return !text || text.trim() === "";
  }
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  if (
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "All fields are required and the image must be provided.",
    };
  } else if (meal.creator_email.indexOf("@") === -1) {
    return {
      message: "Please provide a valid email address.",
    };
  }
  await saveMeal(meal);
  redirect("/meals"); // Redirect to the meals page after saving
}
