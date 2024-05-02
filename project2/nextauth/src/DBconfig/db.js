import mongoose from 'mongoose'

export default connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,   
            useNewUrlParser: true
        })
        console.log("DB connected", connection.connection.host);
    } catch (error) {
        console.log("DB connection failed", error);
    }
}