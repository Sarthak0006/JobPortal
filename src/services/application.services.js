import dbPool from "../configs/db.config.js";

// export const getApplications = async () => {
//     try {
//         const query = "SELECT * FROM applications;";
//         const [result] = await dbPool.execute(query);
//         return result[0];
//     } catch (error) {
//         console.error(error);
//         return error.message;
//     }
// }

// export const deleteApplication = async (id) => {
//     try {
//         const query = "DELETE FROM applications WHERE id = ?;";
//         const [result] = await dbPool.execute(query, [id]);
//         return result;
//     } catch (error) {
//         console.error(error);
//         return error.message;
//     }
// }

// export const updateApplication = async (id, status) => {
//     try {
//         const query = "UPDATE applications SET status = ? WHERE id = ?;";
//         const [result] = await dbPool.execute(query, [status, id]);
//         return result;
//     } catch (error) {
//         console.error(error);
//         return error.message;
//     }
// }

// export const applyJob = async (jobId, userId) => {
//     try {
//         const query = "INSERT INTO applications (job_id, user_id) VALUES (?, ?);";
//         const [result] = await dbPool.execute(query, [jobId, userId]);

//         return result;
//     } catch (error) {
//         console.error(error);
//         return error.message;
//     }
// }

// export const getmyapplications = async (userId) => {
//     try {
//         const query = "SELECT * FROM applications WHERE user_id = ?;";
//         const [result] = await dbPool.execute(query, [userId]);
//         return result[0];
//     } catch (error) {
//         console.error(error);
//         return error.message;
//     }
// }


export const getApplications = async () => {
    try {
        const query = `
            SELECT 
                applications.id AS application_id,
                applications.status,
                users.id AS user_id,
                users.email,
                users.role,
                jobs.id AS job_id,
                jobs.jobtitle,
                jobs.jobdescription,
                jobs.noofapply
            FROM applications
            JOIN users ON applications.user_id = users.id
            JOIN jobs ON applications.job_id = jobs.id;
        `;
        const [result] = await dbPool.execute(query);
        return result;
    } catch (error) {
        console.error(error);
        return error.message;
    }
};


export const deleteApplication = async (id) => {
    try {
        const query = "DELETE FROM applications WHERE id = ?;";
        const [result] = await dbPool.execute(query, [id]);
        return result;
    } catch (error) {
        console.error(error);
        return error.message;
    }
};


export const updateApplication = async (id, status) => {
    try {
        const query = "UPDATE applications SET status = ? WHERE id = ?;";
        const [result] = await dbPool.execute(query, [status, id]);
        return result;
    } catch (error) {
        console.error(error);
        return error.message;
    }
};

export const applyJob = async (jobId, userId) => {
    try {
        const query = "INSERT INTO applications (job_id, user_id) VALUES (?, ?);";
        const [result] = await dbPool.execute(query, [jobId, userId]);
        return result;
    } catch (error) {
        console.error(error);
        return error.message;
    }
};


export const getmyapplications = async (userId) => {
    try {
        const query = `
            SELECT 
                applications.id AS application_id,
                applications.status,
                jobs.id AS job_id,
                jobs.jobtitle,
                jobs.jobdescription,
                jobs.noofapply,
                users.id AS user_id,
                users.email,
                users.role
            FROM applications
            JOIN jobs ON applications.job_id = jobs.id
            JOIN users ON applications.user_id = users.id
            WHERE applications.user_id = ?;
        `;
        const [result] = await dbPool.execute(query, [userId]);
        return result;
    } catch (error) {
        console.error(error);
        return error.message;
    }
};
