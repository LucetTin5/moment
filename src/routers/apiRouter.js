import express from "express";
import {
  createToDo,
  readToDos,
  updateToDo,
  deleteToDo,
  getQuote,
  getWeather,
} from "../controllers/controllers";

const apiRouter = express.Router();

apiRouter.get("/todo", readToDos);
apiRouter.post("/todo", createToDo);
apiRouter.patch("/todo/:id", updateToDo);
apiRouter.delete("/todo/:id", deleteToDo);
apiRouter.get("/weather", getWeather);
apiRouter.get("/quote", getQuote);

export default apiRouter;
