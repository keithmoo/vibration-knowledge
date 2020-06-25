import React from 'react'
import scars1 from './MR_SCARS.png'
import scars2 from './MrScars.png'
import {Link} from 'react-router-dom'


export default class extends React.Component {

  render(){
    return(<>
      <div>
        
        <ul>
        <li><img src={scars1} alt='THE MAN WHO KILLS MAVISE'/></li>
        <li><img src={scars2} alt='THE MAN WHO KILLS MAVISE'/></li></ul>
      </div>
      <Link to='/'>Home</Link></>
    )
  }
 
}