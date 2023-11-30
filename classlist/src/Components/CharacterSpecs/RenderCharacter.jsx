import './RenderCharacter.css'
import { useState } from 'react'

export default function RenderCharacter({name, age, race, charClass, children}){
  return (

    <div className="summary"> 
      <h3>You were born as a baby {race} with a name called {name}.</h3>
      <h3>Now you are {age} years old.</h3>
      <h3>Through years you tought yourself to become a {charClass}, now you are ready for your journey.</h3>
      {children}
    </div>




  )
}