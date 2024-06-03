export default function ShareMealPage() {
  return (
    <>
      <header className="gap-[3rem] mt-[3rem] mr-auto mb-[5rem] ml-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem]">
        <h1 className="font-sans">
          Share your{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #f9572a, #ff8a05)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-[75rem] my-[3rem] mx-auto">
        <form className="max-w-[50rem]">
          <div className="flex gap-[1rem]">
            <p className="w-[100%]">
              <label
                htmlFor="name"
                className="block mb-[0.5rem] text-[1rem] font-sans uppercase text-[#b3aea5] font-bold"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-[100%] py-[0.5rem] px-[1rem] rounded-[4px] border-solid border-[1px] border-[#454952] bg-[#1c2027] text-[1.25rem] font-sans text-[#ddd6cb] focus:outline-none focus:ring-[#f9572a] focus:border-[#f9572a]"
                required
              />
            </p>
            <p className="w-[100%]">
              <label
                htmlFor="email"
                className="block mb-[0.5rem] text-[1rem] font-sans uppercase text-[#b3aea5] font-bold"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-[100%] py-[0.5rem] px-[1rem] rounded-[4px] border-solid border-[1px] border-[#454952] bg-[#1c2027] text-[1.25rem] font-sans text-[#ddd6cb]"
                required
              />
            </p>
          </div>
          <p className="w-[100%]">
            <label
              htmlFor="title"
              className="block mb-[0.5rem] text-[1rem] font-sans uppercase text-[#b3aea5] font-bold"
            >
              Title
            </label>
            <input
              className="block w-[100%] py-[0.5rem] px-[1rem] rounded-[4px] border-solid border-[1px] border-[#454952] bg-[#1c2027] text-[1.25rem] font-sans text-[#ddd6cb]"
              type="text"
              id="title"
              name="title"
              required
            />
          </p>
          <p className="w-[100%]">
            <label
              htmlFor="summary"
              className="block mb-[0.5rem] text-[1rem] font-sans uppercase text-[#b3aea5] font-bold"
            >
              Short Summary
            </label>
            <input
              className="block w-[100%] py-[0.5rem] px-[1rem] rounded-[4px] border-solid border-[1px] border-[#454952] bg-[#1c2027] text-[1.25rem] font-sans text-[#ddd6cb]"
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p className="w-[100%]">
            <label
              htmlFor="instructions"
              className="block mb-[0.5rem] text-[1rem] font-sans uppercase text-[#b3aea5] font-bold"
            >
              Instructions
            </label>
            <textarea
              className="block w-[100%] py-[0.5rem] px-[1rem] rounded-[4px] border-solid border-[1px] border-[#454952] bg-[#1c2027] text-[1.25rem] font-sans text-[#ddd6cb]"
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          IMAGE PICKER
          <p className="text-right">
            <button
              type="submit"
              style={{
                background: "linear-gradient(90deg, #f9572a, #ff9b05)",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
              }}
              className="border-0 py-[0.75rem] px-[2rem] border-none text-[#ffffff] rounded-[2px] cursor-pointer font-sans text-[1.25rem] hover:opacity-70 transition-all duration-0.3s ease-in-out focus:outline-none focus:ring-[#f9572a] focus:border-[#f9572a] disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:opacity-100 hover:disabled:cursor-pointer focus:disabled:opacity-100 focus:disabled:cursor-pointer"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
