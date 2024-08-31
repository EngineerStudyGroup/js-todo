const todoInputTextBox = document.getElementById("input-todo");
const todoAddButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

todoAddButton.addEventListener('click', ()=>{
  const val = todoInputTextBox.value;

  if (val == "") {
    alert("TODOが入力されていません");
    return;
  }

  const listItem = document.createElement('li');
  listItem.className = "todo-li";
  listItem.innerHTML = "ほげほげ";

  todoList.appendChild(listItem);

  // TODO作成処理
  console.log(val);

  todoInputTextBox.value = "";
});
