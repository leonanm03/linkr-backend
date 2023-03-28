// dependencies
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
};

// production mode
if (process.env.MODE === "prod") configDatabase.ssl = true;

const database = new Pool(configDatabase);
export default database;
