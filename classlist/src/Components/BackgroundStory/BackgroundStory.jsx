import './BackgroundStory.css'
import { useState } from 'react'
import { backGround } from '../../data/infos'

export default function BackgroundStory(){

  const [story, setStory] = useState();

  function createStory(storyClass){
    setStory(storyClass);
  }

  

  return (
    <div className='background-story'>
      <div className='background-section'>
        <button className={story === 'Warrior' ? 'warrior-button' : undefined} onClick={() => createStory('Warrior')}>Warrior</button>
        <button className={story === 'Paladin' ? 'paladin-button' : undefined} onClick={() => createStory("Paladin")}>Paladin</button>
        <button className={story === 'Archer' ? 'archer-button' : undefined} onClick={() => createStory("Archer")}>Archer</button>
        <button className={story === 'Mage' ? 'mage-button' : undefined} onClick={() => createStory("Mage")}>Mage</button>
      </div>

      <div className='background-story'>
        {!story ? '' : (<>
          <h3>{story}</h3>
          <h4>{backGround[story].title}</h4>
        </>)}
        
        
        
        
        {console.log(story)}
      </div>





    </div>





  )
}