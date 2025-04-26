

import { Router } from 'express';
import { getAllIncidents } from '../Controllers/IncidentController.js';

const router = Router();

router.get('/', getAllIncidents);
// router.post('/', createIncident);
// router.get('/:id', getIncidentById);
// router.delete('/:id', deleteIncident);

export default router;
