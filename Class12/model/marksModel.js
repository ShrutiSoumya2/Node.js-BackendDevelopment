import mongoose from "mongoose";
const marksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    }
})
const Marks = mongoose.model('Marks', marksSchema)
export default Marks