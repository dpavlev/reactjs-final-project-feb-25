import { Schema, model } from "mongoose";

const studioSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    address: {
        type: String,
        required: true,
        unique: false,
        minLength: 3
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minLength: 10
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    imageUrl: {
        type: String,
        required: true,
        unique: false
    },
    services: {
        type: [{ String: Number }],
        required: true
    },
    studioAcc: {
        type: Schema.Types.ObjectId,
        ref: "StudioAcc"
    }
});

const Studio = model("Studio", studioSchema);

export default Studio;
