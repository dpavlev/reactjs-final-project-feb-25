import User from "../models/User.js";

async function getUser(id) {
    return User.findById(id)
        .then((user) => {
            if (!user) {
                throw new Error("User not found!");
            }
            const payload = {
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber
            };
            return payload;
        })
        .catch((err) => {
            throw new Error("Error retrieving user: " + err.message);
        });
}

export default {
    getUser
};
