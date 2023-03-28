// dependencies
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

//APP
const server = express();
server.use(cors());
server.use(express.json());

// ROUTES

// SERVER
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server runing in PORT:${PORT} `));
