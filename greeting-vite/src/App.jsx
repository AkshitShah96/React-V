import Greeting from "./Greeting";

function App() {
  const names = ["Nisha", "Rahul", "Amit"];

  return (
    <div>
      <h1>Greeting App</h1>

      {names.map((name, index) => (
        <Greeting key={index} name={name} />
      ))}
    </div>
  );
}

export default App;
  