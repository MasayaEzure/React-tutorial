export const CompleteTodos = ({ todos, onClickBack }) => {
  return (
    <div className="complete-area">
      <p className="title">完了</p>
      <ul id="completeList">
        {todos.map((done, index) => (
          <li key={done}>
            <div className="list-row">
              <p>{done}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
