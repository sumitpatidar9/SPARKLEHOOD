import { Router, Request, Response } from 'express';
import { getAllIncidents, getIncidentById } from '../Controllers/IncidentController';

const router: Router = Router();

router.get('/:id', getIncidentById);
router.get('/', getAllIncidents);

export default router;
