import mongoose from "mongoose";
const propertySchema = mongoose.Schema({
    urerRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    ownerName: {
        type: String,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true
    },
    ownerPhn: {
        type: Number,
        required: true
    },
    propertyName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    addrress: {
        type: String,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    furnished: {
        type: Boolean,
        required: true
    },
    parking: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imageUrls: {
        type: Array,
        required: true
    },
    propertyAge: {
        type: Number,
        default: undefined
    },
    availability: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const property = mongoose.model("property", propertySchema);

export default property;