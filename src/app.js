import cors from "cors";
import express from "express";
import financialRouter from "./routes/finacialRoute.js";
import loginRouter from "./routes/login.route.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(loginRouter);
app.use(financialRouter);

export default app;
