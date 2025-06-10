import { Router } from "express";
import auhRoutes from "./auth.route.js";
import jobRoutes from "./job.route.js";
import { authMiddleware } from "../../middlewares/validateToken.middleware.js";
import applicationRoutes from "./application.routes.js";

const router = Router();

router.use("/auth", auhRoutes);
router.use("/jobs", authMiddleware, jobRoutes);
router.use("/applications", authMiddleware, applicationRoutes);

export default router;