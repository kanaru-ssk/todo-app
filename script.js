function add() {
  const newTaskInput = document.getElementById("new-task");
  const newLi = document.createElement("li");
  newLi.append(newTaskInput.value);

  const tasksUl = document.getElementById("tasks");
  tasksUl.append(newLi);

  // 入力値をクリア
  newTaskInput.value = "";
}
