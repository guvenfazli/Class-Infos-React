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
      <button className={selectedRole === "Tank" ? 'active' : 'standard-buttons'} onClick={() => selectRole("Tank")}>Tank</button>
      <button className={selectedRole === "Dps" ? 'active' : 'standard-buttons'} onClick={() => selectRole("Dps")}>Dps</button>
      <button className={selectedRole === "Healer" ? 'active' : 'standard-buttons'} onClick={() => selectRole("Healer")}>Healer</button>
      </div>

      {!selectedRole ?
       (<div className="role-section">
          <p>Please Choose a Role</p>
       </div>)
        : 
      
      (<div className="role-section">
        <h2>{selectedRole}</h2>
        <p>{roles[selectedRole]}</p>
      
      
      
      </div>)}
    
    </>



  )
}