import { useEffect, useState } from 'react';
import { Message } from './components/Message';

export const App = () => {
  const [num, setNum] = useState(0);
  const [isShowText, setIsShowText] = useState(false);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowText(!isShowText);
  };

  // なるべく使用しない（useEffectを使わなくて良いケースを考える）
  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      isShowText || setIsShowText(true);
    } else {
      isShowText && setIsShowText(false);
    }
  }, [num]);


  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <Message color="blue">お元気ですか？</Message>
      <Message color="green">元気ですよ！</Message>
      <button onClick={onClickCountUp}>Count Up</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>show or hide</button>
      {isShowText && <p>ああああ</p>}
    </>
  );
};
