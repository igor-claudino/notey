// require("dotenv").config();
const app = require("./app");

app.listen(process.env.API_PORT || 3333, () => {
  console.log(`Notey API running on port ${process.env.API_PORT || 3333}`);
});