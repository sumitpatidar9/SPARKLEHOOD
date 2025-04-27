
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Utils/Connection';
import router from './Routes/IncidentRoutes';
import cors from 'cors'; 




dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors({
  origin: '*',      
  methods: ['GET','POST', 'DELETE'],
  credentials: false                  
}));


app.use(express.json());
app.use('/', router);


app.listen(port, () => console.log(`Server running on port ${port}`));

