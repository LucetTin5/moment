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
export const getWeather = async (req, res) => {
  // const { lat, lon } = req;
  const lat = 37.5642;
  const lon = 127.0016;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&lang=kr&units=metric`;
  try {
    const {
      data: { weather, main, name },
    } = await axios.get(URL);
    console.log(weather, main.temp, name);
  } catch (err) {
    console.log(err);
  }
};
export const getQuote = async () => {
  const URL = `https://api.quotable.io/random?tags=famous-quotes`;
  try {
    const {
      data: { content, author },
    } = await axios.get(URL);
    console.log(content, "\n", author);
  } catch (err) {
    console.log(err);
  }
};
