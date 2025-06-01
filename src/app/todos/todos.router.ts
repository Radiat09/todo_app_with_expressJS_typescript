import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { todosCollection } from "../../config/collections";
import { ObjectId } from "mongodb";
// const dbPath = path.join(__dirname, "../../../db/todo.json");
export const todosRouter = express.Router();

type Todo = {
  title: string;
  description: string;
  priority: string;
  isCompleted: boolean;
};

//Get all todos
todosRouter.get("/", async (req: Request, res: Response) => {
  //   const data = fs.readFileSync(dbPath, { encoding: "utf-8" });
  const result = await todosCollection.find().toArray();

  res.json({ data: result, message: "All todos here!" });
});

// Get single todo
todosRouter.get("/:id", async (req: Request, res: Response) => {
  //   const data = fs.readFileSync(dbPath, { encoding: "utf-8" });
  const id = req.params.id;
  const result = await todosCollection.findOne({ _id: new ObjectId(id) });

  res.json({ data: result, message: "Heres your todo!" });
});

//create a todo
todosRouter.post("/create", async (req: Request, res: Response) => {
  const data = req.body;
  const result = await todosCollection.insertOne(data);
  res.send(result);
});

// update a todo
todosRouter.patch("/:id", async (req: Request, res: Response) => {
  //   const data = fs.readFileSync(dbPath, { encoding: "utf-8" });
  const id = req.params.id;
  const { title, description, priority, isCompleted }: Todo = req.body;
  // Create an update object with only the provided fields
  const updateFields: Partial<Todo> = {};
  if (title !== undefined) updateFields.title = title;
  if (description !== undefined) updateFields.description = description;
  if (priority !== undefined) updateFields.priority = priority;
  if (isCompleted !== undefined) updateFields.isCompleted = isCompleted;

  // Only perform update if at least one field was provided
  if (Object.keys(updateFields).length > 0) {
    const result = await todosCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateFields },
      { upsert: true }
    );
    res.json(result);
  } else {
    res.status(400).json({ message: "No fields to update" });
  }
});

// delete a todo
todosRouter.delete("/:id", async (req: Request, res: Response) => {
  //   const data = fs.readFileSync(dbPath, { encoding: "utf-8" });
  const id = req.params.id;
  const result = await todosCollection.deleteOne({ _id: new ObjectId(id) });

  res.json(result);
});
