const express = require("express");
const mongooseDefaultConnection = require("./db/config");
const catRoutes = require('./routes/catRoutes');
const app = express();
const port = process.env.PORT || 3000;

mongooseDefaultConnection().catch((err) => console.log(err));

app.use(express.json());
app.use('/cats', catRoutes);

app.get("/health", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
