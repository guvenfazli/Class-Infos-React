import { useState } from "react"
import './EditCharacter.css'

export default function EditCharacter({newCharAge, newAge, newCharName, newName,newCharRace, newRace,newCharClass, newClass, children}){
  return (
  
    <div className="summary"> 
      <h3>You were born as a baby {
         <select value={newRace} onChange={newCharRace} name="" id="">
         <option value="">Choose Race</option>
         <option value="Human">Human</option>
         <option value="Dwarf">Dwarf</option>
         <option value="Elf">Elf</option>
         <option value="Gnome">Gnome</option>
       </select>
        } with a name called {<input type="text" required placeholder='Character Name' onChange={newCharName} value={newName}/>}.</h3>
      <h3>Now you are {<input type="text" required placeholder='Character Age' onChange={newCharAge} value={newAge}/>} years old.</h3>
      <h3>Through years you tought yourself to become a {
                <select value={newClass} onChange={newCharClass} name="" id="">
                <option value="">Choose Class</option>
                <option value="Warrior">Warrior</option>
                <option value="Paladin">Paladin</option>
                <option value="Archer">Archer</option>
                <option value="Mage">Mage</option>
              </select>
        }, now you are ready for your journey.</h3>
      {children}
    </div>
      
    
  )
}