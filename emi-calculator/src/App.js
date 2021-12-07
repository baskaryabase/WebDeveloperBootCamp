import { useState } from 'react';
import './App.css';

function App() {
  let [state, setstate] = useState({ principle: "", interest: "", months: "" });
  const setState=(newState)=>{
    setstate(state => ({ ...state, ...newState }))
  }
  const onChange = (e)=>{
    setState({[e.target.name]:e.target.value})
  }
  const fields = [
    { name: "pinciple", type: "number" },
    { name: "interest", type: "number" },
    { name: "months", type: "number" }
  ]
  return (
    <div className="App">
      {fields.map(({ name,type }) => <input type={type} value={state[name]} onChange={onChange} name={name} placeholder={name} />)}
      <button >
        calculate
      </button>
    </div>
  );
}

export default App;
