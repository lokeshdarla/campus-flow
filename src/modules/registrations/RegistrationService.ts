import { db } from "../../db/db";
import { EventResponses, Students } from "../../db/schema";
import { and, eq } from "drizzle-orm";

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

  getAllRegistrations: async (event_id: string) => {
    try {
      const registrations = await db.query.EventResponses.findMany({
        where: (EventResponses, { eq }) => eq(EventResponses.event_id, event_id)
      });

      const registrationsInfo = [];
      for (const registration of registrations) {
        const studentInfo = await db.query.Students.findFirst({
          where: (Students, { eq }) => eq(Students.id, registration.student_id)
        });

        if (studentInfo) {
          const reg = {
            registration: registration,
            studentInfo: studentInfo
          };
          registrationsInfo.push(reg);
        }
      }

      return registrationsInfo;
    } catch (error) {
      console.error("Error fetching registrations:", error);
      throw error;
    }
  },

  getMyRegistrations: async (student_id: string) => {
    try {
      const registrations = await db.query.EventResponses.findMany({
        where: (EventResponses, { eq }) => eq(EventResponses.student_id, student_id)
      });


      const registrationsInfo = [];
      for (const registration of registrations) {
        const studentInfo = await db.query.Students.findFirst({
          where: (Students, { eq }) => eq(Students.id, registration.student_id)
        });

        const eventInfo = await db.query.Events.findFirst({
          where: (Events, { eq }) => eq(Events.id, registration.event_id)
        })

        let clubInfo;
        if (eventInfo) {
          clubInfo = await db.query.Clubs.findFirst({
            where: (Clubs, { eq }) => eq(Clubs.id, eventInfo?.club_id)
          })
        }

        if (studentInfo) {
          const reg = {
            registration_id: registration.registration_id,
            club_name: clubInfo?.name,
            student_id: studentInfo.reg_id,
            eventInfo: eventInfo,
          };
          registrationsInfo.push(reg);
        }
      }

      return registrationsInfo;
    } catch (error) {
      console.error("Error fetching registrations:", error);
      throw error;
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

