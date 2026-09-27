import Link from "next/link";
import css from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

function Meals() {
  const meals = getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={css.header}>
        <h1>
          Delicious meals, created <span className={css.highlight}>by you</span>
        </h1>
        <p>Choose your recipe</p>
        <p className={css.cta}>
          <Link href="/meals/share">Share Your Recipe</Link>
        </p>
      </header>
      <main className={css.main}>
        <Suspense fallback={<p className={css.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
