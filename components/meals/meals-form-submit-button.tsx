"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmitButton() {
  const status = useFormStatus();

  return (
    <button
      disabled={status.pending}
      type="submit"
      style={{
        background: "linear-gradient(90deg, #f9572a, #ff9b05)",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
      }}
      className="border-0 py-[0.75rem] px-[2rem] border-none text-[#ffffff] rounded-[2px] cursor-pointer font-sans text-[1.25rem] hover:opacity-70 transition-all duration-0.3s ease-in-out focus:outline-none focus:ring-[#f9572a] focus:border-[#f9572a] disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:opacity-100 hover:disabled:cursor-pointer focus:disabled:opacity-100 focus:disabled:cursor-pointer"
    >
      {status.pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
