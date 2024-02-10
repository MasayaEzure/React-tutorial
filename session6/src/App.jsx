import { useState } from 'react';
import { Message } from './components/Message';

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
    // setNum(num + 1);
  };
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <Message color="blue">お元気ですか？</Message>
      <Message color="green">元気ですよ！</Message>
      <button onClick={onClickCountUp}>Count Up</button>
      <p>{num}</p>
    </>
  );
};
