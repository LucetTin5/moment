const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todo");
const todos = document.querySelector(".todos");

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
  li.appendChild(todoValue);
  const doneBtn = document.createElement("span");
  doneBtn.className = "doneBtn";
  doneBtn.innerText = "✅";
  doneBtn.addEventListener("click", todoDone);
  li.appendChild(doneBtn);

  todos.appendChild(li);
  todoInput.value = "";
};

const addToDo = async (e) => {
  e.preventDefault();
  const content = todoInput.value;
  try {
    const { id } = await (
      await fetch("/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
        }),
      })
    ).json();
    paintToDo(content, id);
  } catch (err) {
    console.log(err);
  }
};

const getToDos = async () => {
  try {
    const todos = await (await fetch("/api/todo")).json();
    return todos;
  } catch (err) {
    console.log(err);
  }
};

export const setToDos = async () => {
  const todos = await getToDos();
  console.log(todos);
  todos.map(({ _id, todo, done }) => {
    if (!done) {
      paintToDo(todo, _id);
    }
  });
};

todoForm.addEventListener("submit", addToDo);
