import { MealItemProps } from "./meal-item";
import { MealItem } from "./meal-item";

export default function MealsGrid({ meals }: { meals: MealItemProps[] }) {
  return (
    <ul className="w-[90%] max-w-[90rem] grid gap-4 sm:grid-cols-1 md:grid-cols-3">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal}></MealItem>
        </li>
      ))}
    </ul>
  );
}
