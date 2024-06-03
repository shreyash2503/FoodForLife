"use client";

export default function Error() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1
        className="sm:text-[2rem] lg:text-[1.5rem] font-[700] text-center mb-4"
        style={{
          color: "linear-gradient(90deg, #f9572a, #ff8a05)",
        }}
      >
        An error occurred
      </h1>
      <p className="text-[#ffffff]">
        Failed to fetch meal data. Please try again later.
      </p>
    </main>
  );
}
