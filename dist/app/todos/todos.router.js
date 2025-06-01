"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const collections_1 = require("../../config/collections");
const mongodb_1 = require("mongodb");
// const dbPath = path.join(__dirname, "../../../db/todo.json");
exports.todosRouter = express_1.default.Router();
//Get all todos
exports.todosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const data = fs.readFileSync(dbPath, { encoding: "utf-8" });
    const result = yield collections_1.todosCollection.find().toArray();
    res.json({ data: result, message: "All todos here!" });
}));
// Get single todo
exports.todosRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const data = fs.readFileSync(dbPath, { encoding: "utf-8" });
    const id = req.params.id;
    const result = yield collections_1.todosCollection.findOne({ _id: new mongodb_1.ObjectId(id) });
    res.json({ data: result, message: "Heres your todo!" });
}));
//create a todo
exports.todosRouter.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield collections_1.todosCollection.insertOne(data);
    res.send(result);
}));
// update a todo
exports.todosRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const data = fs.readFileSync(dbPath, { encoding: "utf-8" });
    const id = req.params.id;
    const { title, description, priority, isCompleted } = req.body;
    // Create an update object with only the provided fields
    const updateFields = {};
    if (title !== undefined)
        updateFields.title = title;
    if (description !== undefined)
        updateFields.description = description;
    if (priority !== undefined)
        updateFields.priority = priority;
    if (isCompleted !== undefined)
        updateFields.isCompleted = isCompleted;
    // Only perform update if at least one field was provided
    if (Object.keys(updateFields).length > 0) {
        const result = yield collections_1.todosCollection.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: updateFields }, { upsert: true });
        res.json(result);
    }
    else {
        res.status(400).json({ message: "No fields to update" });
    }
}));
// delete a todo
exports.todosRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const data = fs.readFileSync(dbPath, { encoding: "utf-8" });
    const id = req.params.id;
    const result = yield collections_1.todosCollection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    res.json(result);
}));
