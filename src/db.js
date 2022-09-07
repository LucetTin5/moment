import mongoose from "mongoose";

const URL = process.env.DB_URL;

mongoose.connect(URL);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleClose = (err) => console.log(`❌ DB error: `, err);

db.once("open", handleOpen);
db.on("close", handleClose);
