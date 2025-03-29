import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const studioSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    password: {
        type: String,
        required: true,
        unique: false,
        minLength: 3
    },
    studio: {
        type: Schema.Types.ObjectId,
        ref: "Studio"
    }
});

studioSchema.virtual("rePassword").set(function (rePassword) {
    if (rePassword !== this.password) {
        throw new Error("Password mismatch!");
    }
});

studioSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

const StudioAcc = model("StudioAcc", studioSchema);

export default StudioAcc;
