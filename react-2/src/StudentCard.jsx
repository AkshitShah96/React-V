function StudentCard({ name, rollNumber, marks }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    width: "250px",
    backgroundColor: "#f9f9f9"
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>Roll Number: {rollNumber}</p>
      <p>Marks: {marks}</p>
    </div>
  );
}

export default StudentCard;
