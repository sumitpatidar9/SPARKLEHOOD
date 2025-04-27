
import { Request, Response } from 'express';
import Incident from '../Models/Incident';

export const getAllIncidents = async (req: Request, res: Response): Promise<void> => {
    try {
      const incidents = await Incident.find().sort({ reported_at: -1 });
      res.status(200).json(incidents);
      return;
    } 

    catch (error) {
      res.status(500).json({ error: 'Failed to retrieve incidents' });
      return;
    }
};


export const getIncidentById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ error: 'ID is required' });
        return;
      }
      const incident = await Incident.findById(id);
      if (!incident) {
        res.status(404).json({ error: 'Incident not found' });
        return;
      }
  
      res.status(200).json(incident);
      return;
    } 
    
    catch (error) {
      res.status(400).json({ error: 'Invalid ID format' });
      return;
    }
};





