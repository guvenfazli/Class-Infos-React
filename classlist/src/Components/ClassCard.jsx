import './ClassCard.css'

export default function ClassCard({title, description}){
  return (
    <div className='class-card'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}