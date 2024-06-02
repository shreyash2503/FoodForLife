import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex gap-[3rem] justify-around items-center mx-10 mt-[5%]">
        <div className="w-[40rem] h-[25rem]">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-[#ddd6cb] text-[1.5rem]">
            <h1
              className="text-[2rem] font-bold font-sans tracking-[0.15rem] uppercase"
              style={{
                background: "linear-gradient(90deg, #f9572a, #ffc905)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Live for food
            </h1>
            <p>Taste and share the food from all over the world</p>
          </div>
          <div className="font-[1.5rem] flex gap-[1rem]">
            <Link
              href="/community"
              className="inline-block mt-[1rem] px-[0.5rem] py-[1rem] rounded-s text-[#ffffff] font-bold decoration-none hover:bg-[#f9572a] hover:text-[#ffffff]"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="inline-block mt-[1rem] px-[0.5rem] py-[1rem] rounded-s text-[#ffffff] font-bold decoration-none hover:bg-[#f9572a] hover:text-[#ffffff]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main className="flex justify-center items-center flex-col">
        <section className="flex flex-col text-[#ddd6cb] font-[1.5rem] max-w-[50rem] w-[90%] mx-[2.5rem] my-[5rem] text-center">
          <h2 className="text-4xl m-5">How it works</h2>
          <p className="text-2xl">
            Food For Life is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-2xl m-2">
            Food For Life is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] font-[1.5rem] max-w-[50rem] w-[90%] mx-[2.5rem] my-auto text-center">
          <h2 className="text-4xl m-5">Why Food For Life?</h2>
          <p className="text-2xl m-2">
            Food For Life is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-2xl m-2">
            Food For Life is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
