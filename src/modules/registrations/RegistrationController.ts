import express from "express";
import { RegistrationService } from "./RegistrationService";
import { oauthMiddleware } from "../../middlewares/oauthmiddleware";
import { Request, Response } from "express";

const RegistrationRouter = express.Router();

RegistrationRouter.use(oauthMiddleware);

RegistrationRouter.post('/:event_id/register-event/', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const event_id = req.params.event_id;
  try {
    const event = await RegistrationService.RegisterEvent(event_id, user.id);
    res.status(201).json(event);
  } catch (error) {
    console.error('Error registering event:', error);
    res.status(500).json({ error: 'Already registered to this register event.' });
  }
});


RegistrationRouter.get('/:event_id/all-registrations', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const event_id = req.params.event_id;
  const eventResponses = await RegistrationService.getAllRegistrations(event_id)
  res.status(200).json(eventResponses)
})

RegistrationRouter.get('/my-registrations', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const eventResponses = await RegistrationService.getMyRegistrations(user.id)
  res.status(200).json(eventResponses)
})

RegistrationRouter.patch('/:registration_id/mark-attendance', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const registration_id = req.params.registration_id;
  const result = await RegistrationService.markAttendance(registration_id, user.id)
  res.status(200).json(result)
})

export default RegistrationRouter;
