/*const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Nisha Shah", email: "nisha@gmail.com" },
  { id: 2, name: "Akshit Shah", email: "akshit@gmail.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});*/

/*
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Nisha Shah", email: "nisha@gmail.com" },
  { id: 2, name: "Akshit Shah", email: "akshit@gmail.com" }
];

// GET users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST user
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and Email are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User added successfully",
    user: newUser,
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

*/















const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Nisha Shah", email: "nisha@gmail.com" },
  { id: 2, name: "Akshit Shah", email: "akshit@gmail.com" },
  { id: 3, name: "Rahul Mehta", email: "rahul@gmail.com" }
];

// GET users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST user
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and Email are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User added successfully",
    user: newUser,
  });
});

// UPDATE user
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name || user.name;
  user.email = email || user.email;

  res.json({
    message: "User updated successfully",
    user,
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1);

  res.json({
    message: "User deleted successfully",
    user: deletedUser[0],
  });
});
