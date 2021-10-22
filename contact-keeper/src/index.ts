import express from "express";
import compression from "compression";
import { router } from "./routes";

const app = express();

const PORT = process.env.PORT || 5000;

//  Middleware
app.use(compression());

//  Routes
app.use("/api", router);

//  Route catcher
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the Contact Keeper API" });
});

app.listen(PORT, () => {
  console.log(`[SERVER] ⚡ started on PORT: ${PORT}`);
});
