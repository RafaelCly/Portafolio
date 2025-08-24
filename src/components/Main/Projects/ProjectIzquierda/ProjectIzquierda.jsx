import "./ProjectIzquierda.css"

export default function ProjectIzquierda({
  titulo,
  descripcion,
  tecnologias,
  linkProyecto,
  linkCodigo,
  imagen,}) {
    return (
    <div className="card-container">
      <div className="card-image">
        {imagen && <img src={imagen} alt={titulo} />}
      </div>

      <div className="card-content">
        <h2 className="card-title">{titulo}</h2>
        <p className="card-description">{descripcion}</p>

        <div className="tech-list">
          {tecnologias.map((tech, i) => (
            <span key={i} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="card-actions">
          <a href={linkProyecto} target="_blank" rel="noopener noreferrer" className="btn-project">
            <ion-icon name="code-download-outline"></ion-icon> Ver proyecto
          </a>
          <a href={linkCodigo} target="_blank" rel="noopener noreferrer" className="btn-code">
            <ion-icon name="logo-github"></ion-icon> Código
          </a>  
        </div>
      </div>
    </div>
  );
};