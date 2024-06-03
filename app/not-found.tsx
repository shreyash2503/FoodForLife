export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <h1
        className="sm:text-[2rem] lg:text-[1.5rem] font-[700] text-center mb-4"
        style={{ color: "linear-gradient(90deg, #f9572a, #ff8a05)" }}
      >
        Route not found
      </h1>
      <p>Unfortunately the requested route or page doesn't exist</p>
    </main>
  );
}
