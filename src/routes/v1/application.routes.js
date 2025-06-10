import { getApplications, updateApplication, deleteApplication, applyJob, getmyapplications } from "../../controllers/index.js";
import { Router } from "express";
import { requitersmiddleware } from "../../middlewares/requiter.middleware.js";

const router = Router();

router.get("/getapplications", requitersmiddleware, getApplications);
router.put("/updateapplication/:id", requitersmiddleware, updateApplication);
router.delete("/deleteapplication/:id", deleteApplication);
router.post("/applyjob", applyJob);
router.get("/getmyapplications/:id", getmyapplications);


export default router;