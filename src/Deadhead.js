import React from 'react'
import deadhead1 from './deadhead.png'
import {Link} from 'react-router-dom'



export default class extends React.Component {

  render(){
    return(
      <>
      <ul>
        <li><img src={deadhead1} alt='required'/></li>
      </ul>
      <p>When THE JOURNAL is used, he brings about the dark times</p>
      <Link to='/'>Home</Link>
      </>
    )
  }
 
}