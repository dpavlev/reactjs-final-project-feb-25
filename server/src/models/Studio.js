import { Schema, model } from "mongoose";

const serviceSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true }
    },
    { _id: false }
);

const studioSchema = new Schema({
    studioName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    studioAddress: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    studioPhone: {
        type: String,
        required: true,
        unique: false,
        minLength: 10
    },
    studioDescription: {
        type: String,
        required: true,
        unique: false
    },
    studioImg: {
        type: String,
        required: true,
        unique: false
    },
    services: {
        type: [serviceSchema],
        required: true
    },
    studioAcc: {
        type: Schema.Types.ObjectId,
        ref: "StudioAcc"
    }
});

const Studio = model("Studio", studioSchema);

export default Studio;
