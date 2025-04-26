
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Utils/Connection.js';
import router from './Routes/IncidentRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/incidents', router);



connectDB().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});
