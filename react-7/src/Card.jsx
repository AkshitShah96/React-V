import "./Card.css";

function Card({ title, subtitle, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>

      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;
