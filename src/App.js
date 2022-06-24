import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [count,setCount] = useState(0)
  const increment = () => {
    setCount(++count)
  }
  const decrement = () => {
    setCount(--count)
  }
  return (
    <div className="App">
      <button onClick={()=>increment()}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <span>
        {count}
      </span>
    </div>
  );
}

export default App;
