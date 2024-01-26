const onClickAdd = () => {
    const inputTodo = document.getElementById("input-todo").value;
    document.getElementById("input-todo").value = ""; // inputエリアの初期化

    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.className = "todo";
    p.innerHTML = inputTodo;

    // 子要素の設定
    li.appendChild(div);
    div.appendChild(p);
    // 親要素に追加
    document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);