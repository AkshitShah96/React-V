function Product({ name, price, inStock }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    width: "250px"
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>
        Status:{" "}
        {inStock ?
         (
          <span style={{ color: "green" }}>Available</span>
        ) : (
          <span style={{ color: "red" }}>Out of Stock</span>
        )}
      </p>
    </div>
  );
}

export default Product;
