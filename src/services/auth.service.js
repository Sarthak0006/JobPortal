import dbPool from "../configs/db.config.js";
import bcrypt from "bcrypt";


export const signup = async (email, password, role) => {
    try {
        const query = "INSERT INTO users (email, password, role) VALUES (?, ?, ?)";
        const passwordHash = await bcrypt.hash(password, 10);
        const [result] = await dbPool.execute(query, [email, passwordHash, role]);
        return result;
    } catch (error) {
        console.error(error);
        return error.message;
    }
}

export const login = async (email, password) => {
    try {
        const query = "SELECT * FROM users WHERE email = ?";
        const [result] = await dbPool.execute(query, [email]);
        console.log(result);
        const isPasswordValid = await bcrypt.compare(password, result[0].password);
        if (isPasswordValid) {
            return result
        } else {
            return "Invalid email or password";
        };
    } catch (error) {
        console.error(error);
        return error.message;
    }
}

