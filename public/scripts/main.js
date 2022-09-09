import { clockFunc } from "./js/clock.js";
import { getQuote } from "./js/quote.js";
import "./js/todo.js";
import { setToDos } from "./js/todo.js";
import "./js/username.js";

let username;

const usernameQ = document.getElementById("usernameQ");
const usernameH2 = document.getElementById("usernameH2");
const usernameForm = document.getElementById("usernameForm");
const usernameInput = document.getElementById("username");

const activateToDoForm = () => {
  return username
    ? (document.querySelector("#todoForm").style.display = "block")
    : (document.querySelector("#todoForm").style.display = "none");
};

const addUsername = (e) => {
  e.preventDefault();
  const value = usernameInput.value;
  // fetch username;
  username = value;
  localStorage.setItem("username", username);
  usernameQ.style.display = "none";
  usernameForm.style.display = "none";
  usernameH2.innerText = `Have a nice day, ${username}!`;
  activateToDoForm();
};

const init = () => {
  username = localStorage.getItem("username") ?? "";
  if (username) {
    usernameQ.style.display = "none";
    usernameForm.style.display = "none";
    usernameH2.innerText = `Have a nice day, ${username}!`;
  }
  getQuote();
  clockFunc();
  setToDos();
  usernameForm.addEventListener("submit", addUsername);
  activateToDoForm();
};

init();
