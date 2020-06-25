import React from 'react'
import {Link} from 'react-router-dom'


export default class extends React.Component {

 

  
render(){
  return(
    <>
    <p>MC has an ability:</p>
    <p>English: Prevents opponents from benefitting from abilities with Non-Standard Characters in them.</p>
    <p>For example, </p>
    <div className='tabbed'><p>霊丸 Spirit Gun</p><p>
You may swap out punch attacks for Spirit Gun attacks.  It has a range of 100 yards and costs 3 ki.</p><p>
You're Holding Too Much Back!: Spend additional Ki as you wish.</p><p>
Damage: (Punch Damage + nd10+wn damage (where n is twice the amount of ki spent and w is your Wisdom M Defense Adj).  
Deals Force Damage.  If you spent additional ki, this damage cannot be prevented.  
If you spent all of your ki, this attack cannot be dodged or negated through any means.</p><p>
Focus: Whenever you could make an attack, you can focus your Spirit Gun instead.  For every 2 focuses, add d10+w additional damage.
</p></div>
<p>This ability will not work against her because of the nonstandard characters.</p>
<p>Another example would be some ability like:</p><p>
  Example Ability 1: Prevents the next λ damage that would be dealt to you where λ is your Wis Score plus your 
  stacks of Radiation.
</p>
<p>
  Or even: 
</p>
<p>
⛎/day: Create a Portal.
</p>
<Link to='/'>Home</Link>
    </>
  )
}
}