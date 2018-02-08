import React from "react";
import States from "react";

class App extends States {
 
  constructor(props) {
    super(props);
 
    this.setNewValue = this.setNewValue.bind(this);
  }
 
  setNewValue(newValue) {
    console.log('this is the State code:' + newValue);
  }
 
  render() {
    return (
      <p>
        Select a state: <SelectUSState id="myId" className="myClassName" onChange={this.setNewValue}/>
      </p>
    );
  }
}
 

export default States;





