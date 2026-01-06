import Product from "./Product";

function App() {
  return (
    <div>
      <h1>Product List</h1>

      <Product name="Laptop" price={60000} inStock={true} />
      <Product name="Smartphone" price={30000} inStock={false} />
      <Product name="Headphones" price={2500} inStock={true} />
      <Product name="Keyboard" price={1500} inStock={true} />
      <Product name="Monitor" price={12000} inStock={false} />
    </div>
  );
}

export default App;
