import express, { Express, Request, Response } from "express";
import { connection } from "./src/db/connection.db";
import router from "./src/routes/index.routes";
import BodyParser from "body-parser";

// Create express app
const app: Express = express();

// Specify port
const port = process.env.PORT || 3000;

// Include body parser
app.use(BodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Initial route
app.use("/", router);

// Connect database
connection.init();

// Start server
app.listen(port, () => {
  console.log(`⚡️ [ server ] Server is running on port: ${port}`);
});
