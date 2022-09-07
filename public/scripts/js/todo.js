const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todo");
const todos = document.querySelector(".todos");

const todoDone = (e) => {
  const { target } = e;
  const li = target.parentNode;
  // fetch doneTodo;
  li.remove();
};

const paintToDo = (value) => {
  const li = document.createElement("li");
  li.className = "todo";
  const todoValue = document.createElement("span");
  todoValue.innerText = value;
  li.appendChild(todoValue);
  const doneBtn = document.createElement("span");
  doneBtn.className = "doneBtn";
  doneBtn.innerText = "✅";
  doneBtn.addEventListener("click", todoDone);
  li.appendChild(doneBtn);

  todos.appendChild(li);
};
const addToDo = (e) => {
  e.preventDefault();
  const value = todoInput.value;
  //   fetch createToDo;
  paintToDo(value);
  todoInput.value = "";
};

todoForm.addEventListener("submit", addToDo);
