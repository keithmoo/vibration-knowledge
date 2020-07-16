import React from 'react'
import {Link} from 'react-router-dom'



export default class extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        page: 1
      }
    }




button = () => {
  let page = this.state.page
  if (page === 1) {
    return <div><button type='submit' id='pageTurn' onClick={this.turnPage}>Turn The Page</button></div>
  }
  else if (page > 1 && page < 5) {
    return <div>
      <button type='submit' id='previousPage' onClick={this.previous}>Previous Page</button>
      <button type='submit' id='pageTurn' onClick={this.turnPage}>Turn The Page</button>
    </div>
  }
  else {
    return <div><button type='submit' id='previousPage' onClick={this.previous}>Previous Page</button></div>
  }
}    

previous = () => {
  this.setState({page: this.state.page -1})
}    
 
turnPage = (e) => {
  e.preventDefault();
  this.setState({page: this.state.page +1})
}

display = () => {
  
  let page = this.state.page
  
  if (page === 1) {
    
    return <div className='galleryPage'>
      <h3>
      Ihsen, Infernal Shadecrafter
      
      </h3>
      <p><ul>
        <li>Gish cleric/mage that specialises in minions and curses.</li>
        <li>Very bursty, but vastly depleted after he pulls the trigger</li>
        <li>Spells cannot be countered</li>
        <li>Against weak opponents, he doesn't burst off and instead curses them with 
          a custom spell that turns them into a shade over time; the curse is very tough to remove
        </li>
        <li>Prepares for fights; scrys and divines and makes plans to fight potential opponents</li>
        <li>Multi layered Freedom of Movement and Fire Immunity</li>
        <li>Has multiple trump cards</li>
        <li>Attuned to The Box of Na'arma'woreth, a potent fire themed defensive item that is difficult to 
          attune to; especially if you don't have hellish support
        </li>
        <li>Better prepper than fighter; overly nervous about when to pop off and hates the risks of combat; 
          avoids fights with anyone even close to powerful if at all possible
        </li>
        <li>Has dozens of potent minions ready to be sent to battle; hates sending them to battle because 
          he sees losing any of them as a huge loss and waste of efficiency
        </li>
        </ul>
      </p>
      <div className='ihsanPic'></div>
      </div>
  }
  if (page === 2) {
    return <div className='galleryPage'>
      <h3>Mavise Cerese Escher</h3>
      <p>
      <ul>
        <li>Invincible Titan Of Roughhouse Brutality</li>
        <li>Weak to deudly firearms</li>
        <li>Weak to weapons made of remains from her ascents towards immortality</li>
        <li>Weak to Karo's Spirit Gun if channeled thorugh a deudly weapon; especially the one in Mara's briefcase</li>
        <li>Weak to Caledfwlch, a White Pact Blade that she made and lost when defeating Archie</li>
        <li>Her abilities are very hard to stop; don't bother contesting her Lordly abilities with anything short of 
          Force Of Will; you are better off "adjusting" her abilities instead
        </li>
        <li>Even if you kill her, you must defeat all of her layers of immortality or she will not go down; or at least 
          she will return to life; you should attempt to do this simultaniously for best results
        </li>
        <li>The House of Lords conspires against her</li>
      </ul>
      </p>
      <div className='mcPic'></div>
      <div className='eye' id='1'></div>
      <div className='eye' id='2'></div>
      </div>
  }
  if (page === 3) {
    return <div className='galleryPage'>
      <p>
      Chirp3
      </p>
      </div>
  }
  if (page === 4) {
    return <div className='galleryPage'>
      <p>
      Chirp4
      </p>
      </div>
  }
  if (page === 5) {
    return <div className='galleryPage'>
      <p>
      Chirp5
      </p>
      </div>
  }
}



  
render(){

  return(
    <>
    
    
    {this.button()}
    <Link to='/'>Home</Link>
    
    
    </>
  )
}
}
 

  
