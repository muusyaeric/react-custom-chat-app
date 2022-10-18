const express = require('express')
const http = require("http")
const cors = require("cors")
const app = express()
const { Server } = require("socket.io") //importing a server class

app.use(cors())
const server = http.createServer(app)

//instantiating the server
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",         //where the react app will be running
        methods: ["GET", "POST"],                //requests that will be accepted
    }
})

//listening for an event with the id/name connection
//socket is used to specicfy events and listening events
//each user gets a specific id if they connect to the server
//at the end of connnection event event, we need to add an event called disconnect (disconnects from the server)
io.on("connection", (socket) => {
    console.log(`User connnected: ${socket.id}`);

    //pass the room from the frontend using the variable called data below data
    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    })

    socket.on("send_message", (data) => {
        //emiting front backend to frontend...we emit the message to whoever is in the room
        socket.to(data.room).emit("receive_message",data)
    })

    socket.on("disconnect", () => {
        console.log("user disconnected...", socket.id);
    })

})


server.listen(3001, () => {
    console.log(`Server running on http://localhost:3001`);
})