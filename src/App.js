import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const [hasError, setHasError] = useState(false)
  
  return (
    <div className="App" data-test="component-app">

      <h1 data-test="counter-display">
        The counter is currently&nbsp;
      </h1>
      <div style={{fontSize: "16px"}} data-test="count">{count}</div>
      <div style={{fontSize: "12px", color: "red"}} data-test="warning">
        {
          hasError && <span>Can't decrement further</span>
        }
      </div>

      <button 
        data-test="decrement-button"
        onClick={()=>{
          if(count === 0){
              setHasError(true)
          }else{
            setCount(count-1)
          }
        }}
      >
          Decrement counter
      </button>

      <button 
        data-test="increment-button"
        onClick={()=>{

          if(hasError){
            setHasError(false)
            setCount(count+1)
          }else{
            setCount(count+1)
          }
          
        }}
      >
          Increment counter
      </button>

      
    </div>
  );
}

export default App;
