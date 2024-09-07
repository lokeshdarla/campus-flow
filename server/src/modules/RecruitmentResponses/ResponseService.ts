import { db } from "../../db/db";
import { RecruitmentResponses } from "../../db/schema";
import { and, eq } from "drizzle-orm";
import { RECRUITMENT_APPLICATION_STATUS } from "../../models";

type ResponseType = typeof RecruitmentResponses.$inferInsert;

export const ResponseService = {
  applyRecruitment: async (recruitment_id: string, student_id: string, recruitment_response: ResponseType) => {
    try {
      const response = await db.insert(RecruitmentResponses).values({
        recruitment_id: recruitment_id,
        student_id: student_id,
        status: "APPLIED",
        question_1: recruitment_response.question_2,
        question_2: recruitment_response.question_2,
        applied_at: new Date(),
      });

      return response;
    } catch (error) {
      throw error;
    }
  },

  getAllResponses: async (event_id: string) => {
    try {
      const registrations = await db.query.EventResponses.findMany({
        where: (EventResponses, { eq }) => eq(EventResponses.registration_id, event_id)
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


  updateResponse: async (application_id: string, student_id: string, status: RECRUITMENT_APPLICATION_STATUS) => {
    try {
      const response = await db.update(RecruitmentResponses).set({
        status: status,
      }).where(and(
        eq(RecruitmentResponses.application_id, application_id),
        eq(RecruitmentResponses.student_id, student_id),
      ));
      return response;
    } catch (error) {
      throw error;
    }
  }


};

