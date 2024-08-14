import { useEffect, useRef, useState } from 'react';

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

export const Demo_02_with_markup_01 = () => {
  const randomNumber = Demo_02_with_no_markup()
  return (
    <div className="card">
      <button>count is {randomNumber}</button>
    </div>
  );
}

export const Demo_02_with_markup_02 = () => {
  console.log('state changed', new Date().toISOString());
  let randomNumber;
  console.log('before:', { randomNumber });
  setTimeout (() => {
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

export const Demo_02_with_usestate_01 = () => {
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

export const Demo_02_with_usestate_02 = () => {
  const timeNow = new Date().toISOString()
  console.log('state changed', timeNow);
  const timeNowRef = useRef(timeNow)
  const originalTimeText = 'Original Time : '
  const [originalTime, setOriginalTime] = useState(timeNowRef.current);
  const delayInSeconds = 5;
  const updatingTimeText = `Updated time after ${delayInSeconds} seconds:`
  const [updatedTime, setUpdatedTime] = useState('');

  // https://www.freecodecamp.org/news/how-to-use-settimeout-in-react-using-hooks
  useEffect(() => {
    const delayInSeconds = 5;
    const timeoutId = setTimeout(() => {
      setUpdatedTime(new Date().toISOString());
    }, delayInSeconds * 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="date-time-string">
        <span style={{'marginRight': '120px'}}>{originalTimeText}</span>
        {originalTime}
      </div>
      <div className="date-time-string">
        <span style={{'marginRight': '15px'}}>{updatingTimeText}</span>
        {updatedTime}
      </div>
    </>
  );
}


