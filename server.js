const express = require("express");
const app = express();
const ioserve = express();
const { keystone, apps } = require("./index.js");
const http = require("http").createServer(ioserve);
const io = require("socket.io")(http);

keystone
  .prepare({
    apps: apps,
    dev: process.env.NODE_ENV !== "production",
  })
  .then(async ({ middlewares }) => {
    await keystone.connect();
    io.on("connection", (socket) => {
      console.log("A user connected");
      socket.on("disconnect", () => {
        console.log("A user disconnected");
      });
    });
    http.listen(process.env.LIVE_PORT, () => {
      console.log(`socket.io listening on port ${process.env.LIVE_PORT}`);
    });
    app.use(middlewares).listen(process.env.PORT, () => {
      console.log(`KeystoneJS listening on port ${process.env.PORT}`);
    });
  });
