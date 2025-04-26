

import { Router } from 'express';
import { getAllIncidents} from '../Controllers/IncidentController.js';
const router = Router();

router.get('/', getAllIncidents);


export default router;
