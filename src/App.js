import React from 'react';
import './App.css';

const pattern =  new RegExp('^[0-9]+$');

class App extends React.Component {
  state = {
    number1: 0,number2:0,
  };

  number1Change = (event) => {
    const number1Value = event.target.value;
    if (pattern.test(number1Value)) {
      this.setState({
        number1: event.target.value,
      });
    }
  }
  
  number2Change = (event) => {
    const number2Value = event.target.value;
    if (pattern.test(number2Value)) {
      this.setState({
        number2: event.target.value,
      });
    }
  }
  
  render() {
    const {
      number1,
      number2,
    } = this.state;

  return (
    <div className="App">
      <div>
      <label>Enter Number 1</label>
      <input type="text" name="numberOne" value={number1} onChange={this.number1Change} />
      </div>
      <div>
      <label>Enter Number 2</label>
      <input type="text" name="numberTwo" value={number2} onChange={this.number2Change} />
      </div>
      <div>
        <label>{Number(number1)+Number(number2)}</label>
      </div>
    </div>
  );
}
}

export default App;
