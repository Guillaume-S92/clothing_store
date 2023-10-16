const express = require("express");
const data = require("./data");
const dotenv = require("dotenv");
// const config = require("./config");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const bodyParser = require("body-parser");

dotenv.config();
/*const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl , {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.catch(error => console.log(error.reason));*/

// MongoDB Connection
mongoose.connect('mongodb+srv://Guillaume:test@cluster0.pfjuogp.mongodb.net/Dressing_backup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('MongoDB connection error:', error));

const app = express();
app.use(bodyParser.json());

app.use("/api/users" , userRoute);
app.use("/api/products" , productRoute);


app.listen(5000 , ()=>{
    console.log("Server started at http://localhost:5000")
});
