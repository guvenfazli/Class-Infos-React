import './App.css';
import Header from './Components/Header.jsx';
import ClassButton from './Components/ClassButton.jsx';
import ClassCard from './Components/ClassCard.jsx';
import { useState } from 'react';
import {classList} from './data/infos.js'

function App() {
  
  const [selectedButton, setSelectedButton] = useState();

  function selectButton(selected){
    setSelectedButton(selected)
  }




  return (
    <div className="App">
      <Header />
      <div className='nav-buttons'>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Warrior'} onActive={() => selectButton('Warrior')}>Warrior</ClassButton>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Paladin'} onActive={() => selectButton('Paladin')}>Paladin</ClassButton>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Hunter'} onActive={() => selectButton('Hunter')}>Hunter</ClassButton>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Rogue'} onActive={() => selectButton('Rogue')}>Rogue</ClassButton>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Priest'} onActive={() => selectButton('Priest')}>Priest</ClassButton>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Shaman'} onActive={() => selectButton('Shaman')}>Shaman</ClassButton>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Mage'} onActive={() => selectButton('Mage')}>Mage</ClassButton>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Warlock'} onActive={() => selectButton('Warlock')}>Warlock</ClassButton>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Monk'} onActive={() => selectButton('Monk')}>Monk</ClassButton>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Druid'} onActive={() => selectButton('Druid')}>Druid</ClassButton>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Dh'} onActive={() => selectButton('Dh')}>Demon Hunter</ClassButton>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Dk'} onActive={() => selectButton('Dk')}>Death Knight</ClassButton>
        <ClassButton cl={selectedButton} isActive={selectedButton === 'Evoker'} onActive={() => selectButton('Evoker')}>Evoker</ClassButton>
      </div>
      <div className='class-info'>
        {!selectedButton ? 
        <p>Please choose a class.</p> : 
        <ClassCard title={classList[selectedButton].title}
        description={classList[selectedButton].description}/>}

      </div>
    </div>
  );
}

export default App;
