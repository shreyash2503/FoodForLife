"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { mealSchema } from "./schemas";
import { revalidatePath } from "next/cache";

//& All the function inside this file will automatically be treated as server actions

export async function shareMeal(prevState: any, formData: FormData) {
  console.log(formData?.get("image-picker"));
  const meal = {
    title: formData?.get("title") as string,
    summary: formData?.get("summary") as string,
    instructions: formData?.get("instructions") as string,
    image: formData?.get("image-picker") as File,
    creator: formData?.get("name") as string,
    creator_email: formData?.get("email") as string,
  };
  try {
    mealSchema.parse(meal);
  } catch (e: any) {
    return {
      message: "Invalid form data",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
