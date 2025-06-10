import express from 'express';
import v1router from './routes/v1/index.js';

const port = 5000;
const app = express();

app.use(express.json());

app.use("/v1", v1router);

app.listen(port, () => console.log('Server is running on the port: ', port));