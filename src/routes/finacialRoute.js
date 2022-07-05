import { Router } from "express";
import { getEvent, getEventSum, postEvent } from "../controllers/financialController.js";
import { validateToken } from "../middlewares/authorization.js";

const financialRouter = Router();

financialRouter.post('/financial-events', validateToken, postEvent );
financialRouter.get('/financial-events', validateToken, getEvent );
financialRouter.get('/financial-events/sum', validateToken, getEventSum );

export default financialRouter;