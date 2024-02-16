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

  const onClickAdd = () => {
    if (!todoText) return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickDone = (index) => {
    // 未完了
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    // 完了
    const newCopleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCopleteTodos);
  };

  const onClickBack = (index) => {
    // 完了
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    // 未完了
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todo={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (<p style={{color: 'red'}}>登録できるTODOは5個までです。</p>)}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
