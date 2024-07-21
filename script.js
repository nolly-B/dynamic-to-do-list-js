document.addEventListener("DOMContentLoaded", function () {
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
  });

  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask(taskText, save = true) {
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

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
