const mongoose= require('mongoose');

const connectDB=()=>{
    try {
        mongoose.connect(`${process.env.MONGO_URL}/Daksh`)
        .then(()=> console.log("MongoDB Connected"));
    } catch (error) {
        console.log("error in db connectivity");
    }
}

module.exports={
    connectDB
}