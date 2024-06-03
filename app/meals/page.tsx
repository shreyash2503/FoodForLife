import { MealItemProps } from "@/components/meals/meal-item";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals as MealItemProps[]} />;
}

export default function MealPage() {
  return (
    <>
      <header className="gap-3 mt-[3rem] mr-auto mb-[5rem] ml-auto w-[90%] text-[#ddd6cb] text-[1.5rem]">
        <h1 className="font-sans">
          Delicious meals, created{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #f9572a, #ff8a05)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-[700]"
          >
            by you
          </span>
        </h1>
        <p className="m-0">
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>
        <p className="m-0">
          <Link
            style={{
              background: "linear-gradient(90deg, #f9572a, #ff9b05)",
            }}
            className=" rounded-lg inline-block mt-[1rem] py-[0.5rem] px-[1rem] text-[#ffffff] font-bold decoration-[none] hover:underline transition-all duration-0.3s ease-in-out"
            href="/meals/share"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className="flex items-center justify-center">
        <Suspense
          fallback={
            <p className="text-[#ffffff] text-center">Fetching Meals...</p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
