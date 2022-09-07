import { clockFunc } from "./js/clock.js";
import { getQuote } from "./js/quote.js";
import "./js/todo.js";
import "./js/username.js";

const init = () => {
  getQuote();
  clockFunc();
};

init();
