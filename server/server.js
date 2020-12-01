const app = require('./app.js');


const PORT = 3005;
app.listen(PORT, function () {
  console.log(`listening on http://localhost:${PORT}`);
});

