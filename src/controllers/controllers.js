import ToDo from "../models/ToDo";
import axios from "axios";

export const createToDo = async (req, res) => {
  const { content } = req.body;
  try {
    await ToDo.create({
      content,
    });
    return res.sendStatus(201);
  } catch (err) {
    console.log(err);
    return res.json({
      msg: "Error",
    });
  }
};
export const updateToDo = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
export const deleteToDo = async () => {
  try {
  } catch (err) {
    console.log(err);
  }
};
export const readToDos = async (req, res) => {
  try {
    const todos = await ToDo.find({});
    return res.json(todos);
  } catch (err) {
    console.log(err);
  }
};
export const getQuote = async (req, res) => {
  const URL = `https://api.quotable.io/random?tags=famous-quotes`;
  try {
    const {
      data: { content, author },
    } = await axios.get(URL);
    return res.json({ content, author });
  } catch (err) {
    console.log(err);
  }
};
