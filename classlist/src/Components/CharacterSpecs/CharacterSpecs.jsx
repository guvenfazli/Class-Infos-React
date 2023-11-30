import './CharacterSpecs.css'
import { useState } from 'react'


export default function CharacterSpecs({newCharAge, newAge, newCharName, newName,newCharRace, newRace,newCharClass, newClass,children,...props}){

  return(
    
    <>
    <div className='character-specs'>
      <input type="text" required placeholder='Character Name' onChange={newCharName} value={newName}/>
      
      <input type="text" required placeholder='Character Age' onChange={newCharAge} value={newAge}/>
      
      <select value={newRace} onChange={newCharRace} name="" id="">
        <option value="">Choose Race</option>
        <option value="Human">Human</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Gnome">Gnome</option>
      </select>

      <select value={newClass} onChange={newCharClass} name="" id="">
        <option value="">Choose Class</option>
        <option value="Warrior">Warrior</option>
        <option value="Paladin">Paladin</option>
        <option value="Archer">Archer</option>
        <option value="Mage">Mage</option>
      </select>

      

      {children}

      
    </div>

    </>





  )




}