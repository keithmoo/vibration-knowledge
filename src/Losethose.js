import React from 'react'
import Losethose from './Losethose.png'
import THE_ARM from './THE_ARM2.png'
import THE_RING from './THE_RING2.png'
import { Link } from 'react-router-dom'


export default class extends React.Component {

 

  
render(){
  return(
    <>
    <div className='line'><img src={Losethose} alt='Losethose Uldumon' /></div>
    <img src={THE_RING} alt='THE_RING' />
    <div className='arm'><img src={THE_ARM} alt='THE_ARM' /></div>
    
    <div>
      <p>Losethose and ROBERT, both touched by <Link to='/Jowday/'>the devilish one</Link>.  Eager for fun // He smiles // Everybody run</p>
      <p>But then he saw the face of god and he was changed</p>
      <p>The arm that bore his FIRE tattoo bound him to the devilish one;</p>
      <p>He cut the whole arm off</p>
      <p>THE ARM yet lives, friend to ROBERT, until ROBERT revelled in betrayal</p>
      <p>THE ARM yet lives, friend to Losethose, and bears THE RING</p>
      <p>These old men, old spirits, feed on pain</p>
      <p>These old men, old spirits, feed on sorrow</p>
      <p>Caviar for ROBERT</p>
      <p>Obligate rations for Losethose</p>
      <p>Losethose weds ROBERT's victims // With this RING, your Garmonbozia belongs to me</p>
      <p>From the darkness of future's past // The magician longs to see</p>
      <p>One calls out between two worlds //</p>
      <div className='fire'><p>FIRE WALK WITH ME</p></div>
    </div>
    <Link to='/'>Home</Link>
    </>
  )
}
}