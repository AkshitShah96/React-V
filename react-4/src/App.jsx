import Child from "./Child";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Parent Component</h1>

      <Child
        name="Nisha Shah"
        age={20}
        isStudent={true}
        subjects={["Maths", "Computer Science", "DBMS", "OS"]}
      />
    </div>
  );
}

export default App;
