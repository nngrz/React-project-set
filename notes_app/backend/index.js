const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT ||3001;

app.use(cors());
app.use(express.json());

// Test route
app.get('/ping', (req, res) => {
  res.send('pong');
});

app.post('/logNote', (req, res) => {
  const note = req.body;
  console.log("Received note:", note);
  res.json({ status: 'received', noteId: note.id });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
