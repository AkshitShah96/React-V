import TableRow from "./TableRow";

function App() {
  const students = [
    { id: 1, name: "Nisha", age: 20, course: "B.Tech" },
    { id: 2, name: "Rahul", age: 21, course: "BCA" },
    { id: 3, name: "Amit", age: 22, course: "B.Sc" },
    { id: 4, name: "Sneha", age: 19, course: "B.Com" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Table</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              id={student.id}
              name={student.name}
              age={student.age}
              course={student.course}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
