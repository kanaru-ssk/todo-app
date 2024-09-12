function add() {
  const input = document.querySelector("input");
  if (!input.value) return; // 未入力の場合スキップ

  // <input type="checkbox" />
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  // <span>タスク</span>
  const span = document.createElement("span");
  span.append(input.value);

  // <li><input type="checkbox" /><span>タスク</span></li>
  const li = document.createElement("li");
  li.append(checkbox);
  li.append(span);

  // 作成した要素をindex.htmlの<ul>に挿入
  const ul = document.querySelector("ul");
  ul.append(li);

  // 入力値をクリア
  input.value = "";
}
