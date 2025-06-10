
export const requitersmiddleware = (req, res, next) => {
    try {
        if (req.user.role === "requiter") {
            next();
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}