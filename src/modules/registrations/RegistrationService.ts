import { db } from "../../db/db";
import { Clubs, EventResponses, Events, Students, Users } from "../../db/schema";
import { and, eq } from "drizzle-orm";

type ResponseEvent = typeof EventResponses.$inferInsert;

export const RegistrationService = {
  RegisterEvent: async (event_id: string, student_id: string) => {
    try {
      const student = await db.query.Students.findFirst({
        where: (Students, { eq }) => eq(Students.id, student_id)
      });

      const from_club = !!student?.ClubStatus;

      const registration = await db.insert(EventResponses).values({
        event_id: event_id,
        student_id: student_id,
        status: "APPLIED",
        from_club: from_club,
        registered_at: new Date(),
      });

      return registration;
    } catch (error) {
      throw error;
    }
  },

  getAllRegistrations: async (event_id: string, club_id: string) => {
    try {
      const registrations = await db.query.EventResponses.findMany({
        where: (EventResponses, { eq }) => eq(EventResponses.registration_id, event_id)
      });
      return registrations;
    }
    catch (error) {
      throw (error);
    }
  },

  markAttendance: async (registration_id: string, student_id: string) => {

    try {
      const registration = await db.update(EventResponses).set({
        status: "ATTENDED"
      }).where(and(
        eq(EventResponses.registration_id, registration_id),
        eq(EventResponses.student_id, student_id),
      ));

      return registration;
    } catch (error) {
      throw error;
    }
  }


};

