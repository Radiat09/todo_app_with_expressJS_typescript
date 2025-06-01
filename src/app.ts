import express, { Application, Request, Response } from "express";
import path from "path";
import { todosRouter } from "./app/todos/todos.router";

// const dbPath = path.join(__dirname, "../db/todo.json");

const app: Application = express();

app.use(express.json());
app.use("/todos", todosRouter);
// Root route
app.get("/", (req: Request, res: Response) => {
  console.log(req, res);
  res.send("Welcome to Todos app made with express js and typescript!");
});
export default app;
