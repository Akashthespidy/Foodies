import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
async function Meals() {
  const meal = await getMeals();
  return <MealsGrid meals={meal} />;
}
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p style={{ fontSize: "1.2rem", color: "white", marginTop: "0.5rem" }}>
          Choose your favorite meals, share your own, and discover new and cook
          your self.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your meals</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Loading meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
