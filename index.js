import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./db/db.js";
import contact from "./routes/contact.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/contact", contact);

app.listen(process.env.PORT, () => {
  console.log("Backend server running on port " + process.env.PORT);
});

db();