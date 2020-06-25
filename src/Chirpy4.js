import React from 'react'
import {Link} from 'react-router-dom'



export default class extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        currentPage: 0
      }
    }
 
display = () => {
  let page = this.state.currentPage
  if (page === 0) {
    return <Link to='./gallery'><div className='GalleryFront'></div></Link>

  }
}
  
render(){
  return(
    <>
    {this.display()}
    </>
  )
}
}