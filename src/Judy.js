import React from 'react'
import Jowday from './JUDY.png'
import {Link} from 'react-router-dom'



export default class extends React.Component {

 

  
  render(){
    return(
      <>
      <img src={Jowday} alt='The Whore Of Babylon' />
      <p>Well now. I'm not gonna talk about Jowday; 
        in fact, we're not gonna talk about Jowday at all, we're gonna keep her out of it!</p>
        <Link to='/'>Home</Link>
      </>
    )
  }
}