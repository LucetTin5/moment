import express from "express";
import {
  createToDo,
  readToDos,
  deleteToDo,
  getQuote,
} from "../controllers/Controllers.js";

import { createUser } from "../controllers/UserControllers.js";

const apiRouter = express.Router();

apiRouter.post("/user", createUser);
apiRouter.get("/todo/:username", readToDos);
apiRouter.delete("/todo/:id", deleteToDo);
apiRouter.post("/todo", createToDo);
apiRouter.get("/quote", getQuote);

export default apiRouter;
