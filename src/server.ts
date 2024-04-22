const express = require("express");
const dotenv = require('dotenv')
const db = require('./config/dbConnect')
const app = express();
const cors = require("cors");
const PORT = 8001;
import logger from "./utils/logger";
dotenv.config();

logger.info("Server starting .......")

db();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
  logger.info(`Server has started and running on port ${PORT}`);
});
