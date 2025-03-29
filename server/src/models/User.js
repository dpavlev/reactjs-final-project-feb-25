import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: false,
        minLength: 2
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
        minLength: 2
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        minLength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /\@[a-zA-Z]+.[a-zA-Z]+$/,
        minLength: 10
    },
    password: {
        type: String,
        match: /^\w+$/,
        minLength: [6, "Password should be at least 6 characters!"],
        trim: true
    }
});

userSchema.virtual("rePassword").set(function (rePassword) {
    if (rePassword !== this.password) {
        throw new Error("Password mismatch!");
    }
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

const User = model("User", userSchema);

export default User;
