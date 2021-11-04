module.exports = (io, socket) => {
    const disconect = () => {
        io.emit("User with id: " + socket.id + ". Disconected")
    }

    socket.on("disconnecting", disconect)

    io.emit("User connected with id: " + socket.id)
}