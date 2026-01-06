import { useState } from "react";

function App() {

  /* =====================================================
     1️⃣ COUNTER WITH DYNAMIC STEP + RESET + NEGATIVE ALERT
  ===================================================== */
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    if (count - step < 0) {
      alert("Count cannot be negative!");
    } else {
      setCount(count - step);
    }
  };

  const reset = () => {
    setCount(0);
  };

  /* =====================================================
     2️⃣ SIGNUP FORM WITH REAL-TIME VALIDATION
  ===================================================== */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameError = name === "" ? "Name required" : "";
  const emailError = !email.includes("@") ? "Invalid email" : "";
  const passwordError = password.length < 6 ? "Min 6 characters" : "";

  /* =====================================================
     3️⃣ REAL-TIME INPUT DISPLAY
  ===================================================== */
  const [liveText, setLiveText] = useState("");

  /* =====================================================
     4️⃣ SHOW / HIDE TEXT
  ===================================================== */
  const [showText, setShowText] = useState(true);

  /* =====================================================
     5️⃣ FORM SUBMIT ALERT
  ===================================================== */
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formName}, Email: ${formEmail}`);
  };

  /* =====================================================
     6️⃣ LIKE BUTTON
  ===================================================== */
  const [likes, setLikes] = useState(0);

  /* =====================================================
     7️⃣ TABS COMPONENT
  ===================================================== */
  const [activeTab, setActiveTab] = useState("tab1");

  /* =====================================================
     8️⃣ DROPDOWN SELECTION
  ===================================================== */
  const [option, setOption] = useState("");

  /* =====================================================
     9️⃣ CHARACTER COUNT
  ===================================================== */
  const [text, setText] = useState("");

  /* =====================================================
     🔟 PASSWORD SHOW / HIDE
  ===================================================== */
  const [showPassword, setShowPassword] = useState(false);

  /* =====================================================
     1️⃣1️⃣ STAR RATING
  ===================================================== */
  const [rating, setRating] = useState(0);

  /* =====================================================
     1️⃣2️⃣ AGE CHECK
  ===================================================== */
  const [age, setAge] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React useState Practice (All in One)</h1>

      {/* ===== COUNTER ===== */}
      <h2>Counter with Step</h2>
      <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <hr />

      {/* ===== SIGNUP FORM ===== */}
      <h2>Signup Form</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <p style={{ color: "red" }}>{nameError}</p>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <p style={{ color: "red" }}>{emailError}</p>

      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <p style={{ color: "red" }}>{passwordError}</p>

      <hr />

      {/* ===== LIVE INPUT ===== */}
      <h2>Live Input Display</h2>
      <input onChange={(e) => setLiveText(e.target.value)} />
      <p>{liveText}</p>

      <hr />

      {/* ===== SHOW / HIDE ===== */}
      <h2>Show / Hide Text</h2>
      <button onClick={() => setShowText(!showText)}>Toggle</button>
      {showText && <p>This text can be hidden</p>}

      <hr />

      {/* ===== FORM ALERT ===== */}
      <h2>Form Submit Alert</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e) => setFormName(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setFormEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      <hr />

      {/* ===== LIKES ===== */}
      <h2>Like Button</h2>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 Like</button>

      <hr />

      {/* ===== TABS ===== */}
      <h2>Tabs</h2>
      <button onClick={() => setActiveTab("tab1")}>Tab 1</button>
      <button onClick={() => setActiveTab("tab2")}>Tab 2</button>
      <p>{activeTab === "tab1" ? "This is Tab 1" : "This is Tab 2"}</p>

      <hr />

      {/* ===== DROPDOWN ===== */}
      <h2>Dropdown</h2>
      <select onChange={(e) => setOption(e.target.value)}>
        <option>Select</option>
        <option>Option A</option>
        <option>Option B</option>
        <option>Option C</option>
      </select>
      <p>Selected: {option}</p>

      <hr />

      {/* ===== CHARACTER COUNT ===== */}
      <h2>Character Count</h2>
      <input onChange={(e) => setText(e.target.value)} />
      <p>Characters: {text.length}</p>

      <hr />

      {/* ===== PASSWORD TOGGLE ===== */}
      <h2>Password Show/Hide</h2>
      <input type={showPassword ? "text" : "password"} />
      <button onClick={() => setShowPassword(!showPassword)}>Show / Hide</button>

      <hr />

      {/* ===== STAR RATING ===== */}
      <h2>Rating</h2>
      {[1,2,3,4,5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{ cursor: "pointer", color: star <= rating ? "gold" : "gray", fontSize: "25px" }}
        >
          ★
        </span>
      ))}
      <p>Rating: {rating}</p>

      <hr />

      {/* ===== AGE CHECK ===== */}
      <h2>Age Check</h2>
      <input type="number" onChange={(e) => setAge(e.target.value)} />
      <p>{age && (age < 18 ? "You are a minor" : "You are an adult")}</p>

    </div>
  );
}

export default App;
