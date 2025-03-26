const Controller = ({ onClickEvent }) => {
  return (
    <div>
      <button onClick={() => onClickEvent(-1)}>-1</button>
      <button onClick={() => onClickEvent(-10)}>-10</button>
      <button onClick={() => onClickEvent(-100)}>-100</button>
      <button onClick={() => onClickEvent(100)}>+100</button>
      <button onClick={() => onClickEvent(10)}>+10</button>
      <button onClick={() => onClickEvent(1)}>+1</button>
    </div>
  );
};

export default Controller;
