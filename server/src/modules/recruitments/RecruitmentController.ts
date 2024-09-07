import express from "express";
import { RecruitmentService } from "./RecruitmentService";
import { oauthMiddleware } from "../../middlewares/oauthmiddleware";
import { Request, Response } from "express";

const RecruitmentRouter = express.Router();

RecruitmentRouter.use(oauthMiddleware);

RecruitmentRouter.post('/post-recruitment', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const event = await RecruitmentService.createRecruitment(user.id, req.body);
  res.status(201).json(event);
});

RecruitmentRouter.get('/club-recruitments', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const events = await RecruitmentService.getClubRecruitments(user.id);
  res.status(200).json(events)
})

RecruitmentRouter.get('/all-recruitments', async (req: Request, res: Response) => {
  const events = await RecruitmentService.getAllRecruitments();

  res.status(200).json(events);
});

RecruitmentRouter.get('/:recruitment_id/recruitment-info/', async (req: Request, res: Response) => {
  const event_id = req.params.event_id;
  const event = await RecruitmentService.getRecruimentById(event_id);
  res.json(event);
});

RecruitmentRouter.patch('/:recruitment_id/update-info', async (req: Request, res: Response) => {
  const event_id = req.params.event_id;
  const event = await RecruitmentService.updateRecruitmentById(event_id, req.body);
  res.json(event);
});

RecruitmentRouter.patch('/:recruitment_id/stop-recruiting', async (req: Request, res: Response) => {
  const event_id = req.params.event_id;
  const event = await RecruitmentService.endRecruitmentById(event_id);
  res.json(event);
});

RecruitmentRouter.delete('/:recruitment_id/delete-event', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const event = await RecruitmentService.deleteRecruitmentById(req.params.event_id, user.id);
  res.json(event);
});

export default RecruitmentRouter;
