"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbPath = path_1.default.join(__dirname, "../db/todo.json");
const app = (0, express_1.default)();
const todosRouter = express_1.default.Router();
app.use(express_1.default.json());
app.use("/", todosRouter);
// Root route
todosRouter.get("/", (req, res) => {
    console.log(req, res);
    res.send("Welcome to Todos app made with express js and typescript!");
});
//Get all todos
todosRouter.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(dbPath, { encoding: "utf-8" });
    //   console.log(data);
    res.json({ data, message: "All todos here!" });
    //   res.send("All todos here!");
});
// Get single todo
todosRouter.get("/todo", (req, res) => {
    const data = fs_1.default.readFileSync(dbPath, { encoding: "utf-8" });
    console.log(req.query);
    //   console.log(data);
    //   res.json({ data, message: "All todos here!" });
    res.send("Single todos here!");
});
//create a todo
todosRouter.post("/todos/create", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("Hello World!");
});
exports.default = app;
