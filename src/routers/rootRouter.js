"use strict";
// express
import express from "express";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  const clientIp = req.ip;
  console.log(clientIp);
  return res.render("index.html");
});

export default rootRouter;
