import "./CardMe.css"

export default function CardMe({ title, description, icon }) {
  return (
    <div className="card-me">
      <div className="card-icon">
        <ion-icon name={icon}></ion-icon>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );    
}