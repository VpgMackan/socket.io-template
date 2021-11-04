const { Server } = require("socket.io")

module.exports = (httpServer) => {
    return io = new Server(httpServer, {
        path: "/socket",
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })
}

