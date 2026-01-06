import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <h1>Student Details</h1>

      <StudentCard
        name="Nisha Shah"
        rollNumber="101"
        marks="89"
      />

      <StudentCard
        name="Rahul Mehta"
        rollNumber="102"
        marks="92"
      />

      <StudentCard
        name="Amit Verma"
        rollNumber="103"
        marks="85"
      />
    </div>
  );
}

export default App;
