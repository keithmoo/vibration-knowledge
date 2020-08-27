import React from 'react'
import {Link} from 'react-router-dom'
import englishEye from './englishEye.gif'



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
    return <div className='buttonz'><button type='submit' id='pageTurn' onClick={this.turnPage}>Turn The Page</button></div>
  }
  else if (page > 1 && page < 5) {
    return <div className='buttonz'>
      <button type='submit' id='previousPage' onClick={this.previous}>Previous Page</button>
      <button type='submit' id='pageTurn' onClick={this.turnPage}>Turn The Page</button>
    </div>
  }
  else {
    return <div className='buttonz'><button type='submit' id='previousPage' onClick={this.previous}>Previous Page</button></div>
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
    
    return <>
    <h3 className='gh3'>
      Ihsen, Infernal Shadecrafter
      </h3>
      <div className='galleryPage'>
      
      <ul className='galleryLi'>
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
      
      <div className='ihsanPic'></div>
      </div></>
  }
  if (page === 2) {
    return <>
    <h3 className='gh3'>Mavise Cerese Escher</h3>
    <div className='galleryPage'>
      
      
      <ul className='galleryLi'>
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
      
      <div className='mcPic'></div>
      <img src={englishEye} className='eye' id='1' alt='imageDidntLoadOops' />
      </div></>
  }
  if (page === 3) {
    return <>
    <h3 className='gh3'>
      Scorn, The Minion
      </h3>
    <div className='galleryPage'>
      
      <ul className='galleryLi'>
        <li>
        A high level Cleric of Asmodeus
        </li>
        <li>
          Greatest strength is his ability to never fully commit to a fight
        </li>
        <li>
          Uses a special form of astral projection to appear in places to 
          fight and act.  If this form is slain or dismissed, it causes 
          him no real trouble.  The projection is totally physical.  This 
          effect is not dispellable and can even function in an anti-magic 
          shell.
        </li>
        <li>
          He isn't as strong in his Astral Projection state, making him incapable 
          of the highest tier of magic he is normally capable of.  It also prevents 
          him from utilizing all of his magical equipment to it's full capacity.
        </li>
        <li>
          He has two companions, Strife and Spite, both look identical to him and 
          are identical in capabilities.  They all exclusively go by the moniker of 
          Minion.  Their appearance and astral projection is a result of 
          infernal rituals and pacts.
        </li>
        
      </ul>
      <div className='minion-pic'></div>
      </div>
      </>
  }
  if (page === 4) {
    return <>
    <h3 className='gh3'>
      The Jewel Beast
      </h3>
    <div className='galleryPage'>
      
      <ul className='galleryLi'>
        <li>
        A divine beast, created long ago.
        </li>
        <li>
        The Philosopher long ago in a bungled white alchemical wedding attempted to 
transmute Tar into True Nectar.  He succeeded.  But he did not or could not 
protect his divine creation's splendor and purity from blemish.  As is the fate 
of all things, entropy reigns and the mired True Nectar eventually was laid to 
rest and buried.  It seeped down into the heart of the island, it's tainted 
grace further irradiated by it's closer presence to Os's eminence.  It grew 
into the divine beast you see today, forever bound to the Philosophers sorrow, and 
as such bound to the diamond fruits of his labor.  
        </li>
        <li>
        It is immortal and can only be put to rest, never slain, much like the Tarrasque.  
It has no intelligence, yet it is a divine genius in a fight.  Defeating such 
a monster carries great reward, as is typical of such dangerous foes.  It stirs 
now, yet will not fully awaken for some time.  The drowsier it is, the less it 
is able to conduct itself in combat, not fighting back at all for minutes on end 
before finally being able to muster a (relative to its potential) meager defense.
        </li>
        <li>
        It is completely immune to magic of all sorts, not just spells.  While theoretically 
this immunity can be pierced, it would require tremendous work to do so for only 
a small amount of time.  It is resistant to Psionics and requires heavily enchanted 
weapons to harm it, assuming you can land a hit, considering its potent natural armour.
        </li>
        <li>
        In combat, it casts cosmic spells as well as uses its massive form to flatten its 
enemies simultaneously.  Starlight grants it some protection and builds up a halo 
of lights.  Starbeam channels the power of its halo, scaling with how much starlight 
it has accumulated.  Cosmic Tide expends the halo entirely and washes cosmic power 
against all its enemies that stand against it, dealing heavy damage and delay. 
        </li>
        <li>
        When it awakens fully, it can use its true power and unleash 
the Jewel Blaster, an epic tier ability that threatens entire cities.
        </li>
      </ul>
      <div className='jewel-beast-pic'></div>
      </div>
      </>
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
    
    {this.display()}
    
    {this.button()}
    <Link className='homeLink' to='/'>Home</Link>
    
    
    </>
  )
}
}
 

  
