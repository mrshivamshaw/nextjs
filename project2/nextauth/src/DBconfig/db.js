import mongoose from 'mongoose'

 const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology: true,   
            useNewUrlParser: true
        })
        console.log("DB connected", connection.connection.host);
    } catch (error) {
        console.log("DB connection failed", error);
    }
}

export default connectDB