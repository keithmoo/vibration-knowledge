import React from 'react'
import Persolus1 from './persolus.png'
import {Link} from 'react-router-dom'



export default class extends React.Component {

  render(){
    return(
      <>
      <ul>
        <li><img src={Persolus1} alt='required'/></li>
        </ul>
        <p>The Hermit with the forbidden spellbook of forbidden knowledge</p>
        <p>He wrote his spellbook by hand, chiselled on a copper tablet that counted the days</p>
        <p>His spellbook is The Journal</p>
        <p>Yet The Journal is paper bound in leather</p>
        <Link to='/'>Home</Link>
      </>
    )
  }
 
}