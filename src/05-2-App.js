import React from "react";

class App extends React.Component{
  state={
    count:0
  };
  
  add = () => {
    this.setState(
      yuna => ({ count: yuna.count+1 })
    )
  };

  min = () => {
    this.setState(
      yuna => ({ count: yuna.count-1 })
    )
  };

  render(){
    return(
      <div>
        <h1>this count is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.min}>Minus</button>
      </div>
    )
  }
  
}

export default App;//외부에서 사용 가능하게 해줌