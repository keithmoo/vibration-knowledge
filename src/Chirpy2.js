import React from 'react'
import { Link } from 'react-router-dom'


export default class extends React.Component {

 

  
render(){
  console.log('module actually fired')
  
  const execute = `}EXECUTE(`
  const openParen = `(`
  const closeParen = `)`
  const openCurl = `{`
  const closeCurl = `}`
  
  
  
return(
 
  
  <div>
    <ul id='coded'>
     <li> 
     
       <p>bifurcate THIS[<div className='red'>THIS</div>, <div className='blue'>THIS</div>]</p>
       <p>import <div className='red'>karo;</div></p>
       <p>import <div className='blue'>mr_k;</div></p>
       <p id='red'>~ATH{openParen}karo{closeParen}{openCurl}</p>
       <p><div className='tabbed' id='blue'>~ATH{openParen}!mr_k{closeParen}{openCurl}</div></p>
      
       <div className='red'>
       <p>{execute}<div className='blue'>THIS</div>{closeParen}{openCurl}{closeCurl}{openCurl}
       <Link className='link1' to='/Robert/'>IWILLKILLAGAIN</Link>{closeParen}</p>
       <div className='tabbed' id='blue'>
         <p>{execute}<div className='red'>THIS</div>{closeParen}{openCurl}{closeCurl}{openCurl}
       <Link className='link2' to='/Robert/'>IWILLKILLAGAIN</Link>{closeParen}</p>

       </div>
      </div>
      <div>
      <p>[<div className='red'>THIS</div>, <div className='blue'>THIS</div>].DIE()</p>
  </div> </li> 
           </ul><div className='spacing'></div><ul>
           <li className='homeList'><Link id='lo' className='linkBase' to='/Losethose/'>Losethose</Link></li>
           </ul>

           
       </div>
  
)
}
}