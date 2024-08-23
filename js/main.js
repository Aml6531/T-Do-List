const input = document.getElementById("input");

const list = document.getElementById("list");

function addTask() {
  //add task
  if (input.value != "") {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);

    //close button
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  //empty input field
  else {
    alert("Please enter a task");
  }

  //delete task
  input.value = "";

  save();
}

list.addEventListener(
  "click",
  function (e) {
    //close button
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      save();
    }
  },
  false
);

//save tasks

function save() {
  localStorage.setItem("listedTasks", list.innerHTML);
}

function listedTasks() {
  list.innerHTML = localStorage.getItem("listedTasks");
}
listedTasks();
