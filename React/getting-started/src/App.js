import logo from './logo.svg';
import './App.css';
import { useState, Component } from 'react';
import Display from "./Components/Display";
import NumberPad from './Components/NumberPad.jsx';
import Footer from './Components/Footer.jsx';
class App extends Component {
  constructor() {
    super()
    this.state = { state: "" };
  }

  handleChange = (value) => {
    this.setState({ state: value })
  }
  calculate = () => {
    try {
      let total = eval(this.state.state);
      this.setState({ state: `${total}` });
    }catch(err){
      window.alert("Please enter a valid expression")
      console.log(err)
    }
  }
  render() {
    const { state } = this.state;
   
    return (
      <div className="App">
        <header className="App-header">
          <Display state={this.state.state} />
          <NumberPad state={this.state.state} onChange={this.handleChange} calculate={this.calculate} />
          <Footer />
        </header>
      </div>
    )
  }
}

export default App;


// function App() {
//   const [state, setState] = useState("");

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="display">
//           {state}
//         </div>

//        <div className="row">
//        {numbers.map((num) => {
//           return <div className="col-4 d-inline-block">
//             <button onClick={(e) => setState(state + num)} type="button" className="btn btn-default">{num}</button>
//           </div>
//         })}
//         {operators.map((operator)=>{
//           return <div className="col-4 d-inline-block">
//             <button onClick={(e) => setState(`${state}${operator}`)} type="button" className="btn btn-default">{operator}</button>
//         </div>
//         })}
//         <div className="col-4 d-inline-block">
//             <button onClick={e=>{
//               let total = eval(state);
//               setState(`${total}`);
//             }} type="button" className="btn btn-default">=</button>
//         </div>
//         <div className="col-12 d-inline-block">
//             <button onClick={(e) => setState("")} type="button" className="btn btn-default col-12">CLEAR</button>
//         </div>
//        </div>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Baskar & Guru
//         </a>
//       </header>
//     </div>
//   );
// }