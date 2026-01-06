import "./Child.css";

function Child({ name, age, isStudent, subjects }) {
  return (
    <div className="card">
      <h2>Child Component</h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>

      <p>
        <strong>Status:</strong>{" "}
        {isStudent ? "Student" : "Not a Student"}
      </p>

      <p><strong>Subjects:</strong></p>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default Child;
