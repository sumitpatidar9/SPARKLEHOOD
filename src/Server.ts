
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Utils/Connection';
import router from './Routes/IncidentRoutes';
import cors from 'cors'; 
import { Request, Response, NextFunction } from 'express';



dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors({
  origin: '*',       // or '*' to allow all
  methods: ['GET','POST','OPTIONS'],
  credentials: false                      // if you need cookies/auth
}));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} ── Content-Type: ${req.headers['content-type']}`);
  next();
});


app.use(express.json());
app.use('/', router);


app.listen(port, () => console.log(`Server running on port ${port}`));

