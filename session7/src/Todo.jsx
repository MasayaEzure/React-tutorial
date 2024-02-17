import { useState } from 'react';
import { CompleteTodos } from './components/CompleteTodos';
import { IncompleteTodos } from './components/IncompleteTodos';
import { InputTodo } from './components/InputTodo';
import './styles.css';

const messageStyle = {
  color: 'red',
};

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
    deleteTodo([...incompleteTodos], index, 'incomplete'); // 未完了
    setCompleteTodos([...completeTodos, incompleteTodos[index]]); // 完了
  };

  const onClickBack = (index) => {
    if (isMaxLimitIncompleteTodos) return;
    deleteTodo([...completeTodos], index, 'complete'); // 完了
    setIncompleteTodos([...incompleteTodos, completeTodos[index]]); // 未完了
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
        <p style={messageStyle}>登録できるTODOは5個までです。</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      {isMaxLimitIncompleteTodos && completeTodos.length > 0 && (
        <p style={messageStyle}>未完了が5個あるので、完了を戻せません。</p>
      )}
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
