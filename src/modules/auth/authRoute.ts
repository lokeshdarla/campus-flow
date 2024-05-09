import express, { Router } from "express";
import { googleOAuthHandler } from "./authController";

export const authRouter: Router = express.Router();

authRouter.get("/callback/google", googleOAuthHandler);
