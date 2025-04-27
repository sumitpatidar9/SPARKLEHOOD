import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello, ESM works!');
});

app.listen(port, () => {
  console.log(`Test server running on port ${port}`);
});
