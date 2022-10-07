const WebSocket = require("ws"); // npm i ws

const { WEBSOCKET_PORT = 8080 } = process.env; // localhost:8080/

const wss = new WebSocket.Server({ port: WEBSOCKET_PORT });

wss.on("connection", ws => {
	ws.on("message", message => {
		console.log(+new Date(), "[Server] Received message: ", message.toString());
		ws.send(JSON.stringify({ response: `Received ${message.toString()}` }));
	});

	ws.send(JSON.stringify({ message: "Welcome from WebSocket Server!" }));
});
