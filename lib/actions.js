"use server";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
export default async function shareMeal(formData) {
  "use server";
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  await saveMeal(meal);
  redirect("/meals"); // Redirect to the meals page after saving
}
