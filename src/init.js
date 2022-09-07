import "dotenv/config";

import "./db.js";
import "./models/ToDo.js";
import "./models/User.js";

import app from "./server.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ Server listening on port https://localhost:${PORT}`);
});
