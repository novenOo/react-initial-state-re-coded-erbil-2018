// Component Code Goes Here
import React from 'react';

class Address extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {fullAddress:`${props.streer}, ${props.city}`}
  }
  render(){
    return(
      <div className='address'>{this.state.fullAddress}</div>
      )
  }
}

export default Address;