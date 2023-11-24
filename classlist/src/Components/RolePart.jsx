import { roles } from "../data/infos"
import { useState } from "react"
import './RolePart.css'


export default function ChooseRole(){
  
  const [selectedRole, setSelectedRole] = useState();

  function selectRole(role){
    setSelectedRole(role);
  }
  
  
  return (

    <>
      <div className="role-buttons">
      <button onClick={() => selectRole("Tank")}>Tank</button>
      <button onClick={() => selectRole("Dps")}>Dps</button>
      <button onClick={() => selectRole("Healer")}>Healer</button>
      </div>

      {!selectedRole ? <p>Please Choose a Role</p> : 
      
      (<div className="role-section">
        <h2>{selectedRole}</h2>
        <p>{roles[selectedRole]}</p>
      
      
      
      </div>)}
    
    </>



  )
}