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

async function updateUser(id, userData) {
    return User.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                phoneNumber: userData.phoneNumber
            }
        },
        { new: true }
    )
        .then((user) => {
            if (!user) {
                throw new Error("User not found!");
            }
            const payload = {
                id: user._id,
                name: `${user.firstName} ${user.lastName}`,
                email: user.email
            };
            return payload;
        })
        .catch((err) => {
            throw new Error("Error updating user: " + err.message);
        });
}

async function deleteUser(id) {
    return User.findByIdAndDelete(id)
        .then((user) => {
            if (!user) {
                throw new Error("User not found!");
            }
            return;
        })
        .catch((err) => {
            throw new Error("Error deleting user: " + err.message);
        });
}

export default {
    deleteUser,
    getUser,
    updateUser
};
