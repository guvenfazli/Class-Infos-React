export default function ClassButton({children, classType, ...props}){
  return (
    <button {...props}>{children}</button>
  )
}