import { Router } from "express";
import { getJobs, addJobs, deleteJobs, updateJobs } from "../../controllers/index.js";
import { requitersmiddleware } from "../../middlewares/index.js";

const router = Router();

router.get("/getjobs", getJobs);
router.post("/addjobs", requitersmiddleware, addJobs);
router.delete("/deletejobs/:id", requitersmiddleware, deleteJobs);
router.put("/updatejobs/:id", requitersmiddleware, updateJobs);


export default router;