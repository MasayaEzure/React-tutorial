const inputStyle = {
  backgroundColor: '#c6e5d9',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

export const InputTodo = ({ todo, onChange, onClick, disabled }) => {
  return (
    <div style={inputStyle}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todo}
        onChange={onChange}
      />
      <button disabled={disabled} id="addButton" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
