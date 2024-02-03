const onClickAdd = () => {
  // 追加した TODO の値を取得
  const inputTodo = document.getElementById('inputTodo').value;
  document.getElementById('inputTodo').value = ''; // inputエリアの初期化
  createIncompleteTodo(inputTodo);
};

const createIncompleteTodo = (todo) => {
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.className = 'list-row';
  const p = document.createElement('p');
  p.className = 'todo';
  p.innerHTML = todo;

  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    const moveTarget = completeButton.closest('li');
    if (!moveTarget) {
      return;
    }
    completeButton.nextElementSibling.remove(); // 削除ボタンを非表示
    completeButton.remove();

    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      const todoText = backButton.previousElementSibling.innerText; // 戻すボタンの隣のTODOを取得
      createIncompleteTodo(todoText);
      backButton.closest('li').remove();
    });
    moveTarget.firstElementChild.appendChild(backButton); // 戻すボタンを追加
    document.getElementById('completeList').appendChild(moveTarget);
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    const deleteTarget = deleteButton.closest('li');
    if (deleteTarget) {
      document.getElementById('incompleteList').removeChild(deleteTarget);
    }
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  // 未完了へ
  document.getElementById('incompleteList').appendChild(li);
};

document.getElementById('addButton').addEventListener('click', onClickAdd);
