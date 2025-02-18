const dotenv = require('dotenv').config({path: "./.env"});
const app = require('./app');
const connectDb = require('./db/index.db');
connectDb();
const port = process.env.PORT;
app.listen(port, () => {
    console.log("app is running on port: ", port);
    
})