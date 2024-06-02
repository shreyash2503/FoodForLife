import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

export default function CommunityPage() {
  return (
    <>
      <header className="gap-[3rem] mt-[3rem] mr-auto mb-[5rem] ml-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem] text-center">
        <h1 className="font-sans text-3xl">
          One shared passion:
          <span
            style={{
              background: "linear-gradient(90deg, #f9572a, #ff8a05)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "2rem",
              fontWeight: "bolder",
            }}
          >
            Food
          </span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-[90%] max-w-[40rem] my-0 mx-auto text-center">
        <h2 className="text-3xl mb-[3rem] text-[#ddd6cb]">Community Perks</h2>

        <ul className="list-none my-[3rem] mx-0 p-0">
          <li className="flex flex-col items-center gap-2">
            <Image
              src={mealIcon}
              className="w-[8rem] h-[8rem] object-contain"
              alt="A delicious meal"
            />
            <p className="font-sans text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              className="w-[8rem] h-[8rem] object-contain"
            />
            <p className="font-sans text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <Image
              className="w-[8rem] h-[8rem] object-contain"
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p className="font-sans text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
