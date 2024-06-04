import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

const db = sql("meals.db");

function generateUUID() {
  var d = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Failed to fetch meals data");
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  //! If you do "SELECT * FROM meals WHERE slug = " + slug, you are vulnerable to SQL injection
}

export async function saveMeal(meal: any) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image?.name.split(".").pop();
  const unique = generateUUID();
  const fileName = `${meal.slug}${unique}.${extension}`;
  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error("Saving image failed!");
  //   }
  // });

  s3.putObject({
    Bucket: "shreyash-food-for-life-s3-bucket",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });
  meal.image = fileName;
  console.log(fileName);

  db.prepare(
    `
    INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
    `
  ).run(meal);
}
