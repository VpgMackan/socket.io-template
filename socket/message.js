module.exports = (io, socket) => {
    const send = (msg) => {
        io.emit(msg)
    }

    socket.on("message", send)
}
