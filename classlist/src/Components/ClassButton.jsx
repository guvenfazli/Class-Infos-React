import './ClassButton.css'

export default function ClassButton({children, onActive, isActive, cl}){
  return(
    <button  className={isActive ? 'active-' + cl : 'class-button'} onClick={onActive}>{children}</button>
  )
}