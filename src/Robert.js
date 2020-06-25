import React from 'react'
import Robert1 from './Robert.png'
import {Link} from 'react-router-dom'



export default class extends React.Component {

  render(){
    return(
      <>
      <ul>
        <li><img src={Robert1} alt='I WILL KILL AGAIN'/></li>
        </ul>
        <p>His name is ROBERT // Eager for fun // He smiles // Everybody run</p>
        <p>Visable to the blessed and the damned; Robert tapps his victims to 
          devour their pain and sorrow
        </p>
        <p>He comes to you in your sleep</p>
        <p>He lives in your soul</p>
        <p>He is a thief, yet he can't keep what he steals</p>
        <p>To take THE RING is the greatest protection</p>
        <p>To take THE RING ensures your death</p>
        <p>An old man, an old spirit, he seeks to live again</p>
        <p>An old man, an old spirit, he seeks to kill again</p>
        <p>He drags you in as he leaves in your skin</p>
        <Link to='/'>Home</Link>
      </>
    )
  }
 
}