import io from "socket.io-client";

const socket = io(import.meta.env.SERVER || "localhost:5000");
const socketClient = { socket };

export { socket };

export default socketClient;
