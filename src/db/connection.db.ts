import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
import path from "path";

class Connection {
  private uri: string;
  private client: Mongoose;
  constructor() {
    // Make environment variables available in application
    dotenv.config({ path: path.resolve(__dirname, "../config/.env") });

    // Connection String
    this.uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nodeapp2.rloalnf.mongodb.net/?retryWrites=true&w=majority`;

    this.client = mongoose;
  }

  // Makes a connection to the database.
  async init() {
    console.log("🔌 [database] Connecting to db...");
    try {
      await this.client.connect(this.uri);
      console.log("🤝 [database] Connection complete!");
    } catch (e) {
      console.log("😿 [database] Error: " + e);
    }
  }
}

export const connection = new Connection();
