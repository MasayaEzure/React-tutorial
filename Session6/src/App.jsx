export function App() {
  const onClickButton = () => alert('onClickButton');
  const contentStyle = { color: 'green', margin: 50 };
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <p style={contentStyle}>やっほー！</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
}
