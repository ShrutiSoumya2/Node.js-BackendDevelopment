import mongoose from 'mongoose';
async function connectDB() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/BCASectionA')
        console.log('connected to mongodb')
 
    } catch (error) {
        console.log('failed to connect to mongodb')
        console.error(error)
    }
}    
export default connectDB;