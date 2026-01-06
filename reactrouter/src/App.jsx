import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

/* ================================
   HOME PAGE
================================ */
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>

      {/* Button based redirect */}
      <button onClick={() => navigate("/about")}>
        Go to About
      </button>
    </div>
  );
}

/* ================================
   ABOUT PAGE
================================ */
function About() {
  return <h2>About Page</h2>;
}

/* ================================
   CONTACT PAGE
================================ */
function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thankyou");
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

/* ================================
   THANK YOU PAGE
================================ */
function ThankYou() {
  return <h2>Thank You for submitting!</h2>;
}

/* ================================
   LOGIN PAGE (REDIRECT)
================================ */
function Login() {
  const navigate = useNavigate();

  const loginSuccess = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={loginSuccess}>Login</button>
    </div>
  );
}

/* ================================
   DASHBOARD
================================ */
function Dashboard() {
  return <h2>Dashboard Page</h2>;
}

/* ================================
   USER INPUT PAGE
================================ */
function UserInput() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Input</h2>
      <input onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      <button onClick={() => navigate("/profile", { state: name })}>
        Go to Profile
      </button>
    </div>
  );
}

/* ================================
   USER PROFILE PAGE
================================ */
function UserProfile({ location }) {
  return <h2>User Name: {history.state?.usr}</h2>;
}

/* ================================
   CANCEL / GO BACK
================================ */
function CancelPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Cancel Page</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

/* ================================
   MAIN APP
================================ */
export default function App() {
  return (
    <BrowserRouter>

      {/* NAVIGATION BAR */}
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/" style={{ margin: "10px" }}>Home</NavLink>
        <NavLink to="/about" style={{ margin: "10px" }}>About</NavLink>
        <NavLink to="/contact" style={{ margin: "10px" }}>Contact</NavLink>
        <NavLink to="/login" style={{ margin: "10px" }}>Login</NavLink>
        <NavLink to="/userinput" style={{ margin: "10px" }}>User Input</NavLink>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userinput" element={<UserInput />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/cancel" element={<CancelPage />} />
      </Routes>

    </BrowserRouter>
  );
}
