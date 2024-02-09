import { Message } from "./components/Message";

export function App() {
  const onClickButton = () => alert('onClickButton');
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <Message color='blue'>お元気ですか？</Message> 
      <Message color='green'>元気ですよ！</Message>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
}
