import React from 'react'
import Firebrand1 from './Firebrand1.png'
import Firebrand2 from './Firebrand2.png'
import Firebrand3 from './Firebrand3.png'
import {Link} from 'react-router-dom'


export default class extends React.Component {

  render(){
    return(<>
      <ul>
        <li><img src={Firebrand1} alt='required'/></li>
        <li><img src={Firebrand2} alt='required'/></li>
        <li><img src={Firebrand3} alt='required'/></li></ul>
        <p><Link to='/'>Home</Link></p></>
    )
  }
 
}