import './ButtonBar.css'
import { useState } from 'react'
import { classList } from "../../data/infos";
import ClassButton from "./Button";
import ClassCard from '../ClassCard/ClassCard';

export default function ButtonBar(){

  const [selectedClass, setSelectedClass] = useState();

  function selectClass(selected){
    setSelectedClass(selected)
  }


  return (
    <>
    <div className="button-bar">
        {classList.map((button, index) => (<ClassButton onClick={() => selectClass(button)}  className={selectedClass ? "class-button"  : "class-button"}>{button.title}</ClassButton>))}
    </div>

    <div className='class-card-section'>
      {!selectedClass ? <p>Please choose a class</p> : (<ClassCard title={selectedClass.title} description={selectedClass.description}></ClassCard>)}      
    </div>
    
    

    </>

  )
}