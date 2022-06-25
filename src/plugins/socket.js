import io from "socket.io-client";

const socket = io(process.env.VITE_SERVER || "localhost:5000");
const socketClient = { socket };

export { socket };

export default socketClient;
