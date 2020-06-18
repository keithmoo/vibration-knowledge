import React from 'react'
import scars1 from './MR_SCARS.png'
import scars2 from './MrScars.png'


export default class extends React.Component {

  render(){
    return(
      <div>
        
        <ul>
        <li><img src={scars1} alt='required'/></li>
        <li><img src={scars2} alt='required'/></li></ul>
      </div>
    )
  }
 
}