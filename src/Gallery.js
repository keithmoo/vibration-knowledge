import React from 'react'
import {Link} from 'react-router-dom'



export default class extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        page: 1
      }
    }




// button = () => {
//   let page = this.state.page
//   if (page === 1) {
//     return <div><button type='submit' id='pageTurn' onClick={this.turnPage}>Turn The Page</button></div>
//   }
//   else if (page > 1 && page < 5) {
//     return <div>
//       <button type='submit' id='previousPage' onClick={this.previous}>Previous Page</button>
//       <button type='submit' id='pageTurn' onClick={this.turnPage}>Turn The Page</button>
//     </div>
//   }
//   else {
//     return <div><button type='submit' id='previousPage' onClick={this.previous}>Previous Page</button></div>
//   }
// }    

// previous = () => {
//   this.setState({page: this.state.page -1})
// }    
 
// turnPage = (e) => {
//   e.preventDefault();
//   this.setState({page: this.state.page +1})
// }

// display = () => {
  
//   let page = this.state.page
  
//   if (page === 1) {
    
//     return <div className='galleryPage'>
//       <p>
//       Ihsen:
      
//       </p>
//       </div>
//   }
//   if (page === 2) {
//     return <div className='galleryPage'>
//       <p>
//       Chirp2
//       </p>
//       </div>
//   }
//   if (page === 3) {
//     return <div className='galleryPage'>
//       <p>
//       Chirp3
//       </p>
//       </div>
//   }
//   if (page === 4) {
//     return <div className='galleryPage'>
//       <p>
//       Chirp4
//       </p>
//       </div>
//   }
//   if (page === 5) {
//     return <div className='galleryPage'>
//       <p>
//       Chirp5
//       </p>
//       </div>
//   }
// }

displayTemp = () => {
  return <><p>Yeah, this is only partially done...code is all commented out for now; coming soon!</p></>
}

  
render(){

  return(
    <>
    
    {this.displayTemp()}
    {/* {this.button()} */}
    <Link to='/'>Home</Link>
    
    
    </>
  )
}
}
 

  
