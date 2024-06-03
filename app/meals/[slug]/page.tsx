import { MealItemProps } from "@/components/meals/meal-item";
import { getMeal } from "@/lib/meals";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const meal = (await getMeal(params.slug)) as MealItemProps;
  return (
    <>
      <header>
        <div className="image">
          <Image src="" alt="" fill />
        </div>
        <div className="headerText">
          <h1>{meal.title}</h1>
          <p className="creator">
            by <a href={`mailto:${""}`}>NAME</a>
          </p>
          <p className="summary"> SUMMARY</p>
        </div>
      </header>
      <main>
        <p
          className="instructions"
          dangerouslySetInnerHTML={{
            __html: "...",
          }}
        ></p>
      </main>
    </>
  );
}
