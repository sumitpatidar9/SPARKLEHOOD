import { Router} from 'express';
import { getAllIncidents, getIncidentById, createIncident } from '../Controllers/IncidentController';

const router: Router = Router();



router.get('/incidents', getAllIncidents);
router.get('/:id', getIncidentById);
router.post('/incidents', createIncident);



export default router;
