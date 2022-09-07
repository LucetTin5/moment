import express from "express";
import logger from "morgan";
import apiRouter from "./routers/apiRouter.js";
import rootRouter from "./routers/rootRouter.js";

const app = express();

app.use(logger("dev"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.set("views", process.cwd() + "/src/views");
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", rootRouter);
app.use("/api", apiRouter);

export default app;
