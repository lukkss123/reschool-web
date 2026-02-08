const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');


const defaultTasks = [
  "Save This website",
  "best Project Provided Website"
];

defaultTasks.forEach(task => {
  addTaskToList(task);
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTaskToList(taskText);
    taskInput.value = "";
  }
}

function addTaskToList(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const doneSpan = document.createElement('span');
  doneSpan.textContent = "done";
  doneSpan.className = "done-label";

  li.appendChild(doneSpan);
  taskList.appendChild(li);
}
