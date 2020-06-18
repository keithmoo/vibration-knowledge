import React from 'react'
import { Link } from 'react-router-dom'


export default class extends React.Component {

 

  
render(){
  console.log('module actually fired')
  
  const execute = `}EXECUTE(`
  const die = `THIS.DIE();`
  const openParen = `(`
  const closeParen = `)`
  const openCurl = `{`
  const array1= [{name: 'karo', execute: 'mr_scars' },{name: 'mavise', execute: 'cursor'},
  {name: 'mara', execute: 'firebrand'}, {name: 'losethose', execute: 'persolus'}, 
  {name: 'damsel', execute: 'observer'}, {name: 'henka_visæ', execute: 'deadhead'}]
  
  
return(
  <>
  {/* <div>
  <p>import karo;</p><p>~ATH{karo}</p>
  </div>
  <div className='tabbed'>
    <p>{firstExecute}</p>
  </div>
  <div>
    <p>{die}</p>
  </div>
  <div>
    {this.mapper()}
  </div> */}
  <div>
    <ul>
           {array1.map((array1, index) => <li key={index}> 
           <div><p>import {array1.name};</p>
           <p>~ATH{openParen}{array1.name}{closeParen}{openCurl}</p>
  </div>
  <div className='tabbed'>
    <p>{execute}{array1.execute}{closeParen}</p>
  </div>
  <div>
    <p>{die}</p>
  </div> </li>)} 
           </ul><ul>
           <li><Link to='/Mr_scars/'>MR_SCARS</Link></li>
           <li><Link to='/Cursor/'>Cursor</Link></li>
           <li><Link to='/Firebrand/'>Firebrand</Link></li>
           <li><Link to='/Persolus/'>Persolus</Link></li>
           <li><Link to='/Observer/'>Observer</Link></li>
           <li><Link to='/Swain/'>Swain</Link></li>
           <li><Link to='/Deadhead/'>Deadhead</Link></li></ul>
       </div>
  </>
)

}
}