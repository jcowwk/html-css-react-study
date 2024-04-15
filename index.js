const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Express 서버가 동작 중입니다!');
});

app.listen(3000);