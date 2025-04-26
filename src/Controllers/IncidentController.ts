
import { Request, Response } from 'express';
import Incident from '../Models/Incident.js';

export const getAllIncidents = async (_req: Request, res: Response) => {
  const incidents = await Incident.find().sort({ reported_at: -1 });
  res.status(200).json(incidents);
};