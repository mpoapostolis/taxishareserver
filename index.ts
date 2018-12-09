import { Request, Response } from "express";
import { Socket } from "socket.io";

var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);

app.get("/", function(_req: Request, res: Response) {
  res.sendStatus(200).send("working");
});

io.on("connection", function(socket: Socket) {
  socket.emit("news", { hello: "world" });
});

server.listen(3001);
