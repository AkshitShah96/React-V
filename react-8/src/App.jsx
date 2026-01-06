// Import useState hook (needed for counter & calculator)
import { useState } from "react";

/* =====================================================
   1️⃣ TASK COMPONENT
   - Props: taskName, completed
   - Green text if completed, else red
===================================================== */
function Task({ taskName, completed }) {
  return (
    <p style={{ color: completed ? "green" : "red" }}>
      {taskName}
    </p>
  );
}

/* =====================================================
   2️⃣ PROFILE COMPONENT
   - Props: name, age, city
   - age & city have default values
===================================================== */
function Profile({ name, age = 18, city = "Unknown" }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

/* =====================================================
   3️⃣ CATEGORY COMPONENT
   - Props: name, items (array)
===================================================== */
function Category({ name, items }) {
  return (
    <div style={{ margin: "10px" }}>
      <h3>{name}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/* =====================================================
   4️⃣ MOVIE LIST COMPONENT
   - Props: movies (array of objects)
===================================================== */
function MovieList({ movies }) {
  return (
    <div>
      <h2>Movies</h2>

      {movies.map((movie, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            borderRadius: "6px"
          }}
        >
          <p>Title: {movie.title}</p>
          <p>Year: {movie.year}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

/* =====================================================
   5️⃣ COUNTER BUTTON (CHILD)
===================================================== */
function CounterButton({ onIncrement }) {
  return <button onClick={onIncrement}>Increment</button>;
}

/* =====================================================
   6️⃣ IMAGE CARD COMPONENT
===================================================== */
function ImageCard({ imageUrl, title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        width: "200px",
        padding: "10px",
        borderRadius: "8px"
      }}
    >
      <img src={imageUrl} alt={title} width="100%" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

/* =====================================================
   7️⃣ MESSAGE COMPONENT
   - type: success | error | info
===================================================== */
function Message({ text, type }) {
  let color;

  if (type === "success") color = "green";
  else if (type === "error") color = "red";
  else color = "blue";

  return <p style={{ color }}>{text}</p>;
}

/* =====================================================
   8️⃣ CALCULATOR BUTTON (CHILD)
===================================================== */
function CalculatorButton({ label, onClick }) {
  return <button onClick={onClick} style={{ margin: "5px" }}>{label}</button>;
}

/* =====================================================
   🔴 MAIN PARENT COMPONENT
===================================================== */
function App() {
  /* ---------- Counter state ---------- */
  const [count, setCount] = useState(0);

  /* ---------- Calculator state ---------- */
  const [number] = useState(3);
  const [result, setResult] = useState(null);

  /* ---------- Data ---------- */
  const tasks = [
    { taskName: "Learn React", completed: true },
    { taskName: "Practice Props", completed: false },
    { taskName: "Build Project", completed: true }
  ];

  const categories = [
    { name: "Fruits", items: ["Apple", "Banana", "Mango"] },
    { name: "Languages", items: ["Java", "Python", "JavaScript"] },
    { name: "Sports", items: ["Cricket", "Football"] }
  ];

  const movies = [
    { title: "Inception", year: 2010, rating: 9 },
    { title: "Interstellar", year: 2014, rating: 8.5 },
    { title: "Avengers", year: 2019, rating: 8 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Practice – All in One File</h1>

      {/* ===== TASK LIST ===== */}
      <h2>Tasks</h2>
      {tasks.map((task, index) => (
        <Task key={index} taskName={task.taskName} completed={task.completed} />
      ))}

      {/* ===== PROFILE ===== */}
      <h2>Profiles</h2>
      <Profile name="Nisha" age={20} city="Mumbai" />
      <Profile name="Rahul" /> {/* default age & city */}

      {/* ===== CATEGORIES ===== */}
      <h2>Categories</h2>
      {categories.map((cat, index) => (
        <Category key={index} name={cat.name} items={cat.items} />
      ))}

      {/* ===== MOVIE LIST ===== */}
      <MovieList movies={movies} />

      {/* ===== COUNTER ===== */}
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <CounterButton onIncrement={() => setCount(count + 1)} />

      {/* ===== IMAGE CARDS ===== */}
      <h2>Image Cards</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {[1,2,3,4,5].map((n) => (
          <ImageCard
            key={n}
            imageUrl="https://via.placeholder.com/150"
            title={`Image ${n}`}
            description="Sample description"
          />
        ))}
      </div>

      {/* ===== MESSAGES ===== */}
      <h2>Messages</h2>
      <Message text="Operation Successful" type="success" />
      <Message text="Something went wrong" type="error" />
      <Message text="This is an info message" type="info" />

      {/* ===== CALCULATOR ===== */}
      <h2>Calculator</h2>
      <p>Number: {number}</p>
      <CalculatorButton label="Double" onClick={() => setResult(number * 2)} />
      <CalculatorButton label="Square" onClick={() => setResult(number ** 2)} />
      <CalculatorButton label="Cube" onClick={() => setResult(number ** 3)} />
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
