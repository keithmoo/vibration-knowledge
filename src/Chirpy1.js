import React from 'react'
import { Link } from 'react-router-dom'



export default class extends React.Component {

 

  
render(){
  
  const execute = `}EXECUTE(`
  const die = `THIS.DIE();`
  const openParen = `(`
  const closeParen = `)`
  const openCurl = `{`
  const array1= [{name: 'karo', execute: 'mr_scars' },{name: 'mavise', execute: 'cursor'},
  {name: 'mara', execute: 'firebrand'}, {name: 'losethose', execute: 'persolus'}, 
  {name: 'damsel', execute: 'observer'}, {name: 'henka_visæ', execute: 'deadhead'}]
  const array2 = [{name1: 'ana', name2: 'lucia', execute: 'swain'}]
  
  
  
return(
  <>
  
  <div>
    <ul id='coded'>
           {array1.map((array1, index) => 
           <li key={index}> 
           <div><p>import {array1.name};</p>
           <p>~ATH{openParen}{array1.name}{closeParen}{openCurl}</p>
  </div>
  <div className='tabbed'>
    <p>{execute}<Link className='linkBase' to={array1.execute}>{array1.execute}</Link>{closeParen}</p>
  </div>
  <div>
    <p>{die}</p>
  </div> </li>)} 
           </ul>
           <ul id='coded'>
           {array2.map((array2, index) => <li key={index}> 
           <div><p>bifurcate THIS[<span className='red'>THIS</span>, <span className='blue'>THIS</span>];</p><p>import <span className='red'>{array2.name1};</span></p><p>import <span className='blue'>{array2.name2};</span></p>
           <p id='red'>~ATH{openParen}{array2.name1}{closeParen}{openCurl}</p>
  </div>
  <div className='tabbed' id='blue'>
    <p id='red'>~ATH{openParen}{array2.name2}{closeParen}{openCurl}</p>
  </div>
  <div>
    <p id='red'>{execute}~ATH{openParen}<div className='blue'>THIS</div>{closeParen}{openCurl}{execute}<Link className='link1' to='./swain'>{array2.execute}</Link>{closeParen}{closeParen};</p>
    <div className='tabbed'>
    <p id='blue'>{execute}~ATH{openParen}<div className='red'>THIS</div>{closeParen}{openCurl}{execute}<Link className='link2' to='./swain'>{array2.execute}</Link>{closeParen}{closeParen};</p>
  </div></div>
  <div>
    <p>[<div className='red'>THIS</div>, <div className='blue'>THIS</div>].DIE{openParen}{closeParen};</p>
  </div> </li>)} 
           </ul>
           
           
       </div>
  </>
)

}
}