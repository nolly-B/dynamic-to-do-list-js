document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText) {
      let newTask = document.createElement("li");
      newTask.textContent = taskText;
      let removeButton = document
        .createElement("button")
        .classList.add("remove-btn");
      removeButton.textContent = "Remove";

      removeButton.addEventListener(click, function () {
        taskList.removeChild(newTask);
      });

      newTask.appendChild(removeButton);
      taskList.appendChild(newTask);

      taskInput.value = "";
    } else {
      alert("Please enter a task");
    }
  }

  addButton.addEventListener(click, addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  document.addEventListener("DOMContentLoaded", addTask);
});
