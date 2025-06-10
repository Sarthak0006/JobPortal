import { getApplications, updateApplication, deleteApplication, applyJob } from "../services/index.js";

export const getApplicationsControler = async (req, res) => {
    try {
        const result = await getApplications();
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteApplicationControler = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteApplication(id);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const applyJobController = async (req, res) => {
    try {
        const { jobId, userId } = req.body;
        const result = await applyJob(jobId, userId);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const updateApplicationController = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const result = await updateApplication(id, status);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const getmyapplicationsController = async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await getmyapplications(userId);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}