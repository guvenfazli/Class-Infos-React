import './ClassButton.css'

export default function ClassButton({children, cl, ...props}){
  return(
    <button {...props}>{children}</button>
  )
}