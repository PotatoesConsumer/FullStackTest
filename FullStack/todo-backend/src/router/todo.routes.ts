import { Hono } from "hono";
import { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo } from "../controller/todo.controller.ts";
import { todo } from "node:test";

const todoRouter = new Hono();

todoRouter.get("/test", (c) => c.text("Hello From Todo Router"));
todoRouter.get("/", GetTodo);
todoRouter.post("/", AddTodo);
todoRouter.patch("/", EditTodoName);
todoRouter.patch("/complete", CompleteTodo);
todoRouter.delete("/:todoId", DeleteTodo)
export { todoRouter };
