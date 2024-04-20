const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8001;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
