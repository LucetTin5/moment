const usernameQ = document.getElementById("usernameQ");
const usernameH2 = document.getElementById("usernameH2");
const usernameForm = document.getElementById("usernameForm");
const usernameInput = document.getElementById("username");

const addUsername = (e) => {
  e.preventDefault();
  const value = usernameInput.value;
  // fetch username;
  usernameQ.style.display = "none";
  usernameForm.style.display = "none";
  usernameH2.innerText = `Hello, ${value}!`;
};

usernameForm.addEventListener("submit", addUsername);
