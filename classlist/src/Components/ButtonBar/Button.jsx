export default function ClassButton({children, sClass, ...props}){
  return (
    <button {...props}>{children}</button>
  )
}