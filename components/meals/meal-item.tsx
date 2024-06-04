import Link from "next/link";
import Image from "next/image";

export type MealItemProps = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  instructions: string;
  creator_email: string;
};

export function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: MealItemProps) {
  return (
    <article
      style={{
        boxShadow: "0 0 12px rgba(0, 0, 0, 0.3)",
        background: "linear-gradient(90deg, #2c1e19, #25200f)",
      }}
      className="flex flex-col justify-between h-[100%] rounded-[4px] overflow-hidden transition-all duration-0.3s ease-in-out text-[#ddd6cb]"
    >
      <header>
        <div className="relative h-[15rem]">
          <Image
            className="object-cover"
            src={`https://shreyash-food-for-life-s3-bucket.s3.us-west-2.amazonaws.com/${image}`}
            alt={title}
            fill
          />
        </div>
        <div className="pt-[0.5rem] pr-[1rem] pb-[0] pl-[1rem]">
          <h2 className="m-0 text-[1.5rem] font-sans">{title}</h2>
          <p className="m-0 text-[1.5rem] text-[#cfa69b] italic">
            by {creator}
          </p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-[100%]">
        <p className="p-[1rem]">{summary}</p>
        <div className="p-[1rem] text-right">
          <Link
            style={{
              background: "linear-gradient(90deg, #f9572a, #ff9b05)",
            }}
            className="inline-block rounded-lg mt-[1rem] py-[0.5rem] px-[1rem] text-[#ffffff] font-bold no-underline hover:underline transition-all duration-0.3s ease-in-out"
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
