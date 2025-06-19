"use server";
import { saveMeal } from "./meals";
import { redirect } from "next/dist/server/api-utils";
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
  redirect("/meals");
}
