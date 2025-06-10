import { jwtConfig } from "../configs/index.js";
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || authHeader === "null") {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1]; // Get token after "Bearer"

    if (!token) {
        return res.status(401).json({ message: "Token missing in header" });
    }

    try {
        const decoded = jwt.verify(token, jwtConfig.jwtSecret || "your_secret_key");
        req.user = decoded;
        next();
    } catch (err) {
        console.error(err);
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Access token expired" });
        }
        return res.status(401).json({ message: "Invalid Token" });
    }
};
