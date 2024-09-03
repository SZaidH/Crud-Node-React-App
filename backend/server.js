const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/signup", (req, res) => {
  const { uName, uPass } = req.body;
  console.log("Recieved Data: ", { uName, uPass });
  res.status(200).json({ status: "Success", message: "Data Received" });
});

app.listen(PORT, () => console.log(`Listening at port: ${PORT}`));
