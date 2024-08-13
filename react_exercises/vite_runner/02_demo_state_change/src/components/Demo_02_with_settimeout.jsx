import { useState } from 'react';

export const Demo_02_with_no_markup = () => {
  console.log('state changed', new Date().toISOString());
  let randomNumber;
  console.log('before:', { randomNumber });
  setTimeout (() => {
    randomNumber = Math.random()
    console.log('inside settimeout', {randomNumber})
  }, 250)
  console.log('after:', {randomNumber})
  return randomNumber
}

export const Demo_02_with_markup = () => {
  const randomNumber = Demo_02_with_no_markup()
  return (
    <div className="card">
      <button>count is {randomNumber}</button>
    </div>
  );
}

export const Demo_02_settimeout_return = () => {
  console.log('state changed', new Date().toISOString());
  let randomNumber;
  console.log('before:', { randomNumber });
  randomNumber = setTimeout (() => {
    randomNumber = Math.random()
    console.log('inside settimeout', {randomNumber})
  }, 250)
  console.log('after:', {randomNumber})
  return (
    <div className="card">
      <button>count is {randomNumber}</button>
    </div>
  );
}

export const Demo_02_with_usestate = () => {
  console.log('state changed', new Date().toISOString());
  const [count, setCount] = useState(0);

  let randomNumber;
  console.log('before:', { randomNumber });
  setTimeout(() => {
    randomNumber = Math.random();
    setCount(randomNumber)
    console.log('inside settimeout', { randomNumber });
  }, 250);
  console.log('after:', { randomNumber });
  return (
    <div className="card">
      <button>count is {count}</button>
    </div>
  );
}