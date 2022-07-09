import dataStreamer from "./websocket/websocket.js";
setInterval(() => { console.log(dataStreamer("ETH-USD")); }, 5000);
