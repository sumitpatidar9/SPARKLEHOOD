import { Router} from 'express';
import { getAllIncidents, getIncidentById, createIncident, deleteIncident } from '../Controllers/IncidentController';

const router: Router = Router();



router.get('/incidents', getAllIncidents);
router.get('/incidents/:id', getIncidentById);
router.post('/incidents', createIncident);
router.delete('/incidents/:id', deleteIncident);



export default router;
