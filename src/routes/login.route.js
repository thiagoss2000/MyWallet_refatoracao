import { Router } from "express";
import { signIn, signUp } from "../controllers/loginController.js";

const loginRouter = Router();

loginRouter.post('/sign-up', signUp );
loginRouter.post('/sign-in', signIn );

export default loginRouter;