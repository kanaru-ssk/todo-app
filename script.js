function add() {
  const newTaskInput = document.getElementById("new-task");
  if (!newTaskInput.value) return;

  const checkbox = document.createElement("input"); // <input />
  checkbox.setAttribute("type", "checkbox"); // <input type="checkbox" />
  const span = document.createElement("span"); // <span></span>
  span.append(newTaskInput.value); // <span>タスク</span>

  const newTaskElement = document.createElement("li"); // <li></li>
  newTaskElement.append(checkbox); // <li><input type="checkbox" /></li>
  newTaskElement.append(span); // <li><input type="checkbox" /><span>タスク</span></li>

  // index.htmlの<ul id="tasks"></ul>の中にnewTaskElementを挿入
  const tasksUl = document.getElementById("tasks");
  tasksUl.append(newTaskElement);

  // 入力値をクリア
  newTaskInput.value = "";
}
