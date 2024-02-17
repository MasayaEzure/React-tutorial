import { useState } from 'react';
import { CompleteTodos } from './components/CompleteTodos';
import { IncompleteTodos } from './components/IncompleteTodos';
import { InputTodo } from './components/InputTodo';
import './styles.css';

export const Todo = () => {
  const [todoText, setTodoText] = useState();
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  const deleteTodo = (todos, index, mode) => {
    const newTodos = todos;
    newTodos.splice(index, 1);
    switch (mode) {
      case 'incomplete':
        setIncompleteTodos(newTodos);
        break;
      case 'complete':
        setCompleteTodos(newTodos);
        break;
      default:
        break;
    }
  };

  const onClickAdd = () => {
    if (!todoText) return;
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    deleteTodo([...incompleteTodos], index, 'incomplete');
  };

  const onClickDone = (index) => {
    // 未完了
    deleteTodo([...incompleteTodos], index, 'incomplete');
    // 完了
    setCompleteTodos([...completeTodos, incompleteTodos[index]]);
  };

  const onClickBack = (index) => {
    // 完了
    deleteTodo([...completeTodos], index, 'complete');
    // 未完了
    setIncompleteTodos([...incompleteTodos, completeTodos[index]]);
  };

  return (
    <>
      <InputTodo
        todo={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
        <p style={{ color: 'red' }}>登録できるTODOは5個までです。</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
