import React from 'react'
import swan from './swan.png'
import flame from './flame.png'
import arrow from './arrow.png'
import lookingGlass from './lookingGlass.png'
import pearl from './pearl.png'
import orchid from './orchid.png'
import lampPost from './lampPost.png'
import losethOS from './LosethOS.png'
import templeOS from './templeOS.png'
import castle from './hubridShield.png'
import angraMainyu from './angraMainyuSymbol.png'
import atem from './atem.png'
import yevon from './Yevon.png'
import mikokoro from './mikokoro.png'



export default class extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        showSwan: true,
        showFlame: true,
        showArrow: true,
        showLooking: true,
        showPearl: true,
        showOrchid: true,
        showLamp: true,
        showLoseThOS: true,
        showTemple: true,
        showHubrid: true,
        showAngra: true,
        showAtem: true,
        showYevon: true,
        showMiko: true
        
      }
    }

      toggleSwan = () => {
        console.log('toggled')
        console.log(this.state.showSwan)
         this.setState(prevState => ({showSwan: !prevState.showSwan}))
      }
      toggleFlame = () => {
         this.setState(prevState => ({showFlame: !prevState.showFlame}))
      }
      toggleArrow = () => {
         console.log('clicked')
         this.setState(prevState => ({showArrow: !prevState.showArrow}))
         console.log(this.state.showArrow)
      }
      toggleLooking = () => {
         this.setState(prevState => ({showLooking: !prevState.showLooking}))
      }
      togglePearl = () => {
         this.setState(prevState => ({showPearl: !prevState.showPearl}))
      }
      toggleOrchid = () => {
         this.setState(prevState => ({showOrchid: !prevState.showOrchid}))
      }
      toggleLamp = () => {
         this.setState(prevState => ({showLamp: !prevState.showLamp}))
      }
      toggleLoseThOS = () => {
         this.setState(prevState => ({showLoseThOS: !prevState.showLoseThOS}))
      }
      toggleTemple = () => {
         this.setState(prevState => ({showTemple: !prevState.showTemple}))
      }
      toggleHubrid = () => {
         this.setState(prevState => ({showHubrid: !prevState.showHubrid}))
      }
      toggleAngra = () => {
         this.setState(prevState => ({showAngra: !prevState.showAngra}))
      }
      toggleAtem = () => {
         this.setState(prevState => ({showAtem: !prevState.showAtem}))
      }
      toggleYevon = () => {
        this.setState(prevState => ({showYevon: !prevState.showYevon}))
     }
      toggleMiko = () => {
         this.setState(prevState => ({showMiko: !prevState.showMiko}))
      }

     arrow = () => {
        if (this.state.showArrow === false){
        return <div className='RText'><div className='textPart'>
           <h3>The Philosopher, of The Arrow</h3>
           <p>This area of ley lines is unravelling.  Its power is waning.  It was once a school of battle.
        It was previously kept by the Eternal Tutors, Janine Griffiths-Baker 
        and Frederick S Pardee, two minor remnant lords from ages long past where they trained their 
        cohorts and followers on how to defend The Island.  They have since moved on with the last of 
        their challenges defeated and their lair looted fully.</p>
       <p>
          This place was originally kept by The Philosopher in ancient times.  He sold his 
          soul to the being that diposed Zargon, The Man Who Was.  Of course, he never had any 
          intention of parting with his soul, as the avatar of Ahriman would only be able to 
          collect The Philosopher's Soul when he was satisfied with his creations and knowledge; 
          when he no longer had a fiery ambition to learn and refine; which would never ever 
          transpire.</p><p>
          He hatched the stone from the egg spectacularly and conducted the Alchemical Wedding.  
          The Philosopher was of the most potent and immortal Lords of the Island. 
          With his life work complete, the Prima Materia in hand, his purchased soul was forfeit to 
          the trickster of the Pact Primeval.  The Philosopher had achieved enlightenment 
          and has never known such contentment as when he gazed upon this triumph of creation.</p>
          <p>As he was dragged to Hell, he traversed the layers one by one, and was disgraced by the 
             attentive gaze of each Archfiend along the way, as they both cheered in triumph at their 
             king's great victory, as well as salivated with envy for such a soul.  At the eighth 
             and penultimate layer, his desent paused.  Bound by the chains of Mephestopheles, he 
             was face to face with the Archfiend that dragged him here; he was to be delivered by 
             hand, not by magic, the final stretch.  
             </p><p>Firmly in the grasp of The Cold Lord, he was unchained and marched from Nargus 
                to Nessus in a procession of the damned.  Flanked by armies of hundreds of Ice Devils, 
                in the hands of an Archfiend, The Philosopher was freed; An Archangel's doing released 
                the man and he was spirited to heaven; the second Alchemical Wedding, The Marriage 
                of Sun and Moon, was complete.</p>
                <p>The Philosopher is currently neither dead nor alive; for he is beyond such concepts.  
                   He is both still here, on the island, as well as in an Upper Plane.  He has left behind 
                   his Prima Material as much as he has prevented anyone from aquiring it.  
                   He hopes that others follow in his footsteps and complete The Work as much as 
                   he obscures the process of doing so from them.
                </p>
               
          </div>
          
          <div className='arrowPic'></div>     
   </div>
     }
   }

   swan = () => {
      if (this.state.showSwan === false){
      return <div className='RText'><div className='textPart'>
         <h3>The Swan</h3>
         <p>
            This ley line convergance is oddly stable for one 
         that is so active.  It is claimed by the champion of Tema and is to be a ritual wildfire site.
         </p>
         
         <p>
           A Priest that has access to Summoning as a major sphere of influence or a specialist Conjurer can call 
           forth the power of the remnant lord of this ley line concentration.  They must be capable of performing 
           The Rites Of Sending and call out to them; "PTERYA"
         </p>
         </div>
        
        <div className='swanPic'></div>     
 </div>
   }
 }

 flame = () => {
   if (this.state.showFlame === false){
   return <div className='RText'><div className='textPart'>
      <h3>The Flame</h3>
      <p>
      The Tower is built on the stable ley crossing, but 
         the tower isn't itself of great importance.  The Flame that it guards grants communion to those far away.  
         Kept by FireSprite before his abduction, it now is in the sole ownership of the Vampire Enclave.  
      </p>
      <p>
         A Priest that has access to Summoning as a major sphere of influence or a specialist Conjurer can call 
        forth the power of a remnant lord of this ley line concentration.  They must be capable of performing 
        The Rites Of Sending and call out to them; "GROTHIA"
      </p>
      </div>
     
     <div className='flamePic'></div>     
</div>
}
}

lookingGlass = () => {
   if (this.state.showLooking === false){
   return <div className='RText'><div className='textPart'>
      <h3>The Looking Glass</h3>
      <p>
         Another site built on a ley line convergance.  The Looking Glass has several quirks.  
         It is the gate to communion.  It cannot reach out to others, but it can stop those who attempt.
         Additionally, one can dive through the moon pool to surface at other ley line convergances.  
         Kept by Cheschire, The White Rabbit Fae, before his abduction, it now is in the sole ownership 
         of The Torren-Berrys.  You, Morrigan, would be considered the defacto owner of this place.
         Founded by the Red Queen, Madame Mural, who was the first to organize The Midnight Crew.                          
      </p>
      <p>
      A Priest that has access to Summoning as a major sphere of influence or a specialist Conjurer can call 
           forth the power of a remnant lord of this ley line concentration.  They must be capable of performing 
           The Rites Of Sending and call out to them; "Spathi"
      </p>
      </div>
     
     <div className='lookingPic'></div>     
</div>
}
}

pearl = () => {
   if (this.state.showPearl === false){
   return <div className='RText'><div className='textPart'>
      <h3>The Pearl</h3>
      <p>
         Destroyed in a Lordly contest.  The Pearl is now a small 
         object that was once used by H⚪nra against MC but can now only be 
         used against him.  In possession of Rogue and Ping.
         It is a gray spot in his omniscience.
      </p>
      </div>
     
     <div className='pearlPic'></div>     
</div>
}
}

orchid = () => {
   if (this.state.showOrchid === false){
   return <div className='RText'><div className='textPart'>
      <h3>The Orchid</h3>
      <p>
         The most potent and obscure lay convergance.
         The key to many things on The Island.  It's entrance is blocked 
         by boulders, which some interpreted to mean that it is no longer 
         accessable, which is simply not the case.</p><p>
         Kept by Homulilly, fae of equinox flowers, who has abdicated her positon 
         to follow her new master, Lordling Xana Williams.
      </p><p>The Orchid has a special and specific themology with Time and Trials</p>
      </div>
     
     <div className='orchidPic'></div>     
</div>
}
}

lamp = () => {
   if (this.state.showLamp === false){
   return <div className='RText'><div className='textPart'>
      <h3>The Lamp Post</h3>
      <p>
      The only Island ley convergance off the island.  
      The key to finding the Island.  Was once in use 
      and agents of the vampire emporer arrived.  It is no 
      longer in use as the facility built atop it has been 
      toppled and is now rubble.
      </p>
      <p>That isn't to say that it cannot be built anew, of course</p>
      </div>
     
     <div className='lampPic'></div>     
</div>
}
}

loseThOS = () => {
   if (this.state.showLoseThOS === false){
   return <div className='RText'><div className='textPart'>
      <h3>Mara Kovich, of The Temple To LosethOS</h3>
      <p>
         A minor lay area that Lord Mara seeks to 
         grow.  A temple to Losethose Uldumon seeking 
         to canonize him as a saint.  Seeks to portray 
         his name without the "e" to emphasize his 
         connection with Os.</p><p>
         This location can be improved and further 
         attuned to throught the 
         construction of the astrolabe orrey.
      </p>
      </div>
     
     <div className='loseThOSPic'></div>     
</div>
}
}

temple = () => {
   if (this.state.showTemple === false){
   return <div className='RText'><div className='textPart'>
      <h3>Losethose Uldumon, of the Temple Of Os</h3>
      <p>
         Temple of OS.  Old, but not very active.
         The Oracle Fountain in the center is the key to 
         access the hidden basement.  Losethose built this 
         to hide away after he saw the face of god.
      </p>
      
      </div>
     
     <div className='templePic'></div>     
</div>
}
}

hubrid = () => {
   if (this.state.showHubrid === false){
   return <div className='RText'><div className='textPart'>
      <h3>Hubrid Noxus, of the Evincar's Castle</h3>
      <p>
         The Evincar's Castle is a heart of the island; a seat of noble oppression.
         It can never be held by someone who doesn't have a desire to be 
         untouchable for very long.  This untouchability must also never be 
         from raw strength alone; The Evincar is to keep opponents off balance by 
         dueling them in a less traditional sense and always be in high esteem of 
         lady luck.  Any Evincar that doesn't fullfil this will not have fate as an ally.
         </p><p>
         Currently held by Hubrid Noxus, who has held it 
         for thousands of years, except for a few days recently.  Although he held 
         The Manor for such a long time, most of the time it was only by default; 
         he was imprisoned in a magic puzzle box forged by Yakub for most of the time.  
         Hubrid was a threat to The Island, in that he was close to siezing The Flame 
         for himself and contacting his master, Clover the Conjurer, and informing her 
         of his location and what is here.  She had the ability to kill Os himself and 
         as such, Yakub took action and manipulated the minor apprentice of Losethose 
         to imprison Hubrid so.
         </p><p>
         The previous 
         Evincar was a Loftian that bartered in blood; fighting with wealth and 
         bargaining blood for bones.  Before that was a Pharaoh, Tema, that sealed 
         dark spirits into sandstone tablets and would weild their power against 
         his enemies and was very fond of puzzles and riddles.
         </p>

      
      </div>
     
     <div className='hubridPic'></div>     
</div>
}
}

angra = () => {
   if (this.state.showAngra === false){
   return <div className='RText'><div className='textPart'>
      <h3>Angra Mainyu, of the Sand Empire</h3>
      <p>
      From her ocean of sand, Angra Mainyu ruled The Island as 
      the dominant Lord for ages.  She imbued much of her power 
      into her two royal guards, Tawrich and Zarich.  Tawrich is
      immune to magic while Zarch is immune to physical attacks.  
      </p><p>
      Although dominante on The Island, she wasn't entirely 
      in control.  She failed to defeat the Evincar and seize 
      his castle, no matter how often she made attempts.</p>
      Her reign ended when she lost in a duel against Tema who 
      overthrew her but failed to inherit her sand empire, as she 
      buried her seat of power with a magically induced supernatural 
      sandstorm in her spiteful defeat.  She vowed to live forever 
      in mummified undeath and contest Tema for Lordship.  She was 
      true to her word, and dueled Tema multiple times over the 
      centuries, even after his death.  These two mummies continue 
      to duel every so often, even though neither yet lives or has 
      anything to lose anymore.
      <p>Now, as she has been for a very long time, she is a shadow 
         of her former self, as things should be.  The Lord of Spin 
         seeks her as a friend and ally, and is already making strides.
      </p>
      
      </div>
     
     <div className='angraPic'></div>     
</div>
}
}

atem = () => {
   if (this.state.showAtem === false){
   return <div className='RText'><div className='textPart'>
      <h3>Tema, of the Cloister of Trials</h3>
      <p>
         An Evincar in the past.
         A master of puzzles, riddles, and gambling games.  He tied dark powers to sandstone 
         tablets, and used their power for his own.
      </p>
      <p>He didn't remain as only Evincar and Lord of the Manor.  After defeating Angra Mainyu, 
         he followed in her footsteps to gain greater control over The Island.  He took great 
         interest in The Cloister of Trials and became more tied to it than The Castle.
      </p>
      <p>
         He has recently been challenged and defeated by an unlikely victor.  Tema defeated 
         this opponent over and over again, toying with them, until through moxen magic, they 
         overcame checkmate and defeated him, sealing him in a moxen amulet and wields his power.
         Tema was thrilled for this to happen and now is having somewhat of another chance at more 
         direct interaction with events of the Island instead of just being a remnant residing 
         in the ley line convergances most important to him.
      </p>
      <p>
         Another reason for joy in defeat is that he has a mortal companion.  Tema has suffered 
         a curse at the hands of Angra Mainyu and has forgotten his own name.  He is hoping that 
         his capture and companion will help him recover it.
      </p>
      </div>
     
     <div className='atemPic'></div>     
</div>
}
}

yevon = () => {
   if (this.state.showYevon === false){
   return <div className='RText'><div className='textPart'>
      <h3>Orlalesca, of The Crumbling Necropolis</h3>
      <p>
         Daughter of Yu Mika, divine leader of Kandzanar.  She was a psychoportive 
         psionisist beyond compare, 
         who defeated her father after the reckoning over two thousand years ago.
         </p><p>
         The Reckoning was of the largest struggles for dominance on The Island.  
         Kandzanar, now The City of Shadows, did battle against the other forces of 
         The Island in a contest for dominance.  Yu Mika and his legion of summoners, 
         although of terrible strength, lost.  Their opponents built a terrible weapon 
         which assured their victory.  Sensing doom, Yu Mika wove an intricate curse 
         fueled by the sacrifice of his own people. </p>
         <p>
         He became a remnant lord of terrible strength.  He manipulated fate in his 
         cursed form to drag travelers to The Island and 
         with every sacrifice they make, some fraction would be siphoned to him.  Travelers 
         already were manipulated by fate to come here just form the passive tugging of fate 
         lines by the enormous energy from Os, but this passive draw has been corrupted into 
         serving Yu Mika.
         </p><p>
         Orlalesca was one of the few who left Kandzanar and was not part of the ritual sacrifice.
         She lived in hiding, honing her powers further.  Eventually, Yu Mika's curse and shadow 
         existance was revealed and once again, the terrible weapon was to be unvieled and 
         used, to potentially catestrophic consequences for The Island.  Orlalesca confronted 
         and defeated her father and made peace with their old enemies.  She later came to 
         lead those people.  As age slowly caught up to her, she turned to darker uses of 
         psionics, using the same sacrificial rituals that her father did to prolong her existance.  
         She was cursed by her tampering with the darkness in people's hearts and her guise was 
         turned to that of a medusa.  She became The Reaper of Souls and devoured her people for 
         her own gain and prolonged life.  
         </p><p>Odo Leo, a summoner and outsider brought to The Island by the remnant of her own 
         father's curse, united the fae and defeated her.  He set the Fae's new seat of power to 
         be her old lair to keep an eye on her vestige.  He also created the Lion statues outside 
         to ward off and protect curious travelers.
            </p><p>
        Orlalesca exists as a remnant lord in a secret cloister beneath her crypt, waiting for 
        pilgrims to seek her out for power.  She can teach the Rites Of Sending.
      </p>
      </div>
     
     <div className='orlalescaPic'></div>     
</div>
}
}

mikokoro = () => {
   if (this.state.showMiko === false){
      return <div className='RText'><div className='textPart'>
         <h3>Mikokoro, Center of the Sea</h3>
         <p>
            Kept by Miko, the white kitsune fay, before his abduction.
            Center of the Sea, Eye of the World, Shrine of Enlightenment.
            Seek it for answers.  Seek it for healing.  Seek it and return transformed.
            </p><p>
            It's secrets plundered by a tengu esper; lost yet seeking.  
            Plundered, yet not despoiled in his quest for elusive phantom dust 
            to challenge another seeker at The Ruins.  </p><p>
            Those who defeat the Eye Of Chaos can challenge the Eye Of Wisdom here 
            to be granted Wisdom In The Flesh as Karo recently was.
            
         </p>
         <p>
         A Priest that has access to Summoning as a major sphere of influence or a specialist Conjurer can call 
           forth the power of the remnant lord of this ley line concentration.  They must be capable of performing 
           The Rites Of Sending and call out to them; "MEGATH // // // DO // RA // MA"
         </p>
      </div>
      <div className='mikokoroPic'></div>   
      </div>
   }
}
     

    render() {
      return (
         <div className='stationWrapper'>
         <div className='station' onClick={this.toggleSwan}><img src={swan} alt='req' id='dharma' /></div>
         <div className='swanDiv'>{this.swan()}
           </div>
         <div className='station' onClick={this.toggleFlame}><img src={flame} alt='req' id='dharma' /></div>
         <div className='flameDiv'>
            {this.flame()}
         </div>
         <div className='station' onClick={this.toggleArrow}><img src={arrow} alt='req' id='dharma' /></div>
      <div className='arrowDiv'>{this.arrow()}</div>
           
           
         <div className='station' onClick={this.toggleLooking}><img src={lookingGlass} alt='req' id='dharma' /></div>
         <div className='lookingGlassDiv'>{this.lookingGlass()}
            </div>
            
         <div className='station' onClick={this.togglePearl}><img src={pearl} alt='req' id='dharma' /></div>
         <div className='pearlDiv'>{this.pearl()}</div>

         <div className='station' onClick={this.toggleOrchid}><img src={orchid} alt='req' id='dharma' /></div>
         <div className='orchidDiv'>{this.orchid()}</div>

         <div className='station' onClick={this.toggleLamp}><img src={lampPost} alt='req' id='dharma' /></div>
         <div className='lampDiv'>{this.lamp()}</div>
         
         <div className='loseThOSSymbol' onClick={this.toggleLoseThOS}><img src={losethOS} alt='req' id='loseThOSSymbol' /></div>
         <div className='loseThOSDiv'>{this.loseThOS()}</div>
         
         <div className='templeOSSymbol' onClick={this.toggleTemple}><img src={templeOS} alt='req' id='templeOSSymbol' /></div>
         <div className='templeDiv'>{this.temple()}</div>
         
         <div className='hubridSymbol' onClick={this.toggleHubrid}><img src={castle} alt='req' id='hubridSymbol' /></div>
         <div className='hubridDiv'>{this.hubrid()}</div>
         
         <div className='angraMainyuSymbol' onClick={this.toggleAngra}><img src={angraMainyu} alt='req' id='angraMainyuSymbol' /></div>
         <div className='angraDiv'>{this.angra()}</div>
         <div className='atemSymbol' onClick={this.toggleAtem}><img src={atem} alt='req' id='atemSymbol' /></div>
         <div className='atemDiv'>{this.atem()}</div>
         <div className='yevonSymbol' onClick={this.toggleYevon}><img src={yevon} alt='req' id='yevon' /></div>
         <div className='yevonDiv'>{this.yevon()}</div>
         <div className='mikokoroSymbol' onClick={this.toggleMiko}><img src={mikokoro} alt='req' id='mikokoro' /></div>
         <div className='mokoDiv'>{this.mikokoro()}</div>
         </div>
      )
    }
  }