import express from "express";
import { EventService } from "./EventService";
import { oauthMiddleware } from "../../middlewares/oauthmiddleware";
import { Request, Response } from "express";

const EventRouter = express.Router();

EventRouter.use(oauthMiddleware);

EventRouter.post('/create-event', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const event = await EventService.createEvent(user.id, req.body);
  res.status(201).json(event);
});

EventRouter.get('/club-events', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const events = await EventService.getClubEvents(user.id);
  res.status(200).json(events)
})

EventRouter.get('/all-events', async (req: Request, res: Response) => {
  const events = await EventService.getAllEvents();
  res.status(200).json(events);
});

EventRouter.get('/:event_id/event-info/', async (req: Request, res: Response) => {
  const event_id = req.params.event_id;
  const event = await EventService.getEventById(event_id);
  res.json(event);
});

EventRouter.patch('/:event_id/update-info', async (req: Request, res: Response) => {
  const event_id = req.params.event_id;
  const event = await EventService.updateEventById(event_id, req.body);
  res.json(event);
});

EventRouter.delete('/:event_id/delete-event', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const event = await EventService.deleteEventById(req.params.event_id, user.id);
  res.json(event);
});

export default EventRouter;
