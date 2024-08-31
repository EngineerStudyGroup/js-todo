// id="input-todo"の要素を取得
const todoInputTextBox = document.getElementById("input-todo");

// id="add-todo"の要素を取得
const todoAddButton = document.getElementById("add-todo");

// id="todo-list"の要素を取得
const todoList = document.getElementById("todo-list");

// todoAddButton がClickされたときの処理
todoAddButton.addEventListener("click", ()=>{
  // テキストボックスの中身を取得
  const val = todoInputTextBox.value;

  // テキストボックスの中身が空なら、alertを出して処理終了
  if (val == "") {
    alert("TODOが入力されていません");
    return;
  }

  // <li class="todo-li"> 要素を作成
  const listItem = document.createElement("li");
  listItem.className = "todo-li";
  listItem.innerHTML = "ほげほげ";

  // todoListにlistItemを子要素として追加
  todoList.appendChild(listItem);

  // TODO作成処理
  console.log(val);

  // テキストボックスの中身を空にする
  todoInputTextBox.value = "";
});
