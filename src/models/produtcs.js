import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    status: Boolean,
});
export default mongoose.model("Products", productSchema);
