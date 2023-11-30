import { useState } from "react";
import './CreateCharacter.css'


export default function CreateCharacter({children, hideSection ,...props}){
  return (
    <div className="create-character">
      <button className={!hideSection ? undefined : 'hidden'} {...props}>Create Character</button>
    </div>
  )
}