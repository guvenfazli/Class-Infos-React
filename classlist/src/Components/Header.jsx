import './Header.css'
import logo from '../Assets/logo.png'


export default function Header(){
  return (
    <div className='logo-header'>
      <img src={logo} alt="logo" />
      
    </div>
  )
}