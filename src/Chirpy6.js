import React from 'react'
import Cover from './ATH.png'
import {Link} from 'react-router-dom'
import header from './ATHHeader.png'




export default class extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        page: 0
      }
    }


header = () => {
  let page = this.state.page
  if (page > 0) {
    return <img src={header} alt='header' />
  }
}

button = () => {
  let page = this.state.page
  if (page === 0) {
    return <div><button type='submit' id='pageTurn' onClick={this.turnPage}>Turn The Page</button></div>
  }
  else if (page > 0 && page < 5) {
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
  let slashes = `//`
  let page = this.state.page
  if (page === 0) {
return <div><img src={Cover} alt='handbook' /></div>
  }
  if (page === 1) {
    
    return <div className='athPage'>
      <p>
      Whenever you spend any Lines Of Code, you may precede it's resolution with: </p><p>
import []:</p>
<p>This Empowers the casting of the next Monster Summoning spell cast before the end of the 
next round.  You may specify an import, turning the Monster Summoning spell into an 
Ensnarement, or you may leave it anonymous, causing the Monster Summoning spell to summon 
an additional die worth of summons.
You may stack this by using multiple Lines Of Code abilities to trigger it; further stacks 
allow the ensnarement of multiple creatures with a single casting or extra dice on a monster 
summoning spell.  </p><p>
Note: Ensnarement of a specific extraplanar creature requires its name.  Ensnared creatures can 
attack the caster unless the creature is in a Circle.</p><p>
{slashes} You can use your "Circle" abilities on the spyglass to make a perfect circle on the creature.
      </p>
      </div>
  }
  if (page === 2) {
    return <div className='athPage'>
      <p>
      Whenever you spend any Lines of Code, you may also select an ally in sight to be affected with:</p><p>
[THIS]: </p><p>
This lasts until the end of the next round or until expended.  When you or an ally in sight would 
affect his or her self with something that can only target his or her self, he or she may have it 
target the ally affected by [THIS] instead.  This expends this ability.  
      </p>
      </div>
  }
  if (page === 3) {
    return <div className='athPage'>
      <p>
      A11y Lang='English' :</p><p>
All of th abilities and effects of yours and your allies within 50 yards are considered to be written in standard English characters.</p><p>
{slashes} who knows how this <Link to='./English'>helps</Link>
      </p>
      </div>
  }
  if (page === 4) {
    return <div className='athPage'>
      <p>
      Cascade Style Sheet :</p><p>
Whenever an ally casts a spell from a scroll ripped from this book, it Cascades.</p><p>
{slashes} Spells that Cascade allow an additional spell of a lower level to be cast as a free action.  Even if the original spell is countered or negated, you still get the Cascade trigger.
      </p>
      </div>
  }
  if (page === 5) {
    return <div className='athPage'>
      <p>
      Whenever you spend any Lines Of Code, you may also conclude it with:</p><p>
this.die(): Reroll a single die roll made by you or an ally</p><p>

{slashes} This is useless if you or an ally are not in the process of rolling a die.  An example of this being useful 
 is making an attack roll, missing, and in response activating any ability that costs 
 lines of code.  Once that resolves, then you get your re-roll on your initial attack roll.</p>
      
      </div>
  }
}

  
render(){

  return(
    <>
    {this.header()}
    {this.display()}
    {this.button()}
    
    
    </>
  )
}
}