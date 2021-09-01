import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ["+", "-", "*", "/"]
function App() {
  const [state, setState] = useState("");
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="display">
          {state}
        </div>
        
       <div className="row">
       {numbers.map((num) => {
          return <div className="col-4 d-inline-block">
            <button onClick={(e) => setState(state + num)} type="button" className="btn btn-default">{num}</button>
          </div>
        })}
        {operators.map((operator)=>{
          return <div className="col-4 d-inline-block">
            <button onClick={(e) => setState(`${state}${operator}`)} type="button" className="btn btn-default">{operator}</button>
        </div>
        })}
        <div className="col-4 d-inline-block">
            <button onClick={e=>{
              let total = eval(state);
              setState(`${total}`);
            }} type="button" className="btn btn-default">=</button>
        </div>
        <div className="col-12 d-inline-block">
            <button onClick={(e) => setState("")} type="button" className="btn btn-default col-12">CLEAR</button>
        </div>
       </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Baskar & Guru
        </a>
      </header>
    </div>
  );
}

export default App;
