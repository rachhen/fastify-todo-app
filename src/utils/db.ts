import mongoose from "mongoose";
import { config } from "./config";
import { logger } from "./logger";

export async function connectToDb() {
  try {
    await mongoose.connect(config.DATABASE_URL);
    logger.info("Connected to MongoDB");
  } catch (err) {
    logger.error(err, "Failed to connect to MongoDB");
    process.exit(1);
  }
}

export function disconnectFromDb() {
  return mongoose.connection.close();
}
