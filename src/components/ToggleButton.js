// Component Code Goes Here
import React from 'react';

class ToggleButton extends React.Component{
  constructor(){
    super();
    this.state ={
      isEnabled: false
    }
  }
  render(){
    return(
      <button className='Toggle-button'>
      I am toggled {this.state.isEnabled? 'on' : 'off'}</button>
      )
  }
}
