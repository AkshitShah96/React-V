import Card from "./Card";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Card Component Example</h1>

      <Card title="Student Info" subtitle="Computer Engineering">
        <p>Name: Nisha Shah</p>
        <p>Roll No: 101</p>
      </Card>

      <Card title="Product Details" subtitle="Electronics">
        <p>Product: Laptop</p>
        <p>Price: ₹60,000</p>
        <button>Buy Now</button>
      </Card>

      <Card title="Notice" subtitle="College Update">
        <p>Exams start from next Monday.</p>
      </Card>
    </div>
  );
}

export default App;
