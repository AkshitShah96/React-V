function CustomButton({ label, onClick }) {
  return (
    <button onClick={onClick} style={buttonStyle}>
      {label}
    </button>
  );
}

const buttonStyle = {
  padding: "10px 15px",
  margin: "10px",
  fontSize: "16px",
  cursor: "pointer"
};

export default CustomButton;
    