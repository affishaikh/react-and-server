const express = require('express');
const app = express();
const PORT = 3001;

app.get('/food', (req, res) => {
  console.log('Url =>', req.url);
  res.send('Ichiraku Ramen');
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
