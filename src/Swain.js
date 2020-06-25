import React from 'react'
import Swain1 from './Swain.png'
import {Link} from 'react-router-dom'



export default class extends React.Component {

  render(){
    return(
      <>
      <ul>
        <li><img src={Swain1} alt='required'/></li>
      </ul>
      <p>The first to seek, the first to find</p>
      <p>But never gifted, never to wield</p>
      <p>To stalk The Hermit, to bring his Journal to light</p>
      <p>And bring about the dark times</p>
      <Link to='/'>Home</Link>
      </>
    )
  }
 
}