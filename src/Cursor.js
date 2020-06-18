import React from 'react'
import cursor1 from './Cursor.png'
import cursor2 from './Cursor2.png'


export default class extends React.Component {

  render(){
    return(
      <ul>
        <li><img src={cursor1} alt='required'/></li>
        <li><img src={cursor2} alt='required'/></li></ul>
    )
  }
 
}