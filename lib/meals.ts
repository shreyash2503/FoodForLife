import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Failed to fetch meals data");
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  //! If you do "SELECT * FROM meals WHERE slug = " + slug, you are vulnerable to SQL injection
}
