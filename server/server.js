const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const createUser = require("./controller/userController");
const app = express()

mongoose.connect("mongodb+srv://dirkishore002:smkishore@cluster0.l4n82dw.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database connected!"))
.catch(err => console.log(err));

app.use(express.json())
app.use(cors())

app.post("/api/user/create-user",createUser)

app.listen(5000,()=>{
    console.log("server is listening on port 5000");
})