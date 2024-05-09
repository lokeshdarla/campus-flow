import express from "express";
import { EventService } from "./EventService";
import { oauthMiddleware } from "../../middlewares/oauthmiddleware";
import { Request, Response } from "express";

const EventRouter = express.Router();
/**
 * @swagger
 * tags:
 *   name: Events
 *   description: API endpoints for managing events
 */

/**
 * @swagger
 * /api/events/create-event:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               date:
 *                 type: string
 *               startTime:
 *                 type: string
 *               endTime:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Event created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 date:
 *                   type: string
 *                 startTime:
 *                   type: string
 *                 endTime:
 *                   type: string
 *                 location:
 *                   type: string
 */

EventRouter.use(oauthMiddleware);

EventRouter.post('/create-event', async (req: Request, res: Response) => {
  const user = res.locals.user;
  console.log(req.body)
  const event = await EventService.createEvent(user.id, req.body);
  res.status(201).json(event);
});

/**
 * @swagger
 * /api/events/club-events:
 *   get:
 *     summary: Retrieve events associated with the logged-in user's club.
 *     description: Returns a list of events belonging to the club of the authenticated user.
 *     tags: [Events]
 *     security:
 *       - OAuth2: [read:events]
 *     responses:
 *       200:
 *         description: A list of events associated with the club.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
EventRouter.get('/club-events', async (req: Request, res: Response) => {
  const user = res.locals.user;
  const events = await EventService.getClubEvents(user.id);
  res.status(200).json(events)
});


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
