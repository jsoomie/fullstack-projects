import { connect } from "mongoose";
import { config } from "dotenv";

config();

const db: string | undefined = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    if (db) {
      await connect(db);
      console.info("[⚡ DB] Mongo DB Connected");
    } else {
      console.error("DB didn't connect");
    }
  } catch (err) {
    console.error(err);
  }
};
