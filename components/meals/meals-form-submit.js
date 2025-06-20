"use client";
import { useFormState, useFormStatus } from "react-dom";
export default function MealsFormSubmit() {
  const { pending } = useFormState();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Share Meal"}
    </button>
  );
}
