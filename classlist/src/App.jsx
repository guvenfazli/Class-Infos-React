import './App.css';
import Header from './Components/Header.jsx';
import ClassButton from './Components/ClassButton.jsx';
import ClassCard from './Components/ClassCard.jsx';
import { useState } from 'react';
import {classList} from './data/infos.js'
import { userList } from './data/infos.js';
import UserListSection from './Components/UserSection.jsx';


function App() {
  
  const [selectedButton, setSelectedButton] = useState();

  const [selectedUser, setSelectedUser] = useState();

  function selectUser(selectedUser){
    setSelectedUser(selectedUser)
  }

  function selectButton(selected){
    setSelectedButton(selected)
    
  }

  return (
    <div className="App">
      <Header />
      <div className='nav-buttons'>
          {classList.map((button, index) => (
            <ClassButton key={index} className={selectedButton === -1 ? undefined : 'active-' + button.title} onClick={() => selectButton(index)}>{button.title}</ClassButton>
          ))}


      </div>
      <div className='class-info'>
        {selectedButton === -1 ? 
        <p>Please choose a class.</p> : 
        <ClassCard title={classList[selectedButton].title}
        description={classList[selectedButton].description}
        role={classList[selectedButton].role}/>}

      </div>

      <div>

          {userList.map((button, index) => (
            <UserListSection onClick={() => selectUser(button)}>{button.name}</UserListSection>
          ))}

          {!selectedUser ? <p>Choose a user</p> : (<div><p>{selectedUser.name}</p>
          <p>{selectedUser.age}</p></div>)}
            
           



      </div>

      <div>
          


      </div>
      
    </div>
  );
}

export default App;
