
import { Request, Response } from 'express';
import Incident from '../Models/Incident';



export const getAllIncidents = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log('Fetching all incidents');
      const incidents = await Incident.find().sort({ reported_at: -1 });
      console.log(incidents);

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




export const createIncident = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, severity } = req.body;
    console.log(title, description, severity);

    if (!title || !description || !severity) {
      res.status(400).json({ error: 'Title, description, and severity are required' });
      return;
    }

    if (!['Low', 'Medium', 'High'].includes(severity)) {
      res.status(400).json({ error: 'Severity must be Low, Medium, or High' });
      return;
    }

    const newIncident = new Incident({ title, description, severity });
    await newIncident.save();

    res.status(201).json(newIncident);
  } 
  
  catch (error) {
    res.status(500).json({ error: 'Failed to create incident' });
  }
};



export const deleteIncident = async (req: Request, res: Response): Promise<void> => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) {
      res.status(404).json({ error: 'Incident not found' });
      return;
    }
    res.status(200).json({ message: 'Incident deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
    return;
  }
};


