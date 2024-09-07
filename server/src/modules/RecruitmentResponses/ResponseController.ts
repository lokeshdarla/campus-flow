import express from "express";
import { ResponseService } from "./ResponseService";
import { oauthMiddleware } from "../../middlewares/oauthmiddleware";
import { Request, Response } from "express";

const RecruitmentResponseRouter = express.Router();

RecruitmentResponseRouter.use(oauthMiddleware);

RecruitmentResponseRouter.post('/apply/:recruitment_id', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const recruitment_id = req.params.recruitment_id;
  const response = await ResponseService.applyRecruitment(recruitment_id, user.id, req.body);
  res.status(201).json(response);
});

RecruitmentResponseRouter.get('/:recruitment_id/all-responses', async (req: Request, res: Response) => {
  const recruitment_id = req.params.recruitment_id;
  const responses = await ResponseService.getAllResponses(recruitment_id)
  res.status(200).json(responses)
})

RecruitmentResponseRouter.patch('/:application_id/update-status', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const application_id = req.params.application_id;
  const result = await ResponseService.updateResponse(application_id, user.id, req.body)
  res.status(200).json(result)
})

export default RecruitmentResponseRouter;
