import express from "express";
import {
  createToDo,
  readToDos,
  updateToDo,
  deleteToDo,
  getQuote,
} from "../controllers/controllers";

const apiRouter = express.Router();

apiRouter.get("/todo", readToDos);
apiRouter.delete("/todo/:id", deleteToDo);
apiRouter.patch("/todo/:id", updateToDo);
apiRouter.post("/todo", createToDo);
apiRouter.get("/quote", getQuote);

export default apiRouter;
