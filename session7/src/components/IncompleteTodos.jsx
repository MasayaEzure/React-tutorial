export const IncompleteTodos = ({todos, onClickDone, onClickDelete}) => {
  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>
      <ul id="incompleteList">
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickDone(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
