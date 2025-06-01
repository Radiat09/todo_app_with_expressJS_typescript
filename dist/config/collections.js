"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosCollection = void 0;
const mongodb_1 = require("./mongodb");
// get collections
exports.todosCollection = mongodb_1.client.db("todosDB").collection("todos");
