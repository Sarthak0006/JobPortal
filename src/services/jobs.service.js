import dbPool from "../configs/db.config.js";

export const getJobs = async () => {
    try {
        const query = "SELECT * FROM jobs;";
        const [result] = await dbPool.execute(query);
        return result[0];
    } catch (error) {
        console.error(error);
        return error.message;
    }
}

export const addJobs = async (jobtitle, jobdescription) => {
    try {
        const query = "INSERT INTO jobs (jobtitle, jobdescription) VALUES (?, ?);";
        const [result] = await dbPool.execute(query, [jobtitle, jobdescription]);
        return result;
    } catch (error) {
        console.error(error);
        return error.message;
    }
}

export const deleteJobs = async (id) => {
    try {
        const query = "DELETE FROM jobs WHERE id = ?;";
        const [result] = await dbPool.execute(query, [id]);
        return result;
    } catch (error) {
        console.error(error);
        return error.message;
    }
}

export const updateJobs = async (id, jobtitle, jobdescription) => {
    try {
        const query = "UPDATE jobs SET jobtitle = ?, jobdescription = ? WHERE id = ?;";
        const [result] = await dbPool.execute(query, [jobtitle, jobdescription, id]);
        return result;
    } catch (error) {
        console.error(error);
        return error.message;
    }
}