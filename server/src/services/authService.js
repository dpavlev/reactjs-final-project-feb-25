import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import StudioAcc from "../models/StudioAcc.js";

async function registerUser(userData) {
    if (userData.password !== userData.rePassword) {
        throw new Error("Passwords mismatch!");
    }
    const userEmailCount = await User.countDocuments({ email: userData.email });
    if (userEmailCount > 0) {
        throw new Error("Email exists!");
    }
    try {
        const newUser = await User.create(userData);
        const payload = {
            id: newUser._id,
            name: `${newUser.firstName} ${newUser.lastName}`,
            email: newUser.email
        };
        const token = jwt.sign(payload, "BESTKEPTSECRET");
        return token;
    } catch (err) {
        console.log(err);
    }
}

async function loginUser(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid email or password!");
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error("Invalid email or password!");
    }

    const payload = {
        id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email
    };

    const token = jwt.sign(payload, "BESTKEPTSECRET");
    return token;
}

async function loginStudio(email, password) {
    const studio = await StudioAcc.findOne({ email });
    if (!studio) {
        throw new Error("Invalid email or password!");
    }
    const isValid = await bcrypt.compare(password, studio.password);
    if (!isValid) {
        throw new Error("Invalid email or password!");
    }
    const payload = {
        id: studio._id,
        email: studio.email
    };
    const token = jwt.sign(payload, "BESTKEPTSECRET");
    return token;
}

async function registerStudio(userData) {
    if (userData.password !== userData.rePassword) {
        throw new Error("Passwords mismatch!");
    }
    const studioEmailCount = await StudioAcc.countDocuments({ email: userData.email });
    if (studioEmailCount > 0) {
        throw new Error("Email exists!");
    }
    try {
        const newStudio = await StudioAcc.create(userData);
        const payload = {
            id: newStudio._id,
            email: newStudio.email
        };
        const token = jwt.sign(payload, "BESTKEPTSECRET");
        return token;
    } catch (err) {
        console.log(err);
    }
}

export default {
    registerUser,
    loginUser,
    loginStudio,
    registerStudio
};
