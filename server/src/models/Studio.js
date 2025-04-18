import { Schema, model } from "mongoose";

const serviceSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        price: { type: Number, required: true }
    },
    { _id: false }
);

const bookingsSchema = new Schema(
    {
        services: {
            type: [serviceSchema],
            required: true
        },
        dateRangeStart: {
            type: Date,
            required: true
        },
        dateRangeEnd: {
            type: Date,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    { _id: false }
);

const studioSchema = new Schema({
    studioName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        trim: true
    },
    studioCity: {
        type: String,
        required: true,
        unique: false,
        minLength: 3,
        trim: true
    },
    studioAddress: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        trim: true
    },
    studioPhone: {
        type: String,
        required: true,
        unique: false,
        minLength: 10,
        maxLength: 14,
        trim: true
    },
    studioDescription: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    studioImg: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    services: {
        type: [serviceSchema],
        required: true
    },
    bookings: {
        type: [bookingsSchema]
    },
    studioAcc: {
        type: Schema.Types.ObjectId,
        ref: "StudioAcc"
    },
    dateCreated: {
        type: Date
    }
});

studioSchema.pre("save", function (next) {
    if (!this.dateCreated) {
        this.dateCreated = new Date();
    }
    this.studioCity = this.studioCity.toLowerCase();
    next();
});

const Studio = model("Studio", studioSchema);

export default Studio;
