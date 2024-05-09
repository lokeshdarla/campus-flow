import express from "express";
import { RegistrationService } from "./RegistrationService";
import { oauthMiddleware } from "../../middlewares/oauthmiddleware";
import { Request, Response } from "express";

const EventResponseRouter = express.Router();

EventResponseRouter.use(oauthMiddleware);

EventResponseRouter.post('/register-event/:event_id', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const event_id = req.params.event_id;
  const event = await RegistrationService.RegisterEvent(event_id, user.id);
  res.status(201).json(event);
});

EventResponseRouter.get('/:event_id/all-registration', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const event_id = req.params.event_id;
  const eventResponses = await RegistrationService.getAllRegistrations(event_id)
  res.status(200).json(eventResponses)
})

EventResponseRouter.patch('/:registration_id/mark-attendance', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const registration_id = req.params.registration_id;
  const result = await RegistrationService.markAttendance(registration_id, user.id)
  res.status(200).json(result)
})

export default EventResponseRouter;
