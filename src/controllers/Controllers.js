import ToDo from "../models/ToDo";
import User from "../models/User";
import axios from "axios";

export const createToDo = async (req, res) => {
  const { username, content } = req.body;
  try {
    const user = await User.findOne({ username });
    const newToDo = await ToDo.create({
      todo: content,
      user: user._id,
    });
    user.todos.push(newToDo._id);
    await user.save();
    return res.status(201).json({ id: newToDo._id });
  } catch (err) {
    console.log(err);
  }
};

export const deleteToDo = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await ToDo.findOneAndUpdate(
      {
        _id: id,
      },
      { $set: { done: true } }
    );
    return res.status(200);
  } catch (err) {
    console.log(err);
  }
};

export const readToDos = async (req, res) => {
  const { username } = req.params;
  try {
    const todos = await ToDo.find({ username });
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
