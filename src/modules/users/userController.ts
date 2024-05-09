import express from "express";
import { oauthMiddleware } from "../../middlewares/oauthmiddleware";
import { Request, Response } from "express";
import { db } from "../../db/db";

const UserRouter = express.Router();

UserRouter.use(oauthMiddleware);

UserRouter.get('/getStudentInfo/', async (req: Request, res: Response) => {
  const user = res.locals.user;
  try {
    const userInfo = await db.query.Students.findMany({
      where: (Students, { eq }) => eq(Students.id, user.id)
    });
    res.status(201).json(userInfo);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});


export default UserRouter;
