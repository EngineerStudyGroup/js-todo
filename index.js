const todoInputTextBox = document.getElementById("input-todo");
const todoAddButton = document.getElementById("add-todo");

todoAddButton.addEventListener('click', ()=>{
  const val = todoInputTextBox.value;

  if (val == "") {
    alert("TODOが入力されていません");
    return;
  }

  // TODO作成処理
  console.log(val);

  todoInputTextBox.value = "";
});
