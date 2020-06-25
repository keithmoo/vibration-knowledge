import React from 'react'
import observer1 from './Observer.png'
import {Link} from 'react-router-dom'



export default class extends React.Component {

  render(){
    return(
      <>
      <ul>
        <li><img src={observer1} alt='required'/></li>
        </ul>
        <p>Watching You</p>
        <Link to='/'>Home</Link>
      </>
    )
  }
 
}