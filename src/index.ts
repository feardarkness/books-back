import "reflect-metadata";
import express, { type Request, type Response, type Application } from "express";
import nodeConfigs from "./configs/node.js";
import AppDataSource from "./configs/database/data-source.js";

const app: Application = express();

const { port } = nodeConfigs;

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
