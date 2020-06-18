import React from 'react'
import Chirpy1 from './Chirpy1'
import Chirpy2 from './Chirpy2'
import Chirpy3 from './Chirpy3'



export default class extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        chirpy1: false,
        chirpy2: false,
        chirpy3: false
      }
    }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit Ran')
    const pword = e.target.password.value
    console.log(pword)
    if(pword === 'placeholder1') {
      this.setState({chirpy1: true});
      console.log(this.state.chirpy1)
    }
      
    else if(pword === 'placeholder2') {
      this.setState({chirpy2: true});
    }
      
    else if (pword === 'placeholder3') {
      this.setState({chirpy3: true});
    }
  }
   
  
  

    checkChirpy1 = () => {
      console.log('Chirpy1 ran')
      if (this.state.chirpy1 === true){
        console.log('Chirpy1 IF ran')
        return <div><Chirpy1 /></div>
      }
    }

    checkChirpy2 = () => {
      if (this.state.chirpy2 === true){
        return <div><Chirpy2 /></div>
      }
    }

    checkChirpy3 = () => {
      if (this.state.chirpy3 === true){
        return <div><Chirpy3 /></div>
      }
    }


    
    render(){
  return (
    <>
    <form className='pWordForm' onSubmit={this.handleSubmit}>
      <fieldset>
        <legend>
          Can You See The Words?
        </legend>
        <label htmlFor='password'>
          Password:
        </label>
        <input type='text' name='password' id='password'>
        </input>
      </fieldset>
      <button type='submit'>Submit</button>
      </form>
      <div className='placeholder1'>
        {this.checkChirpy1()}{this.checkChirpy2()}{this.checkChirpy3()}
      </div>
      
    </>
  )
}
}