import React from 'react'
import Chirpy1 from './Chirpy1'
import Chirpy2 from './Chirpy2'
import Chirpy3 from './Chirpy3'
import Chirpy4 from './Chirpy4'
import Chirpy5 from './Chirpy5'
import Chirpy6 from './Chirpy6'
import Chirpy7 from './Chirpy7'



export default class extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        chirpy1: false,
        chirpy2: false,
        chirpy3: false,
        chirpy4: false,
        chirpy5: false,
        chirpy6: false,
        chirpy7: false
        
      }
    }

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      chirpy1: false,
      chirpy2: false,
      chirpy3: false,
      chirpy4: false,
      chirpy5: false,
      chirpy6: false,
      chirpy7: false
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({chirpy5: false, chirpy3: false});
    const pword = e.target.password.value.toLowerCase()
    
    if(pword === 'goodluck' || pword === 'good luck') {
      this.setState({chirpy1: true});
    }
      
    else if(pword === 'letsrock' || pword === 'lets rock' || pword === `let's rock` || pword === `let'srock`) {
      this.setState({chirpy2: true});
    }
      
    else if (pword === '???') {
      this.setState({chirpy3: true});
    }

    else if (pword === 'mmanual' || pword === 'monster manual' || pword === 'monstrous manual') {
      this.setState({chirpy4: true});
    }

    else if (pword === 'password' || pword === '' || pword === 'password1') {
      this.setState({chirpy5: true});
    }

    else if (pword === '~ath' || pword === 'tildeath' || pword === 'untildeath' || pword === 'tilldeath' || pword === 'code') {
      this.setState({chirpy6: true});
    }

    else if (pword === 'stations' || pword === 'station' || pword === 'dharma') {
      this.setState({chirpy7: true});
    }
  }
   
  
  

    checkChirpy1 = () => {
      if (this.state.chirpy1 === true){
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

    checkChirpy4 = () => {
      if (this.state.chirpy4 === true){
        return <div><Chirpy4 /></div>
      }
    }

    checkChirpy5 = () => {
      if (this.state.chirpy5 === true){   
        return <div><Chirpy5 /></div>
      }
    }

    checkChirpy6 = () => {
      if (this.state.chirpy6 === true){
        return <div><Chirpy6 /></div>
      }
    }

    checkChirpy7 = () => {
      if (this.state.chirpy7 === true) {
        return <div><Chirpy7 /></div>
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
      <button type='submit' id='btn'>Submit</button> 
      <button type='reset' id='btn2' onClick={this.handleReset}>Clear</button>
      </form>
      
      <div className='placeholder1'>
        {this.checkChirpy1()}{this.checkChirpy2()}{this.checkChirpy3()}
        {this.checkChirpy4()}{this.checkChirpy5()}{this.checkChirpy6()}
        {this.checkChirpy7()}
      </div>
      <div className='underForm'>
        <ul>
          <li className='homeList'>Gallery Of Evil: 'MManual'</li>
          <li className='homeList'>~ATH : Handbook For The Imminently Deceased: '~ATH'</li>
          <li className='homeList'>Island Ley Line Wells: 'stations'</li>
          <li className='homeList'>Hidden Knowledge? : ??? *hint*: you should probably clear the page with the button if you are experimenting with new passwords so that it's easier to see if anything changed.</li>
        </ul>
      </div>
    </>
  )
}
}