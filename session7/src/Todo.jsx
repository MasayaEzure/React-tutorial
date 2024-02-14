import { useState } from 'react';
import './styles.css';

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(['TODO', 'TODO']);
  const [completeTodos, setCompleteTodos] = useState(['DONE', 'DONE']);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button id="addButton">追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了</p>
        <ul id="incompleteList">
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了</p>
        <ul id="completeList">
          {completeTodos.map((done) => (
            <li key={done}>
              <div className="list-row">
                <p>{done}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
