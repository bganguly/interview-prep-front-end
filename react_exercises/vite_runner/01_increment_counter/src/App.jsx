import { useState } from 'react';
import './App.css';

function App() {
  console.log('state changed', new Date().toISOString());
  const [count, setCount] = useState(0);

  const changeCount = (increase) => (increase ? count + 1 : count - 1);
  const clickHandler = (increase) => setCount(changeCount(increase));
  const increaseHandler = () => clickHandler(true);
  const decreaseHandler = () => clickHandler(false);

  let randomNumber;
  console.log('before:', { randomNumber });
  setTimeout(() => {
    randomNumber = Math.random();
    console.log('inside settimeout', { randomNumber });
    // setCount(Math.random())
    // console.log('inside settimeout', {randomNumber})
  }, 250);
  console.log('after 01:', { randomNumber });
  // what will the output be
  // randomNumber = setTimeout (() => {
  //   randomNumber = Math.random()
  //   console.log('inside settimeout', {randomNumber})
  // }, 250)
  // console.log('after 02:', {randomNumber})
  // does it make a difference if we have markup or not
  return null;
  return (
    <div className="card">
      <button onClick={increaseHandler}>Increase me !</button>
      <button>count is {count}</button>
      <button onClick={decreaseHandler}>Decrease me !</button>
    </div>
  );
}

export default App;
