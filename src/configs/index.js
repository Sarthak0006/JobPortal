import dotenv from "dotenv";

dotenv.config();

export const databaseConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    name: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
}

export const jwtConfig = {
    jwtSecret: process.env.JWT_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET
}