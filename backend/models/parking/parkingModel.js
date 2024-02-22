import mongoose from "mongoose";
import connectDB from "../../config/db.js";

const parkingSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: [true, "Please enter id."]
        },
        name: {
            type: String,
            required: [true, "Please enter the name for this parking lot."]
        },
    },
    {
        timestamps: true
    }
)

const Parking = mongoose.model('parking', parkingSchema);

export default Parking