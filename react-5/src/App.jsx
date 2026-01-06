import CustomButton from "./CustomButton";

function App() {
  // Functions defined in parent
  const handleClick1 = () => {
    console.log("Button 1 clicked");
  };

  const handleClick2 = () => {
    console.log("Button 2 clicked");
  };

  const handleClick3 = () => {
    console.log("Button 3 clicked");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Custom Button Example</h1>

      <CustomButton label="Button One" onClick={handleClick1} />
      <CustomButton label="Button Two" onClick={handleClick2} />
      <CustomButton label="Button Three" onClick={handleClick3} />
    </div>
  );
}

export default App;
