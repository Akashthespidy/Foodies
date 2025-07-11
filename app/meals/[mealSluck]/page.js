import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
export default function SlugPage({ params }) {
  const meal = getMeal(params.mealSluck);
  meal.instructions = meal.instructions.replaceAll("\n", "<br />");
  if (!meal) {
    notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.tittle}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
