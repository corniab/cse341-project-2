import express, { Express, Request, Response } from "express";
import { connection } from "./src/db/connection.db";

// Create express app
const app: Express = express();

// Specify port
const port = process.env.PORT || 3000;

// Initial route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World 😻");
});

// Connect database
connection.init();

// Start server
app.listen(port, () => {
  console.log(`⚡️ [ server ] Server is running on port: ${port}`);
});
