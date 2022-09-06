import express from "express";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");

app.get("/", (_, res) => res.render());

app.listen(PORT, () => console.log(`Connected at ${PORT}`));
