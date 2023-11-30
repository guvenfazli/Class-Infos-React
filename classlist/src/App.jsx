import './App.css';
import { useState } from 'react';
import CreateCharacter from './Components/CreateCharacter/CreateCharacter';
import RenderCharacter from './Components/CharacterSpecs/RenderCharacter';
import CharacterSpecs from './Components/CharacterSpecs/CharacterSpecs';
import UserInventory from './Components/UserInventory/UserInventory';
import BackgroundStory from './Components/BackgroundStory/BackgroundStory';
import EditCharacter from './Components/EditCharacter';

function App() {  

  const [editRenderCharacter, setEditRenderCharacter] = useState(false)
  
  const [newCharacter, setNewCharacter] = useState(false)

  const [renderStory, setRenderStory] = useState(false);


  function activeNewCharacter(){
    setNewCharacter((activeCharacter) => !activeCharacter)
  }

  /* CREATING THE CHARACTER */

  const [characterName, setCharacterName] = useState();

  function charName(event){
    setCharacterName(event.target.value);
    console.log(characterName)
  }


  const [characterAge, setCharacterAge] = useState();

  function charAge(event){
    setCharacterAge(event.target.value);
  }

  const [characterRace, setCharacterRace] = useState();

  function charRace(event){
    setCharacterRace(event.target.value)
  }

  const [characterClass, setCharacterClass] = useState();

  function charClass(event){
    setCharacterClass(event.target.value)
  }


  /* CREATING THE CHARACTER */ 



  const [renderCharacter, setRenderCharacter] = useState(false)

  const [hideButton, setHideButton] = useState(false);
   
  function saveSettings(){
    if(renderCharacter){
      setNewCharacter((activeCharacter) => !activeCharacter)
    } else if(!characterName || !characterAge || !characterRace || !characterClass){
      alert('Please fill every blank!')
    } else {
      setRenderCharacter((render) => !render)
      setNewCharacter((activeCharacter) => !activeCharacter)
      setHideButton((hide) => !hide)
    }
  }

  function editRenderedCharacter(){
    if(renderCharacter){
      setRenderCharacter((render) => !render)
      setEditRenderCharacter((editRender) => !editRender)
    } else if(editRenderCharacter){
      setRenderCharacter((render) => !render)
      setEditRenderCharacter((editRender) => !editRender)
    } else {
      charName();
      charAge();
      charRace();
      charClass();
    }
    
  }

  

  function moveOn(){
    setRenderStory((renderStory) => !renderStory)
  }

  return (
    <section class="section-1">
      <div className='game-section'>
        {!newCharacter ? <CreateCharacter  hideSection={hideButton} onClick={activeNewCharacter}/> : 
        
        <CharacterSpecs newCharName={charName} newName={characterName} newCharAge={charAge} newAge={characterAge} newCharRace={charRace} newRace={characterRace} newCharClass={charClass} charClass={characterClass}>
          <button onClick={() => saveSettings()}>Continue</button>
        </CharacterSpecs>
        }
        
        {!renderCharacter ? <></>: 
        <RenderCharacter name={characterName} age={characterAge}race={characterRace} charClass={characterClass}>
          <button onClick={() => editRenderedCharacter()}>Edit</button>
        </RenderCharacter>
        }

        {!editRenderCharacter ? <></> : 
        <EditCharacter newCharName={charName} newName={characterName} newCharAge={charAge} newAge={characterAge} newCharRace={charRace} newRace={characterRace} newCharClass={charClass} charClass={characterClass}>
          <button onClick={editRenderedCharacter}>Save</button>
        </EditCharacter>
        }

        {!renderCharacter ? <></> : <UserInventory/>}
        
        <div className='to-the-background'>
        
        {!renderCharacter ? <></> : <button onClick={moveOn}>Move On</button>}   
        
        </div>
        
        {!renderStory ? <></> : <BackgroundStory></BackgroundStory>}  
        
        
        

      </div>
    </section>
  );
}

export default App;
