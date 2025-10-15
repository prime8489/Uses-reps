import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ 
    message: "Welcome to Rehan’s API root!", 
    createdBy: "Rehan Ahmad" 
  });
});

app.get("/data", (req, res) => {
  const data = {
    message: "Hello from Rehan’s API 💫",
    createdBy: "Rehan Ahmad",
    time: new Date().toLocaleString()
  };
  res.json(data);
});

app.listen(3000, () => console.log("✅ API running on port 3000"));
