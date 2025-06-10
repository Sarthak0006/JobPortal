import { signup, login } from "../services/index.js";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../configs/index.js";

export const signupController = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const result = await signup(email.toLowerCase(), password, role);
        res.status(201).json({ status: "success", data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login request:", email, password);
        const response = await login(email, password);

        const user = {
            email: response[0].email,
            role: response[0].role
        };

        // Use emp_id instead of email for JWT payload (better security)
        const accessToken = jwt.sign(
            { email: user.email, role: user.role },
            jwtConfig.jwtSecret || "secret",
            { expiresIn: "30m" } // Increased from 1m to 15m for usability
        );

        const refreshToken = jwt.sign(
            { email: user.email, role: user.role },
            jwtConfig.jwtRefreshSecret || "refreshSecret",
            { expiresIn: "1d" } // Extended to 7d for better UX
        );

        res.cookie("jwt", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 30 * 60 * 1000, // 30 minutes
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });

        res.status(200).json({ status: "success", data: { user, accessToken, refreshToken } });
    } catch (error) {
        console.error("Login error:", error);
        return genericResponse({ message: error.message }); // Avoid exposing technical errors
    }
};