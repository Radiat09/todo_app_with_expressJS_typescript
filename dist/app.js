"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_router_1 = require("./app/todos/todos.router");
// const dbPath = path.join(__dirname, "../db/todo.json");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todos", todos_router_1.todosRouter);
// Root route
app.get("/", (req, res) => {
    console.log(req, res);
    res.send("Welcome to Todos app made with express js and typescript!");
});
exports.default = app;
