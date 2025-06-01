import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const dbPath = path.join(__dirname, "../../../db/todo.json");
export const todosRouter = express.Router();

//Get all todos
todosRouter.get("/", (req: Request, res: Response) => {
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
todosRouter.post("/create", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.send("Hello World!");
});
