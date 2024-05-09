import cors from "cors";
import express, { Express } from "express";
import { Request, Response } from "express";
import { authRouter } from "./modules/auth/authRoute";
import { userRouter } from "./modules/users/userRoute";
import { qrRouter } from "./modules/markAttendance/qroute";
import EventRouter from "./modules/events/EventController";
import EventResponseRouter from "./modules/registrations/RegistrationController";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import * as path from 'path';
import RecruitmentRouter from "./modules/recruitments/RecruitmentController";
import RecruitmentResponseRouter from "./modules/RecruitmentResponses/ResponseController";

export const app: Express = express();

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Campus Connect API Documentation',
    version: '1.0.0',
    description: 'API documentation for the Campus Connect',
  },
  servers: [
    {
      url: 'http://localhost:8080',
      description: 'Development server',
    },
  ],
};

const options: swaggerJSDoc.Options = {
  swaggerDefinition,
  apis: [path.resolve(__dirname, './modules/*/EventController.ts')],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUI.serve);
app.get('/api-docs', swaggerUI.setup(swaggerSpec));


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
app.use("api/event-responses", EventResponseRouter);
app.use('api/recruitments', RecruitmentRouter);
app.use("api/recruitment-reposnses", RecruitmentResponseRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
