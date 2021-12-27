const express = require("express");

const PORT = 5001;
const app = express();

app.listen(PORT, () => {
  console.log(`navigate to http://localhost:${PORT}`);
});
