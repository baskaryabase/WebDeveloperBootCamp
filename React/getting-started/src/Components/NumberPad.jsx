import { Component } from "react";

export default class NumberPad extends Component {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    operators = ["+", "-", "*", "/"];
    numberAndOperators = [...this.numbers, ...this.operators]
    numberElements = this.numberAndOperators.map((num) => {
        return <div key={num} className="col-4 d-inline-block">
            <button onClick={() => this.props.onChange(this.props.state + num)} type="button" className="btn btn-default">{num}</button>
        </div>
      })
    render(){
        return (
            <div className="row numberpad">
            {this.numberElements}
            <div className="col-4 d-inline-block">
                    <button onClick={this.props.calculate} type="button" className="btn btn-default">=</button>
            </div>
            <div className="col-12 d-inline-block">
                    <button onClick={(e) => this.props.onChange("")} type="button" className="btn btn-default col-12">CLEAR</button>
            </div>
          </div>
        )
    }
}