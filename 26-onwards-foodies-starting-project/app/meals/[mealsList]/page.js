import Image from "next/image";
import css from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function MealsListPage({ params }) {
  const meal = getMeal(params.mealsList);
  if (!meal) notFound();

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={css.header}>
        <div className={css.image}>
          <Image src={meal.image} alt="Meal Image" fill />
        </div>
        <div className={css.headerText}>
          <h1>{meal.title}</h1>
          <p className={css.creator}>
            by <a href={`mailto:${meal.create_email}`}>{meal.creator}</a>
          </p>
          <p className={css.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={css.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
