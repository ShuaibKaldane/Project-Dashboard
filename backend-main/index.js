const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const http = require("http");
const { Server } = require("socket.io");
const mainRouter =  require("./routes/main.router")
dotenv.config();
function startServer() {
    const app = express();
    const port = process.env.PORT || 3000;
  
    app.use(bodyParser.json());
    app.use(express.json());
  
    const mongoURI = process.env.MONGODB_URI;
  
    mongoose
      .connect(mongoURI)
      .then(() => console.log("MongoDB connected!"))
      .catch((err) => console.error("Unable to connect : ", err));
  
    app.use(cors({ origin: "*" }));
  
    // app.use("/", (req , res)=>{
    //     res.send("Welcome")
    // });
    app.use("/", mainRouter);
  
    let user = "test";
    const httpServer = http.createServer(app);
    const io = new Server(httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });
  
    io.on("connection", (socket) => {
      socket.on("joinRoom", (userID) => {
        user = userID;
        console.log("=====");
        console.log(user);
        console.log("=====");
        socket.join(userID);
      });
    });
  
    const db = mongoose.connection;
  
    db.once("open", async () => {
      console.log("CRUD operations called");
      // CRUD operations
    });
  
    httpServer.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  }
  startServer();