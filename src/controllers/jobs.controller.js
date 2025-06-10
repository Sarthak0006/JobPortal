import { getJobs, addJobs, deleteJobs, updateJobs } from "../services/index.js";

export const getJobsControler = async (req, res) => {
    try {
        const result = await getJobs();
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const addJobsController = async (req, res) => {
    try {
        const { jobtitle, jobdescription } = req.body;
        const result = await addJobs(jobtitle, jobdescription);
        res.status(201).json({ status: "success", data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteJobsController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteJobs(id);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const updateJobsController = async (req, res) => {
    try {
        const { id } = req.params;
        const { jobtitle, jobdescription } = req.body;
        const result = await updateJobs(id, jobtitle, jobdescription);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

