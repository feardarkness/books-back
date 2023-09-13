import express, { type Request, type Response, type Application } from "express";
import nodeConfigs from "./configs/node.js";

const app: Application = express();

const port = nodeConfigs.port;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is started at http://localhost:${port}`);
});
