import { db } from "../../db/db";
import { Events, Recruitments } from "../../db/schema";
import { and, eq } from "drizzle-orm";

type RecruitmentType = typeof Recruitments.$inferInsert;

export const RecruitmentService = {
  createRecruitment: async (club_id: string, RecruitmentBody: RecruitmentType) => {
    try {
      const recruitment = await db.insert(Recruitments).values({
        club_id: club_id,
        role: RecruitmentBody.role,
        description: RecruitmentBody.description,
        status: 'HIRING',
        created_at: new Date(),
        updated_at: new Date(),
      });
      return recruitment;
    } catch (error) {
      throw error;
    }
  },

  getAllRecruitments: async () => {
    try {
      const recruiments = await db.query.Recruitments.findMany({
        where: (Recruitments, { eq }) => (eq(Recruitments.status, 'HIRING'))
      });
      const recruimentsWithClubInfo = [];
      for (const recruiment of recruiments) {
        const clubInfo = await db.query.Clubs.findFirst({
          where: (Clubs, { eq }) => (eq(Clubs.id, recruiment.club_id))
        });
        const clubDetails = await db.query.Users.findFirst({
          where: (Users, { eq }) => (eq(Users.id, recruiment.club_id))
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
          recruimentsWithClubInfo.push(data);
        }
      }
      return recruimentsWithClubInfo;
    } catch (error) {
      throw error;
    }
  },


  getClubRecruitments: async (club_id: string) => {
    try {
      const recruiments = await db.query.Recruitments.findMany({
        where: (Recruitments, { eq }) => (and(eq(Recruitments.club_id, club_id), eq(Recruitments.status, 'HIRING')))
      });
      return recruiments;
    } catch (error) {
      throw error;
    }
  },

  getRecruimentById: async (id: string) => {
    try {
      const recruiment = await db.query.Recruitments.findFirst({
        where: (Recruitments, { eq }) => (eq(Recruitments.id, id)),
      });
      if (!event) {
        throw new Error('Event not found');
      }
      return event;
    } catch (error) {
      throw error;
    }
  },

  updateRecruitmentById: async (recruitment_id: string, RecruitmentBody: RecruitmentType) => {
    try {
      const recruiment = await db.update(Recruitments).set({
        role: RecruitmentBody.role,
        description: RecruitmentBody.description,
        status: RecruitmentBody.status,
        updated_at: new Date()
      }).where(eq(Events.id, recruitment_id));
      if (!recruiment) {
        throw new Error('Event not found');
      }
      return recruiment;
    } catch (error) {
      throw error;
    }
  },

  endRecruitmentById: async (recruitment_id: string) => {
    try {
      const recruiment = await db.update(Recruitments).set({
        status: 'NOT_HIRING',
        updated_at: new Date()
      }).where(eq(Events.id, recruitment_id));
      if (!recruiment) {
        throw new Error('Event not found');
      }
      return recruiment;
    } catch (error) {
      throw error;
    }
  },

  deleteRecruitmentById: async (recruitment_id: string, club_id: string) => {
    try {
      const recruiment = await db.delete(Recruitments).where(eq(Recruitments.id, recruitment_id));
      if (!recruiment) {
        throw new Error('Event not found');
      }
      return recruiment;
    } catch (error) {
      throw error;
    }
  },
};

