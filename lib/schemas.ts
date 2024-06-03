import { object, string, instanceof as instanceof_ } from "zod";

export const mealSchema = object({
  title: string({
    required_error: "Title is required",
  })
    .trim()
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title must be at most 100 characters long"),
  creator: string({
    required_error: "Creator is required",
  }).trim(),
  creator_email: string({
    required_error: "Creator email is required",
  })
    .trim()
    .email({
      message: "Invalid email address",
    }),
  instructions: string({
    required_error: "Instructions are required",
  }),
  summary: string({
    required_error: "Summary is required",
  }).min(5, "Summary must be at least 5 characters long"),
  image: instanceof_(File, {
    message: "Image is required",
  }),
});
