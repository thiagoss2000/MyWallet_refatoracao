import { Router } from "express";
import { getEvent, getEventSum, postEvent } from "../controllers/financialController.js";

const financialRouter = Router();

financialRouter.post('/financial-events', postEvent );
financialRouter.get('/financial-events', getEvent );
financialRouter.get('/financial-events/sum', getEventSum );

export default financialRouter;