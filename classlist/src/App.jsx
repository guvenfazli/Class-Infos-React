import './App.css';
import UserInfo from './Components/UserInfo';
import Header from './Components/Header';
import RenderCountry from './Components/UserCountry.jsx';
import { useState } from 'react';
import {info} from './data/infos.js'

function App() {
  const [selectedUser, setSelectedUser] = useState(-1);

  function selectUser(userName){
    setSelectedUser(userName)
    console.log(selectedUser)
  }


  return (
    <div className="App">
      <Header/>
      <div className='user-section'>
        {info.map((user,index) => (
          <UserInfo onClick={() => selectUser(index)} {...user}/>
        ))}

      </div>
     <div className='user-special'>
        {selectedUser === -1 ? <p>Please choose a user</p> : info[selectedUser].country}
        
     </div>
    </div>
  );
}

export default App;
