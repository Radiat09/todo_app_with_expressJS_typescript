import { client } from "./mongodb";

// get collections
export const todosCollection = client.db("todosDB").collection("todos");
