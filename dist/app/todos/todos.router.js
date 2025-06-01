"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbPath = path_1.default.join(__dirname, "../../../db/todo.json");
exports.todosRouter = express_1.default.Router();
//Get all todos
exports.todosRouter.get("/", (req, res) => {
    const data = fs_1.default.readFileSync(dbPath, { encoding: "utf-8" });
    //   console.log(data);
    res.json({ data, message: "All todos here!" });
    //   res.send("All todos here!");
});
// Get single todo
exports.todosRouter.get("/todo", (req, res) => {
    const data = fs_1.default.readFileSync(dbPath, { encoding: "utf-8" });
    console.log(req.query);
    //   console.log(data);
    //   res.json({ data, message: "All todos here!" });
    res.send("Single todos here!");
});
//create a todo
exports.todosRouter.post("/create", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("Hello World!");
});
