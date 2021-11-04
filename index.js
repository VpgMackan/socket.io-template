const app = require("express")()
const httpServer = require("http").createServer(app);

const io = require("./socket/server.io")(httpServer)

const onConnection = (socket) => {
    require("./socket/message")(io, socket),
        require("./socket/esentials.io")(io, socket)
}

io.on("connection", onConnection)

app.use("/", require("./router/main"))

httpServer.listen(3000, () =>
    console.log("Running on port *:3000")
)