import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const changeCount = (increase) => (increase ? count + 1 : count - 1);
  const clickHandler = (increase) => setCount(changeCount(increase));
  const increaseHandler = () => clickHandler(true);
  const decreaseHandler = () => clickHandler(false);

  return (
    <div className="card">
      <button onClick={increaseHandler}>Increase me !</button>
      <button>count is {count}</button>
      <button onClick={decreaseHandler}>Decrease me !</button>
    </div>
  );
}

export default App;
