import "reflect-metadata";
import express, { type Request, type Response, type Application } from "express";

import AppDataSource from "./data-source.js";
import expressConfigs from "./configs/express.js";

const app: Application = express();

const { port } = expressConfigs;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((err: Error) => {
    console.log("err=================================");
    console.log(err);
    console.log("=================================");
  });
