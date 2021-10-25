import express from "express";
import compression from "compression";
import { connectDB } from "./config/db";
import { router } from "./routes";
import { config } from "dotenv";

config();

const app = express();

const PORT = process.env.PORT || 5000;

//  Database
connectDB();

//  Middleware
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Routes
app.use("/api", router);

//  Server
app
  .listen(PORT, () => {
    console.log(`[🌎 SERVER] started on PORT: ${PORT}`);
  })
  .on("error", (err) => {
    console.error(
      `[🌎 SERVER] Something went wrong starting the server: ${err}`
    );
  });
