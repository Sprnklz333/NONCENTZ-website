const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('NONCENTZ AI Numismatic Grading System API is running.');
});

// Placeholder for grading endpoint
app.post('/api/v2/grade', (req, res) => {
  res.json({
    status: 'PROCESSING',
    message: 'Grading request received (mock response).'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
