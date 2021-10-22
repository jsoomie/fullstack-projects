import express from "express";
import compression from "compression";

const app = express();

const PORT = process.env.PORT || 5000;

//  Middleware
app.use(compression());

//  Route catcher
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`[SERVER] ⚡ started on PORT: ${PORT}`);
});
