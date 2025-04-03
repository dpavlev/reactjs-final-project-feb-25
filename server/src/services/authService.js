import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import StudioAcc from "../models/StudioAcc.js";

async function registerUser(userData) {
    const userEmailCount = await User.countDocuments({ email: userData.email });
    if (userEmailCount > 0) {
        throw new Error("Email already exists!");
    }

    const userPhoneCount = await User.countDocuments({ phoneNumber: userData.phoneNumber });
    if (userPhoneCount > 0) {
        throw new Error("Phone number already exists!");
    }

    if (userData.password !== userData.rePassword) {
        throw new Error("Passwords mismatch!");
    }

    try {
        const newUser = await User.create(userData);
        const payload = {
            id: newUser._id,
            name: `${newUser.firstName} ${newUser.lastName}`,
            email: newUser.email
        };
        return payload;
    } catch (err) {
        throw new Error("Error creating user: " + err.message);
    }
}

async function registerStudio(userData) {
    const studioEmailCount = await StudioAcc.countDocuments({ email: userData.email });
    if (studioEmailCount > 0) {
        throw new Error("Email exists!");
    }
    if (userData.password !== userData.rePassword) {
        throw new Error("Passwords mismatch!");
    }
    try {
        const newStudio = await StudioAcc.create(userData);
        const payload = {
            id: newStudio._id,
            email: newStudio.email,
            isStudio: true
        };
        return payload;
    } catch (err) {
        throw new Error("Error creating studio!");
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

    return payload;
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
        email: studio.email,
        isStudio: true,
        hasStudio: Boolean(studio.studio)
    };
    return payload;
}

export default {
    registerUser,
    loginUser,
    loginStudio,
    registerStudio
};
