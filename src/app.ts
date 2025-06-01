import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();
app.use(express.json());

const dbPath = path.join(__dirname, "../db/todo.json");

// Root route
app.get("/", (req: Request, res: Response) => {
  console.log(req, res);
  res.send("Welcome to Todos app made with express js and typescript!");
});

//Get all todos
app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(dbPath, { encoding: "utf-8" });
  //   console.log(data);
  res.json({ data, message: "All todos here!" });
  //   res.send("All todos here!");
});

// Get single todo
app.get("/todo", (req: Request, res: Response) => {
  const data = fs.readFileSync(dbPath, { encoding: "utf-8" });
  console.log(req.query);
  //   console.log(data);
  //   res.json({ data, message: "All todos here!" });
  res.send("Single todos here!");
});

//create a todo
app.post("/todos/create", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.send("Hello World!");
});

export default app;
