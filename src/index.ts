import express from "express";
import { Express, Request, Response } from "express";
import itemRoutes from "./routes/item.routes";

const app = express();

app.use(express.json());

// Mount routes
app.use("/api", itemRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
