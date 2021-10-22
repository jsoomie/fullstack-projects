import express from "express";
import compression from "compression";
import { router } from "./routes";

const app = express();

const PORT = process.env.PORT || 5000;

//  Middleware
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Routes
app.use("/api", router);

app
  .listen(PORT, () => {
    console.log(`[SERVER] ⚡ started on PORT: ${PORT}`);
  })
  .on("error", (err) => {
    console.error(
      `[SERVER] ⚡ Something went wrong starting the server: ${err}`
    );
  });
