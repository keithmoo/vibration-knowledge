import React from 'react'

export default class extends React.Component {

  render(){
   const slashes = `//`
   const closeee = `(`
  return(
<>
<ul>
  <li className='homeList8'>
  6/week: Divination, as the spell with no components.  The divination 
can only be in regard to The Island
  </li>
  <li className='homeList8'>
  3/month: Exact same ability as above, but with a different cooldown.
  </li>
  <li className='homeList8'>
  5/year: Exact same ability as above, but with a different cooldown.
  </li>
  <li className='homeList8'>
  3/day: Rip out a page.  The book will be fine.
The page degrades after 1 week.
  </li>
  <li className='homeList8'>
  Classified: Written in Lorem Ipsum: Only those chosen by you can read this or 
any ripped pages.
  </li>
  <li className='homeList8'>
  Book of Infinite Spells:
Functions as the magic item on page 942.
It has 23 pages of this to start with.  It regains a page once per week. (It will never vanish, nor 
will it go above a max of 23 pages).<div className='rulesText'>
{slashes} You have the 10% page turning chance when casting, because of your Thief class.
 If you rip out a page, someone other than you may use it as a scroll, but it counts as the 
 page turning.  Others may not learn spells or cast spells directly from this book.
 Turning a page on purpose is normally an action, but can be done instantly by The Survival Guide.</div>
  </li>
  
</ul>
<p>[Yeah, this page looks pretty ass; didn't have time to really style it at all :{closeee} ]</p>
</>
  )
  }
}