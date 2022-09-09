import { getQuote } from "./js/quote.js";

const clock = document.querySelector(".clock");
const question = document.querySelector(".question");
const form = document.querySelector("form");
const input = document.querySelector("input");
const todos = document.querySelector(".todos");

let username;

const setTime = () => {
  const time = new Date().toString().split(" ")[4];
  const [hours, minutes, seconds] = time.split(":");
  if (hours.length === 1) {
    hours = "0" + hours;
  }
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  return (clock.innerText = `${hours} : ${minutes}`);
};

const clockFunc = () => {
  setTime();
  setInterval(() => setTime(), 1000);
};

const todoDone = (e) => {
  const { target } = e;
  const li = target.parentNode;
  const { id } = li.dataset;
  fetch("/api/todo/" + id, {
    method: "DELETE",
  });
  li.remove();
};

const paintToDo = (content, id) => {
  const li = document.createElement("li");
  li.className = "todo";
  li.dataset.id = id;
  const todoValue = document.createElement("span");
  todoValue.innerText = content;
  const doneBtn = document.createElement("span");
  doneBtn.className = "doneBtn";
  doneBtn.innerText = "✅";
  doneBtn.addEventListener("click", todoDone);
  li.append(todoValue, doneBtn);

  todos.appendChild(li);
};

const todoForm = (e) => {
  e.preventDefault();
  const value = input.value;
  input.placeholder = "Add something to do.";
  fetch("/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      content: value,
    }),
  })
    .then((res) => res.json())
    .then(({ id }) => {
      paintToDo(value, id);
      input.value = "";
    });
};

const userForm = (e) => {
  e.preventDefault();
  const value = input.value;
  if (value < 4) {
    alert("username은 4글자 이상이어야 합니다.");
  } else {
    username = value;
    fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((res) => res.json())
      .then(({ msg }) => {
        if (msg === "Hello") {
          // new user
          question.innerText = `Have a nice day ${username}!`;
          input.value = "";
          form.removeEventListener("submit", userForm);
          fetch("/api/todo/" + username)
            .then((res) => res.json())
            .then((json) => {
              json.map(({ _id, todo: content, done }) => {
                if (!done) {
                  paintToDo(content, _id);
                }
              });
            });
          localStorage.setItem("username", username);
          form.addEventListener("submit", todoForm);
        }
      });
  }
};

const init = () => {
  username = localStorage.getItem("username") ?? "";
  if (!username) {
    question.innerText = "Hello, What's your name?";
    input.placeholder = "Username, longer than 4";
    form.addEventListener("submit", userForm);
  } else {
    question.innerText = `Have a nice day ${username}!`;
    input.placeholder = "Add something to do";
    fetch("/api/todo/" + username)
      .then((res) => res.json())
      .then((json) => {
        json.map(({ _id, todo: content, done }) => {
          if (!done) {
            paintToDo(content, _id);
          }
        });
      });
    form.addEventListener("submit", todoForm);
  }

  clockFunc();
  getQuote();
};

init();
