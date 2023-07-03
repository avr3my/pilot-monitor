import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import pressAnyKey from "press-any-key";

import express from "express";
import http from "http";
import { Server } from "socket.io";

// placeholder for data
const data = {
  Altitude: 0,
  HIS: 0,
  ADI: 0,
};

// initiate app and server
const PORT = 3500;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});


// send data to new socket
io.on("connection", (socket) => {
  socket.emit('receive-data', data);
})

// start server
server.listen(PORT, () => {});


// main loop
(async function getData() {
  const rl = readline.createInterface({ input, output });
  do {
    data.Altitude = parseInt(await rl.question("\nAltitude: "));
  } while (isNaN(data.Altitude) || data.Altitude < 0 || data.Altitude > 3000);
  do {
    data.HIS = parseInt(await rl.question("\nHIS: "));
  } while (isNaN(data.HIS) || data.HIS < 0 || data.HIS > 360);
  do {
    data.ADI = parseInt(await rl.question("\nADI: "));
  } while (isNaN(data.ADI) || data.ADI < -100 || data.ADI > 100);
  rl.close();
  console.log("\nPress any key");
  await pressAnyKey("\n>");

  // send data to all sockets
  io.emit("receive-data", data);
  console.log("\n> Sending data");

  // call function again for new data
  await getData();
})()
