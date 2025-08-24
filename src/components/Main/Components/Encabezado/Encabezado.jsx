import "./Encabezado.css"

export default function Encabezado({ title,span, description }) {
  return (
    <div className="header-main">
      <h1> {title} <span>{span}</span></h1>
      <p>{description}</p>
    </div>
  )
}