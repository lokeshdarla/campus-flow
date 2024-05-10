import express from "express";
import { oauthMiddleware } from "../../middlewares/oauthmiddleware";
import { Request, Response } from "express";
import { db } from "../../db/db";

const UserRouter = express.Router();

UserRouter.use(oauthMiddleware);

UserRouter.get('/getStudentInfo/', async (req: Request, res: Response) => {
  const user = res.locals.user;
  try {
<<<<<<< HEAD
    const userInfo = await db.query.Students.findMany({
      where: (Students, { eq }) => eq(Students.id, user.id)
=======
    const userInfo = await db.query.Students.findFirst({
      where: (Users, { eq }) => eq(Users.id, user.id)
>>>>>>> 3ca7bb7fd1b53af5a6f876dbb3d1ee1b4afb03b5
    });
    res.status(201).json(userInfo);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});


export default UserRouter;
