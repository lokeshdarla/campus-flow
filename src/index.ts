import cors from "cors";
import express, { Express } from "express";
import { Request, Response } from "express";
import { authRouter } from "./modules/auth/authRoute";
import { userRouter } from "./modules/users/userRoute";
import { qrRouter } from "./modules/markAttendance/qroute";
import EventRouter from "./modules/events/EventController";

export const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/server", (req: Request, res: Response) => {
  res.send({
    message: "Server is running",
  });
});

app.use("/api/auth/", authRouter);
app.use("/", userRouter);
app.use("/api/scan-qr", qrRouter);
app.use("/api/events", EventRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
