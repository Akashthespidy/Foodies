"use client";
import { use } from "react";
import { useActionState } from "react";
export default function MealsFormSubmit() {
  const { pending } = useActionState();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Share Meal"}
    </button>
  );
}
