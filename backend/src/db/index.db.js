const mongoose  = require ('mongoose');
const connectDb = async(req,res) =>{
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI)
        console.log(response.connection.host);
        
    } catch (error) {
        return res.status(500).json({
            message:'Internal Server Error',
            error : error.message,
        })
    }
}
module.exports=connectDb;