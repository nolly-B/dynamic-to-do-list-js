document.addEventListener("DOMContentLoaded", function () {
  const storedTasks = localStorage.getItem("tasks");
  const tasksArray = JSON.parse(storedTasks) || [];

  tasksArray.forEach((task) => {
    const newTask = document.createElement("li");
    newTask.textContent = task;
    taskList.appendChild(newTask);
  });

  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskListArray = [...taskList.children].map(
      (item) => item.textContent
    );
    localStorage.setItem("tasks", JSON.stringify(taskListArray));

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
