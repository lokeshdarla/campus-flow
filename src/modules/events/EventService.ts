import express from "express";
import { db } from "../../db/db";
import { Clubs, Events, Users } from "../../db/schema";
import { eq } from "drizzle-orm";

type EventType = typeof Events.$inferInsert;

export const EventService = {
  createEvent: async (club_id: string, EventBody: EventType) => {
    try {
      const event = await db.insert(Events).values({
        club_id: club_id,
        name: EventBody.name,
        description: EventBody.description,
        date: EventBody.date,
        start_time: EventBody.start_time,
        end_time: EventBody.end_time,
        location: EventBody.location,
        status: 'NOT_STARTED',
        created_at: new Date(),
        updated_at: new Date(),
      });
      return event;
    } catch (error) {
      throw error;
    }
  },

  getAllEvents: async () => {
    try {
      const events = await db.query.Events.findMany();
      const eventsWithClubInfo = [];
      for (const event of events) {
        const clubInfo = await db.query.Clubs.findFirst({
          where: (Clubs, { eq }) => (eq(Clubs.id, event.club_id))
        });
        const clubDetails = await db.query.Users.findFirst({
          where: (Users, { eq }) => (eq(Users.id, event.club_id))
        });

        if (clubInfo) {
          const data = {
            eventInfo: event,
            clubInfo: {
              name: clubInfo.name,
              description: clubInfo.description,
              email: clubDetails?.email,
              profile_url: clubDetails?.profile_url
            }
          }
          eventsWithClubInfo.push(data);
        }
      }
      return eventsWithClubInfo;
    } catch (error) {
      throw error;
    }
  },


  getClubEvents: async (club_id: string) => {
    try {
      const events = await db.query.Events.findMany({
        where: (Events, { eq }) => (eq(Events.club_id, club_id))
      });
      return events;
    } catch (error) {
      throw error;
    }
  },

  getEventById: async (id: string) => {
    try {
      const event = await db.query.Events.findFirst({
        where: (Events, { eq }) => (eq(Events.id, id)),
      });
      if (!event) {
        throw new Error('Event not found');
      }
      return event;
    } catch (error) {
      throw error;
    }
  },

  updateEventById: async (id: string, EventBody: EventType) => {
    try {
      const event = await db.update(Events).set({
        name: EventBody.name,
        description: EventBody.description,
        date: EventBody.date,
        start_time: EventBody.start_time,
        end_time: EventBody.end_time,
        location: EventBody.location,
        status: EventBody.status,
      }).where(eq(Events.id, id));
      if (!event) {
        throw new Error('Event not found');
      }
      return event;
    } catch (error) {
      throw error;
    }
  },

  deleteEventById: async (event_id: string, club_id: string) => {
    try {
      const event = await db.delete(Events).where(eq(Events.id, event_id));
      if (!event) {
        throw new Error('Event not found');
      }
      return event;
    } catch (error) {
      throw error;
    }
  },
};

