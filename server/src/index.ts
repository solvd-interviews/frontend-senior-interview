import express from "express";
import cors from "cors";

import routes from "./routes";

import DB from "./services/db";

process.on("uncaughtException", (error) => {
    console.error("Uncaught exception happened:", error);

    process.exit(1);
});

/**
 * Starts the server and listens on port 4000.
 */
const server: any = express();

export const STORAGE_TYPE: "LOCAL" | "DB" = "LOCAL";

server.use(express.json());

server.use(
    cors({
        origin: "http://localhost:5173",
    })
);

(async () => {
    DB.connect({
        uri: "mongodb://solvd:password@localhost:27017/solvd_challenge"
    })
})();

server.use(routes);

export const stopDB = () => {
    DB.disconnect();
};

export default server;
