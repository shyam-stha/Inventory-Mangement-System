import mongoose from "mongoose";
import config from "../config/db.json" assert {type: 'json'}

const uri = config.DB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`DataBase Connected Successfully !`)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
};
