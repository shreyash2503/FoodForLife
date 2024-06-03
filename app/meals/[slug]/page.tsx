import { MealItemProps } from "@/components/meals/meal-item";
import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const meal = (await getMeal(params.slug)) as MealItemProps;
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className="flex items-center justify-center flex-col lg:flex-row py-[2rem] px-[1rem] gap-[3rem] m-auto max-w-[80rem]">
        <div className="relative w-[80%] h-[15rem]">
          <Image
            style={{
              boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
              animation: "fadeIn 0.5s ease-in-out forwards",
            }}
            className="object-cover rounded-[8px]"
            src={meal.image}
            alt={`Image of ${meal.title}`}
            fill
          />
        </div>
        <div className="pt-[0.5rem] pr-[1rem] pb-[0rem] pl-[1rem] text-[#ddd6cb] max-w-[40rem]">
          <h1>{meal.title}</h1>
          <p className="text-[1.5rem] text-[#cfa69b] italic">
            by{" "}
            <a
              style={{
                background: "linear-gradient(90deg, #f9572a, #ff8a05)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              href={`mailto:${meal.creator_email}`}
              className="hover:underline transition-all duration-0.3s ease-in-out"
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-[1.5rem]">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          style={{
            boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
            animation: "fadeIn 0.5s ease-in-out forwards",
          }}
          className="lg:text-[1.25rem] sm:text-[1rem] sm:text-justify lg:text-left bg-[#6e6464] text-[#13120f] rounded-[8px] p-[2rem] max-w-[60rem] my-[2rem] mx-[4rem]"
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
