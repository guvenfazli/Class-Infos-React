import './UserInfo.css'

export default function UserInfo({name, age, onClick}){
  return (
    <div onClick={onClick} className='user-card'>
    <h3>{name}</h3>
    <p>{age}</p>
    </div>
  )
}