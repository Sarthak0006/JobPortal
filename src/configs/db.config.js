import mysql from "mysql2/promise";
import { databaseConfig } from "./index.js";

export const createDatabasePool = () => {
    try {
        const poolOptions = {
            host: databaseConfig.host || "localhost",
            user: databaseConfig.user,
            password: databaseConfig.password,
            database: databaseConfig.name
        };

        const pool = mysql.createPool(poolOptions);

        console.log("Database pool created successfully");
        return pool;
    } catch (error) {
        console.error("Error creating database pool:", error.message);
        throw new Error("Failed to create database pool");
    }
};

const dbPool = createDatabasePool();
export default dbPool;
