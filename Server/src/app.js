import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./Database/Database.js";
import categoryRouter from "./Routes/categoriesApi.js";

const app = express();

try {
  connectDB();
} catch (error) {
  console.log("Database error: ", error);
}

app.use(bodyParser.json());
app.use(cors());

app.use("/category", categoryRouter);

app.use(async (err, req, res, next) => {
  console.log(err);
});

export default app;
