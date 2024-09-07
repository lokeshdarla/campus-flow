import qrCode from 'jsqr';
import { Router } from "express";
import { oauthMiddleware } from '../../middlewares/oauthmiddleware';
export const qrRouter = Router();

qrRouter.post('/api/mark-attendence', oauthMiddleware, (req, res) => {
  console.log(req.body.reg_id);
});

