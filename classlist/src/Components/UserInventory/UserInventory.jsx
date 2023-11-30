import './UserInventory.css'
import './Item.css'
import { useState } from 'react';


export const inventory = [];

export const items = [
  ["Axe", "Sword", "Shield", "Mace"],
  ["Mace", "Hammer", "Book", "Shield"],
  ["Bow", "Arrow", "CrossBow", "Dagger"],
  ["Staff", "Wand", "Book", "Element"],
]

export default function UserInventory({children}){

  const [currentInventory, setCurrentInventory] = useState(inventory)

  
  function addItem(item){
    if(currentInventory.length >= 3){
      alert('You reached your limit!')
    } else {
      setCurrentInventory((prevInventory) => {
        let newInventory = [...prevInventory]
        newInventory.push(item)
        return newInventory
      })
    }

  
  }

  function removeItem(itemInventory, removeIndex){
    setCurrentInventory((prevItems) => {
      let yeni = [...prevItems]
      yeni.splice(removeIndex, 1)
      return yeni;
    })
  
    console.log(removeIndex)
  }

 

  return (
    <div className="inventory-items">
      <div className='inventory'>
        <div className='inventory-limit'>
          <h2>{currentInventory.length} / 3</h2>
        </div>
        <div className='inventory-item'>
          {currentInventory.map((itemInventory, removeIndex) => <button onClick={() => removeItem(itemInventory,removeIndex)}>{itemInventory}</button>)}
        </div>
      </div>

      <div className='items'>
        <div className="warrior-items">
          <h4>Best Items for Warrior</h4>
          {items[0].map((item, index) => <button onClick={() => addItem(item)}>{item}</button>)}
        </div>

        <div className="paladin-items">
          <h4>Best Items for Paladin</h4>
          {items[1].map((item, index) => <button onClick={() => addItem(item)}>{item}</button>)}
        </div>

        <div className="archer-items">
          <h4>Best Items for Archer</h4>
          {items[2].map((item) => <button onClick={() => addItem(item)}>{item}</button>)}
        </div>

      
        <div className="mage-items">
          <h4>Best Items for Mage</h4>
          {items[3].map((item) => <button onClick={() => addItem(item)}>{item}</button>)}
        </div>
      </div>

      <div>
        {children}
      </div>
    
      
    

    </div>
  )
}