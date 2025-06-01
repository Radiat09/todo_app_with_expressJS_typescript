import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const dbPath = path.join(__dirname, "../db/todo.json");

const app: Application = express();
const todosRouter = express.Router();

app.use(express.json());
app.use("/", todosRouter);
// Root route
todosRouter.get("/", (req: Request, res: Response) => {
  console.log(req, res);
  res.send("Welcome to Todos app made with express js and typescript!");
});

//Get all todos
todosRouter.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(dbPath, { encoding: "utf-8" });
  //   console.log(data);
  res.json({ data, message: "All todos here!" });
  //   res.send("All todos here!");
});

// Get single todo
todosRouter.get("/todo", (req: Request, res: Response) => {
  const data = fs.readFileSync(dbPath, { encoding: "utf-8" });
  console.log(req.query);
  //   console.log(data);
  //   res.json({ data, message: "All todos here!" });
  res.send("Single todos here!");
});

//create a todo
todosRouter.post("/todos/create", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.send("Hello World!");
});

export default app;
