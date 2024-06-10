import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import errorMiddlewares from "../middlewares/error-middleware.js";
import publicRouter from "../routes/public.js";
import privateRouter from "../routes/private.js";

export const web = express();

web.use(cors());
web.use(cookieParser());
web.use(bodyParser.json());
web.use("/api", publicRouter);
web.use("/api", privateRouter);
web.use("/api", errorMiddlewares.apiNotfound);
web.use(errorMiddlewares.errorHandler);
